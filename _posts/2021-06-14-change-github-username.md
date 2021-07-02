---
layout: post
categories: Github
title: 'Github에 username 변경하기'
subtitle: '나만의 개발 닉네임 사용하기 ✨'
banner: '/assets/images/2021-06-14-change-github-username/banner.jpeg'
---

# username을 바꾼 이유

원래 깃허브 username으로 무난하게 영문 이름인 `park-bohee`를 사용하고 있었다. 

깃허브에서 username은 인스타그램에서와 같이 이름처럼 사용되기 때문에 눈에 들어올만한 특색있는 이름을 사용하고 싶었다. 😎 

기존에 깃허브로 하던 것이 있어서 username을 변경했을 때 문제가 생길까 싶어 바꾸지 말까 생각했지만, 누군가 내가 하고 싶은 이름을 먼저 채가기 전에 빨리 바꾸기로 했다.

# username을 바꾸는 방법

## # 1

깃허브 페이지에서 프로필을 눌러 `Settings` 메뉴를 클릭한다.

![github 설정](/assets/images/2021-06-14-change-github-username/01.%20github%20설정.png){: .shadow}

## # 2

설정 페이지에서 `Account` 탭으로 이동해 `Change username` 버튼을 클릭한다.

![github 계정](/assets/images/2021-06-14-change-github-username/02.%20github%20계정.png){: .shadow}

## # 3

`Change username` 버튼을 클릭하면, username을 변경할 때 알아야 할 주의사항이 나타난다. 
주의사항을 확인했다면, `I understand, let's change my user name` 버튼을 클릭한다.

![username 변경 시 주의사항](/assets/images/2021-06-14-change-github-username/03.%20username%20변경%20시%20주의사항.png){: .shadow}

<br>

⚠️&nbsp; username을 변경할 때 알아야 할 주의사항

- 이전 프로필 페이지에 접근할 수 없습니다.
- 이전 Github Pages 사이트에 접근할 수 없습니다.
- 기존 repository 주소의 username을 변경해줄 것입니다.
- 이름 변경하는 데는 몇 분이 걸릴 수 있습니다.

## # 4

변경할 username 입력하고, `Change my username` 버튼을 클릭하면 username이 변경된다.

⚠️&nbsp; 이미 다른 누군가가 사용하고 있는 username이라면, 사용이 불가하다는 메세지가 나타난다. 

![username 변경](/assets/images/2021-06-14-change-github-username/04.%20username%20변경.png){: .shadow}

## # 5

굉장히 쉽게 username을 변경했다! ✌️ 

![새로운 username](/assets/images/2021-06-14-change-github-username/05.%20새로운%20username.png){: .shadow}

# username을 변경한 이후

## remote 주소 변경

로컬 저장소에서 이전 username으로 설정되어있는 저장소 주소를 변경해야 한다. 

### 저장소 주소 확인

현재 저장소 주소를 확인해보면 이전 username인 `park-bohee`로 설정되어있다.

```bash
$ git remote -v
origin  https://github.com/park-bohee/no-access-please.git (fetch)
origin  https://github.com/park-bohee/no-access-please.git (push)
```

### 저장소 주소 변경

바꾼 username인 `bobbohee`로 저장소 주소를 변경한다.

```bash
$ git remote set-url origin https://github.com/bobbohee/no-access-please.git
```

## github pages 주소 변경

깃허브는 username으로 도메인을 생성하기 때문에 이전 username으로 설정되어있는 github pages가 있다면 변경해야 한다.

Google 애널리틱스에 이전 블로그 주소(https://park-bohee.github.io)로 등록되어 있어서, 현재 블로그 주소(https://bobbohee.github.io)로 변경했다.

# 마치며, 🙇🏻

Google 애널리틱스에서 주소를 변경해줘야 되는 것도 모르고 있어서, 한동안 조회수가 안나왔었다. 작고 소중한 내 조회수...🥲

## 참고한 사이트

[https://velog.io/@tenny/Github-username-변경하기](https://velog.io/@tenny/Github-username-%EB%B3%80%EA%B2%BD%ED%95%98%EA%B8%B0){:target="_blank"}