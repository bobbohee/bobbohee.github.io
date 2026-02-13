---
layout: post
category: Development
title: '자바스크립트(JavaScript)란?'
subtitle: '자바스크립트 기초 탄탄히 다지기 - 1편 ️🌱'
banner: '/assets/images/2021-05-15-what-is-javascript/banner.jpeg'
---

# 자바스크립트의 정의

자바스크립트(JavaScript)는 정적인 웹페이지를 동적으로 즉, <u>웹페이지를 생동감있게 만들어주는 언어</u>이다.

<p class="ex">ex) 이미지 슬라이드, 드롭다운</p>

<div>
    <img src="/assets/images/2021-05-15-what-is-javascript/01-image-slide.gif" alt="이미지 슬라이드" class="shadow" width="100%" />
    <figcaption>출처 https://davidwalsh.name</figcaption>
</div>

# 자바스크립트의 역사

## 1995년, 자바스크립트의 탄생

1995년, 넷스케이프 커뮤니케이션즈(Netscape Communications)의 브렌던 아이크(Brendan Eich)가 정적인 웹페이지를 동적으로 표현하기 위해 자바스크립트를 만들게 되었다. 

1996년, 넷스케이프의 브라우저인 `Netscape Navigator 2`에 탑재되면서 모카(Mocha)로 명명되었다. 모카(Mocha)에서 잠시 라이브스크립트(Live Script)로 불리었다가 자바스크립트(JavaScript)로 최종 명명되었다. 

<br/>

**🗣&nbsp; TMI !**

자바스크립트(JavaScript)라는 이름은 당시 자바(Java)의 인기를 이용해 마케팅하기 위해 붙여진 이름이다. 

## 1997년, 자바스크립트의 표준화 (ECMAScript)

1996년, 마이크로소프트(Microsoft)는 자바스크립트와 유사한 `JScript`를 개발해 마이크로소프트의 브라우저인 `Internet Explorer 3.0`에 탑재했다.

넷스케이프 커뮤니케이션즈와 마이크로소프트는 브라우저 시장 점유율을 높이기 위해 각각의 기능을 추가했고, 기능이 모든 브라우저에서 동등하게 동작하지 않는 `크로스 브라우징 이슈`가 발생했다.

<br/>

**크로스 브라우징: 이벤트 등록**

```javascript
// Netscape Navigator (표준)
document.querySelector('button').addEventListener('click');

// Internet Explorer 8 이하
document.querySelector('button').addEventListener('onclick');
```

<br/>

이에 넷스케이프는 국제정보통신표준화기구(ECMA, European Computer Manufacturers Association)에 자바스크립트 표준화를 요청했다. 1997년, `ECMA-262`라 불리는 자바스크립트 표준 명세가 완성되었고, `ECMAScript`라 명명되었다.

### 2005년, Google Maps의 등장

1999년, 자바스크립트를 이용해 비동기적(Asynchronous)으로 서버와 브라우저가 데이터를 교환할 수 있는 `AJAX(Asynchronous JavaScript and XML)`가 등장했다. 
AJAX를 이용해 데이터를 전달받아 전체 페이지를 새로 고침하지 않고, 페이지의 일부만을 변경할 수 있게 되면서 화면이 깜빡이지 않고 부드러운 화면 전환이 가능해졌다.

2005년, Google Maps는 자바스크립트와 AJAX를 이용해 부드러운 화면 전환을 보여주었고, 이는 자바스크립트의 가능성을 확인하는 계기가 되었다.

### 2006년, jQuery의 등장

2006년, jQuery의 등장으로 다소 번거로운 DOM(Document Object Model)을 쉽게 조작할 수 있게 되었고, 크로스 브라우징 이슈도 어느 정도 해결되었다. 

<br/>

**jQuery DOM 조작**

```html
<div id="reset">
    <button class="btn">초기화</button>
</div>
<div id="submit">
    <button class="btn">전송</button>
</div>
```

초기화 버튼에 click 이벤트를 등록하는 코드를 작성할 경우, jQuery를 사용하면 짧고 간편하게 작성할 수 있다.

```javascript
// not use jQuery
document.getElementById('reset').querySelector('.btn').addEventListener('click');

// use jQuery
$('#reset .btn').click();
```

### 2009년, Node.js의 등장

2009년, 브라우저에서만 동작하던 자바스크립트를 브라우저 이외의 환경에서 동작시킬 수 있는 자바스크립트 환경인 Node.js의 등장으로 자바스크립트는 서버 사이트 애플리케이션 개발에도 사용되는 범용 프로그래밍 언어가 되었다.

2021년, 현재 자바스크립트는 크로스 플랫폼을 위한 중요한 언어로 웹은 물론 모바일 하이브리드 앱(PhoneGap, Ionic), 서버 사이드(Node.js), 데스크톱(Electron) 개발 등 여러 분야에 사용되는 언어로 가장 인기 있는 프로그래밍 언어이다. 

[comment]: <> (# 자바스크립트의 특징)

# 마치며, 🙇🏻

Javascript와 JavaScript 중 JavaScript로 작성하는 것이 맞다고 한다. 

👉&nbsp; [관련 글 읽어보기](https://stackoverflow.com/questions/3989731/is-it-javascript-or-javascript){:target="_blank"}

## 참고한 책

[러닝 자바스크립트](https://book.naver.com/bookdb/book_detail.nhn?bid=12181869){:target="_blank"}

[Do it! 자바스크립트 + 제이쿼리 입문](https://book.naver.com/bookdb/book_detail.nhn?bid=13457579){:target="_blank"}

## 참고한 사이트

[https://poiemaweb.com/js-introduction](https://poiemaweb.com/js-introduction){:target="_blank"}

[http://tcpschool.com/javascript/js_intro_basic](http://tcpschool.com/javascript/js_intro_basic){:target="_blank"}