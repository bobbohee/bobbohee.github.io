---
layout: post
category: Github
title: '하나의 컴퓨터에서 여러 Github 계정 사용하기'
subtitle: 'Github에 SSH 키를 등록하고 사용하기 🔑'
banner: '/assets/images/2021-06-20-github-using-multi-account/banner.jpeg'
---

###### 이 글을 읽기 전!

⚠️&nbsp; MacOS를 기준으로 작성된 글입니다.

<br>

깃허브를 개인적으로 사용하다가, 회사에 입사하고 업무적으로도 사용하게 되었다.
친구는 입사하면서부터 깃허브 계정을 개인용과 업무용으로 분리했다고 하는데, 나는 굳이 분리해야할 필요를 느끼지못해 분리하지 않았다. 💦

그동안 회사에서 깃허브를 사용하는 방식은 Contribution(잔디)에 기록이 남지 않았는데, 이제 PR을 활용한 방식으로 바뀌어서 PR이 Merge 될 때 마다 Contribution에 기록이 남게 되었다.
Contribution에는 온전히 개인적인 기록만 남기고 싶었기 때문에, 업무로 인해서 기록이 남는 것이 스트레스가 되었다. 

내 소중한 잔디밭이 더 망가지기 전에 얼른 분리해버리자! 생각이 들어 바로 업무용 깃허브 계정을 생성했다. 🌱

# SSH 키 생성하기

SSH 키를 생성하기 위해 `.ssh` 폴더로 이동한다.

(꼭 `.ssh` 폴더에 키를 생성할 필요는 없지만, `.ssh` 폴더에 생성하기를 권장한다.)

```bash
$ cd ~/.ssh
```

<br>

아래 명령어를 통해 SSH 키를 생성한다. 
filename은 아무렇게나 지어도 되지만, 구분할 수 있는 이름을 사용한다.

```bash
$ ssh-keygen -t rsa -C "comment" -f "[filename]"
$ ssh-keygen -t rsa -C personal.github.com -f personal.github.com 
```

<br>

명령어를 입력하면 비밀번호를 입력하라는 매세지가 나타난다. 
비밀번호를 사용하고 싶지 않을 경우, `Enter` 키를 입력하면 SSH 키가 생성된다.

```bash
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
```

<br>

올바르게 키가 생성되었을 경우, 입력한 filename으로 public한, private한 파일 2개가 생성된다. 
`.pub` 확장자가 있는 파일은 public한 SSH 키이고, 없는 파일은 private한 SSH 키이다.

```bash
$ ls -la
-rw-------   1 parkbohee  staff  2610  6 12 21:50 personal.github.com
-rw-r--r--   1 parkbohee  staff   574  6 12 21:50 personal.github.com.pub
```

# 컴퓨터에 SSH 키 등록하기

생성한 SSH 키를 컴퓨터에 등록한다. 

```bash
$ ssh-add ~/.ssh/personal.github.com
Identity added: /Users/parkbohee/.ssh/personal.github.com (personal.github.com)
```

<br>

아래 명령어를 통해 컴퓨터에 SSH 키가 등록되었는지 확인할 수 있다.

```bash
$ ssh-add -l
3072 [key 파일 일부] personal.github.com (RSA)
```

# SSH Config 파일 생성하기

SSH `config` 파일을 수정/생성한다. 
(환경에 따라 파일이 이미 존재하는 경우도 있다.)

```bash
$ vi ~/.ssh/config
```

```bash
# Personal Github
Host github.com
 HostName github.com
 IdentityFile  ~/.ssh/personal.github.com
 User git

# Work Github
Host work.github.com
 HostName github.com
 IdentityFile  ~/.ssh/work.github.com
 User git
```

`Host`는 깃허브에 repository 주소를 사용할 때, 사용된다.

기본적으로는 Host는 github.com을 사용하기 때문에 가장 많이 사용하는 계정의 Host를 `github.com`으로 지정하고, 업무용과 같이 서브로 사용하는 계정의 Host는 다르게 설정해주어야 한다.

위에 업무용 깃허브 계정의 Host를 `work.github.com`로 지정했기 때문에 SSH 주소를 사용하는 경우, 아래와 같이 입력해야 한다.

```
(x) git@github.com:parkbohee/sample.git
(o) git@work.github.com:parkbohee/sample.git
```

`IdentityFile`은 생성한 SSH 키 위치를 압력한다.

# Github에 SSH 키 등록하기

## # 1

깃허브 페이지에서 프로필을 눌러 `Settings` 메뉴를 클릭한다.

![github 설정](/assets/images/2021-06-20-github-using-multi-account/01-github-settings.png){: .shadow}

## # 2

설정 페이지에서 `SSH and GPG keys` 탭으로 이동해 `New SSH key` 버튼을 클릭한다.

![github SSH](/assets/images/2021-06-20-github-using-multi-account/02-github-ssh.png){: .shadow}

## # 3

`Title`은 SSH 키 이름을 입력한다. 

`Key`는 public한 SSH 키 파일에 내용을 붙여넣는다. 

```bash
$ view ~/.ssh/personal.github.com.pub
```

<br>

`Add SSH key` 버튼을 클릭하면, SSH 키 등록이 완료된다.

![github SSH 등록](/assets/images/2021-06-20-github-using-multi-account/03-github-ssh.png){: .shadow}

## # 4

굉장히 쉽게 SSH 키을 등록했다! ✌️

![github SSH 등록 완료](/assets/images/2021-06-20-github-using-multi-account/04-github-ssh.png){: .shadow}


# + 추가로!

## Git Config 파일 변경하기

보통 커밋할 때 필요한 계정 정보인 username과 useremail은 `~/.gitconfig` 파일에 전역으로 설정해놓고 사용한다.
하지만 다른 계정을 사용하는 경우, username과 useremail은 보통 아래와 같은 명령어를 사용해 변경한다.

```bash
$ git config --local user.name "workman"
$ git config --local user.email "workman@gmail.com"
```

<br>

그렇게 귀찮은 작업은 아니지만, `.gitconfig`파일에 `includeIf`을 사용하면 특정 폴더 내에서는 특정 계정 정보를 자동으로 사용할 수 있다.

업무용 계정 정보를 저장할 `.gitconfig-work` 파일을 생성해 업무용 계정의 username과 useremail을 입력한다.

```bash
$ vi ~/.gitconfig-work
[user]
        name = workman  
        email = workman@gmail.com
```

<br>

`includeIf`를 사용해 `/Users/parkbohee/Documents/work/`라는 특정 폴더 내에서는 `.gitconfig-work` 파일에 있는 업무용 계정 정보를 사용하도록 한다.

```bash
$ vi ~/.gitconfig
[user]
        name = bobbohee
        email = parkbohee0705@gmail.com
[includeIf "gitdir:/Users/parkbohee/Documents/work/"]
        path = .gitconfig-work
```

# 마치며, 🙇🏻

진작에 계정 분리할 걸...😞&nbsp; 그래도 지금이라도 분리해서 다행이다.

## 참고한 사이트

[https://1ilsang.dev/2020-02-30/devtip/github-multi-auth](https://1ilsang.dev/2020-02-30/devtip/github-multi-auth){:target="_blank"}

[https://blog.outsider.ne.kr/1448](https://blog.outsider.ne.kr/1448){:target="_blank"}

[https://velog.io/@leyuri/Github-SSH-를-활용하여-git-계정-여러개-사용하기](https://velog.io/@leyuri/Github-SSH-%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%98%EC%97%AC-git-%EA%B3%84%EC%A0%95-%EC%97%AC%EB%9F%AC%EA%B0%9C-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0){:target="_blank"}
