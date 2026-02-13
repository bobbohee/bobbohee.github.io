---
layout: post
category: Development
title: 'Github에서 2단계 인증(Two-Factor Authentication) 사용하기'
subtitle: '2단계 인증을 사용해 계정 보안 강화하기 🔒'
banner: '/assets/images/2021-07-04-github-using-two-factor-authentication/banner.jpeg'
---

나는 사용하는 비밀번호가 한정되어있어, 한 계정이 해킹되면 다른 곳에서 사용하는 계정도 해킹될 가능성이 높아 2단계 인증이 있으면 거의 사용하는 편이다.

(어디서 본건데 한 계정을 해킹하면, 다른 사이트에 계정을 대입해봐서 그렇게 다른 사이트 계정도 해킹한다고 한다.)

<br>

깃허브도 2단계 인증이 있다는 걸 최근에야 알게 되었다. 
깃허브는 해킹당하면 정말 큰일나기 때문에 바로 2단계 인증을 사용하기로 했다. ✊

# 2단계 인증 사용하기

## #1 

깃허브 페이지에서 프로필을 눌러 `Settings` 메뉴를 클릭한다.

![github 설정](/assets/images/2021-07-04-github-using-two-factor-authentication/01-github-settings.png){: .shadow}

## #2

설정 페이지에서 `Account Security` 탭으로 이동해 `Enable two-factor authentication` 버튼을 클릭한다.

![github 계정 보안](/assets/images/2021-07-04-github-using-two-factor-authentication/02-github-account-security.png){: .shadow}

## #3

2단계 인증 시, 인증 코드를 입력해야하는데 인증 코드를 OTP[^1] 애플리케이션에서 받거나, 또는 문자 메시지로 받을 수 있다. 
이 글에서는 OTP 애플리케이션을 기준으로 설명하기 때문에 `Set up using an app` 버튼을 클릭한다. 

![github 2단계 인증 등록 1](/assets/images/2021-07-04-github-using-two-factor-authentication/03-github-two-factor.png){: .shadow}

## #4

`Recovery Code`는 OTP 애플리케이션을 사용할 수 없을 경우, 대신 사용할 수 있는 코드이다.
어딘가에 저장해두고, `Next` 버튼을 클릭한다. 

⚠️&nbsp; Download, Print, Copy 중 버튼을 클릭하지 않으면, `Next` 버튼은 활성화되지 않는다.

![github 2단계 인증 등록 2](/assets/images/2021-07-04-github-using-two-factor-authentication/04-github-two-factor.png){: .shadow}

## #5

QR 코드가 나타났다! 이제 OTP 애플리케이션에서 QR 코드를 스캔해 등록하면 된다.

![github 2단계 인증 등록 3](/assets/images/2021-07-04-github-using-two-factor-authentication/05-github-two-factor.png){: .shadow}

## #6

여러가지 OTP 애플리케이션이 있지만, 그 중 `Twillo Authy` 애플리케이션을 사용하기로 했다. 다른 애플리케이션을 사용해도 괜찮다. 👌

(구글플레이스토어를 사용한다면, `Twilio Authy 2-Factor Authentication`을 설치하면 된다.)

![authy OTP 등록 1](/assets/images/2021-07-04-github-using-two-factor-authentication/06-appstore-twilio-authy.jpeg){: .shadow.half}

<br>

👉&nbsp; [Google Authenticator가 아닌 Twillo Authy를 사용하는 이유](https://steemit.com/kr/@segyepark/google-authenticator-authy){:target="_blank"}

## #7

설치가 완료되었다면, 애플리케이션을 실행시켜 `Add Account` 버튼을 클릭한다. 

![authy OTP 등록 1](/assets/images/2021-07-04-github-using-two-factor-authentication/07-add-authy-otp.PNG){: .shadow.half}

## #8

`Scan QR Code` 버튼을 클릭하면, QR 코드를 스캔하는 화면이 나타난다. 
깃허브 페이지([#5](#5))에 QR 코드를 스캔한다.

![authy OTP 등록 2](/assets/images/2021-07-04-github-using-two-factor-authentication/08-add-authy-otp.PNG){: .shadow.half}

## #9

QR 코드 스캔을 완료했더니 애플리케이션에서 자동으로 깃허브 로고와 ID를 넣어주었다. 👻&nbsp; 
`Save` 버튼을 클릭해 저장한다. 

![authy OTP 등록 3](/assets/images/2021-07-04-github-using-two-factor-authentication/09-add-authy-otp.PNG){: .shadow.half}

## #10

성공적으로 등록을 완료해 인증 코드가 나타났다! 인증 코드는 30초마다 갱신되기 때문에 빨리빨리 서둘러 사이트에 입력해야 한다. 🏃

![authy OTP 등록 4](/assets/images/2021-07-04-github-using-two-factor-authentication/10-add-authy-otp.PNG){: .shadow.half}

## #11

깃허브 페이지로 돌아와 인증 코드를 입력하고, `Enable` 버튼을 클릭한다. 

![github 2단계 인증 등록 4](/assets/images/2021-07-04-github-using-two-factor-authentication/11-github-two-factor.png){: .shadow}

## #12

굉장히 쉽게 2단계 인증을 활성화했다! ✌️

![github 2단계 인증 등록 완료](/assets/images/2021-07-04-github-using-two-factor-authentication/12-github-two-factor.png){: .shadow}

<br><br>

앞으로 깃허브 로그인을 하면, 2단계 인증 화면이 나타난다. OTP 애플리케이션에서 인증 코드를 확인해 입력해주면 된다.

로그인이 조금 번거로워졌지만, 그만큼 계정을 안전하게 보호할 수 있으니 번거롭더라도 ... 👌

![github OTP 코드 입력](/assets/images/2021-07-04-github-using-two-factor-authentication/13-github-two-factor.png){: .shadow}

# 마치며, 🙇🏻

계정 해킹을 너무 많이 당했던 내 친구는 열이 받아 🤬 , 새로운 계정의 아이디를 _gozldwhagkwlak_ (해킹좀하지마), 비밀번호를 _ahtgkrpTwl?_ (못하겠지?)로 설정해 사용했었다. ㅋㅋㅋㅋ 


[^1]: One Time Password 의 약자로, 일회용 인증번호이다.