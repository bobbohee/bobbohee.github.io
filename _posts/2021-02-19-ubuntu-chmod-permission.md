---
layout: post
categories: Ubuntu 
title: '우분투 chmod로 파일 권한(Permission) 변경하기'
subtitle: '암호 같은 권한 -rwxr-xr-x 알아보기 🔍'
banner: '/assets/images/2021-02-19-ubuntu-chmod-permission/banner.jpeg'
---

터미널에서 `ls -la` 명령어로 파일 목록을 확인하면서, `-rwxr-xr-x` 문자들을 보고 어려운 암호 같아 그냥 넘겼었다.
이번에 ubuntu 서버에 구축한 서비스에서 권한 관련 에러가 발생해서 파일 권한을 수정하기 위해 해결 방법을 찾다가 파일 목록에서 보았던 암호 같은 문자들이 권한을 나타낸 문자들임을 알게 되었다.

(어려운 암호가 아니었는데 왜 그냥 넘겼는지 ... 🤣)

# 파일 권한 확인하기

`ls -l` 명령어를 사용해 파일 권한을 확인한다.

(`ls -l` 대신 `ls -la` 또는 `ll`[^1] 명령어를 사용할 수 있다.)

<br>

```bash
$ ls -l
-rw-r--r--  1 root root   593 May  3  2020 user.service
drwxr-xr-x  2 root root  4096 Jul 30  2020 user.service.d
```

### ls 옵션

- `-l` 파일에 대한 정보를 출력한다.
- `-a` 숨김 파일을 출력한다.

## 파일 속성

파일 속성은 총 7가지로 이루어져있다.

```bash
-rw-r--r--  1 root root   593 May  3  2020 user@.service
```

1. `-rw-r--r--` 파일 권한(Permission)
2. `1` 해당되는 데이터 블록에 연결된 파일의 개수
3. `root` 파일 소유자
4. `root` 파일 소유자가 속한 그룹
5. `593` 파일 사이즈
6. `May 3 2020` 최종 변경 날짜
7. `user@service` 파일 명

## 권한 구성

권한은 파일 유형, 소유자 권한(User), 그룹 소유자 권한(Group), 일반 사용자 권한(Other) 총 4개 그룹, 10개의 문자로 이루어져 있다.

|예시       | 파일 유형 (1) | 소유자 권한 (3) | 그룹 소유자 권한 (3) | 일반 사용자 권한 (3) |
|:--:      |:--:        |:--:          |:--:              |:--: 	        |
|-rw-r--r--| -  	    | rw- 	       | r-- 	          | r-- 	        |
|drwxr-xr-x| d 	        | rwx 	       | r-x 	          | r-x 	        |

### 파일 유형

- `-` 파일
- `d` 폴더 (디렉토리)

### rwx란?

- `r` 읽기 (Read)
- `w` 쓰기 (Write)
- `x` 실행 (eXecute)

<br>

권한이 `rwx`라면, 파일을 읽고, 쓰고, 실행할 수 있음을 나타낸다. 

권한이 `r-x`라면, 파일을 읽고, 실행할 수 있고, 쓰기는 할 수 없음을 나타낸다. 

# 파일 권한 변경하기

파일 권한 `chmod`[^2] 명령어를 사용하며, 2가지 방법을 사용해 변경할 수 있다. 

## 캐릭터 이용하기

변경하고자 하는 대상에 r, w, x 권한을 더하거나(+), 빼는(-) 방식으로 사용한다.

### 대상

- `u` 소유자 권한 (User)
- `g` 그룹 소유자 권한 (Group)
- `o` 일반 사용자 권한 (Other)

<br>

user.service 파일의 소유자 권한(u)에 실행 권한(x)을 추가(+)하고자 하면, 아래와 같이 사용할 수 있다.

```bash
$ chmod u+x user.service
```

<br>

여러 대상에 rwx 권한을 한 번에 변경하고자 하면, 아래와 같이 사용할 수 있다.

```bash
$ chmod u+rwx, g-w, o-wx user.service
```

## rwx 숫자 값 이용하기

r, w, x는 각각 고유한 숫자 값을 가지고 있다. 부여하고자 하는 권한의 숫자 값을 더해 사용한다.

### rwx 숫자 값

- `r` 4
- `w` 2
- `x` 1

<br>

rwx를 모두 더하면, r(4) + w(2) + x(1) = 7이다.

`777`은 소유자 권한(User), 그룹 소유자 권한(User), 일반 사용자 권한(Other)에 rwx 권한을 부여하겠다는 의미이다. 

```bash
$ chmod 777 user.service
-rwxrwxrwx  1 root root   593 May  3  2020 user.service
```

<br>

소유자 권한(User)에게만 모든 권한을 부여하고, 그룹 소유자 권한(User), 일반 사용자 권한(Other)은 읽기, 실행 권한만 부여하고자 하면 아래와 같이 사용할 수 있다.

```bash
$ chmod 755 user.service
-rwxr-xr-x  1 root root   593 May  3  2020 user.service
```

# 마치며, 🙇🏻

4, 2, 1로 `777` 같이 3가지 대상의 3가지 파일 권한을 설명할 수 있다니 ...🤭 재미있다. 

## 참고한 사이트

[https://lift2k.tistory.com/entry/Permission-리눅스유닉스의-퍼미션접근제어접근권한](https://lift2k.tistory.com/entry/Permission-%EB%A6%AC%EB%88%85%EC%8A%A4%EC%9C%A0%EB%8B%89%EC%8A%A4%EC%9D%98-%ED%8D%BC%EB%AF%B8%EC%85%98%EC%A0%91%EA%B7%BC%EC%A0%9C%EC%96%B4%EC%A0%91%EA%B7%BC%EA%B6%8C%ED%95%9C){:target="_blank"}

[https://securityspecialist.tistory.com/40](https://securityspecialist.tistory.com/40){:target="_blank"}

[^1]: ls -l 명령어의 약어이다. 

[^2]: change mode의 약어이다.