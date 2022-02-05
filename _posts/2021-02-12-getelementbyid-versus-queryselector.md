---
layout: post
category: JavaScript
title: 'getElementById와 querySelector, 어느 것을 사용할까?'
subtitle: 'querySelector는 사용하면 안 되는 걸까? 💁'
banner: '/assets/images/2021-02-12-getelementbyid-versus-queryselector/banner.jpeg'
banner-position: top
---

###### 이 글을 읽기 전!

⚠️&nbsp; querySelector를 사용하고 있는 사람이 쓴 querySelector 옹호 글입니다.

<br>

이전에 querySelector는 느리니 사용하지 말자는 이야기를 듣고, 최근까지 querySelector 사용을 지양해왔다.

아래서 이야기 할 getElementsByClassName으로 단일 클래스 요소를 가져오는 코드를 보기 좋게 작성하기 위해 querySelector를 처음 사용하게 되었고, 그때부터 querySelector 사용을 멈출 수 없었다 .. 🥰

그러다 문득 querySelector가 느리니 사용하지 말자는 이야기가 떠올랐고, 정말 querySelector는 사용하면 안되는지 알아보고자 한다.

[comment]: <> (# getElementById와 querySelector 차이)

# querySelector는 getElementById보다 느릴까?

결론부터 먼저 말하자면, **맞다**. 
querySelector는 getElementById보다 느리다. 

정확한 차이를 알아보기 위해 벤치마크[^1] 사이트에서 테스트를 진행해보았다. 

<br>

👉&nbsp; [직접 벤치마크 테스트 해보기](https://www.measurethat.net/Benchmarks/ShowResult/149680){:target="_blank"}

####  테스트 환경

- `Browser` Chrome 87
- `Operating system` Mac OS X 10.14.6
- `Device Platform` Desktop

<br>

⚠️&nbsp; *실제 개발에서는 HTML이 훨씬 복잡하기 때문에 결과는 차이가 있을 수 있다.*

<br>

**HTML Preparation Code**
```html
<html>
    <body>
        <div id="test2"></div>
        <div id="test"></div>
    </body>
</html>
```

**querySelector**

```javascript
document.querySelector("#test");
```

**getElementById**

```javascript
document.getElementById("test");
```

<br>

벤치마크 결과를 보면 getElementById가 querySelector보다 약 `1.2배` 빠르다.

초당 처리하는 실행 횟수를 보면 getElementById가 높은 성능을 보여주고 있다.  

![querySelector 실행 속도](/assets/images/2021-02-12-getelementbyid-versus-queryselector/01-queryselector-run-time.png)

# querySelector는 사용하면 안 되는 걸까?

결론부터 먼저 말하면, 주관적인 의견으로 **아니다**.

성능(속도)만을 중요하게 생각한다면 사용하지 않는게 맞지만, 생산성과 편의성 등 여러가지 측면을 생각한다면 querySelector를 사용해도 된다.

## 다양한 선택자

getElementById는 id 속성에 국한되어 id 속성만 선택자로 사용할 수 있지만, querySelector는 `id`, `class`, `[data-*=""]`, `input[name=""]` 등 다양한 선택자를 사용할 수 있다.

아래 코드에서 querySelector를 사용하면 name 속성으로 element 객체를 가져올 수 있는데 getElementById를 사용하면 해당 element 객체를 가져오기 위해 필요없는 id를 부여해야 한다.

```html
<input name="login"/>
```

## 보기 좋은 코드

주제에서 약간 벗어나서 getElementsByClassName과 querySelector를 사용해 단일 클래스 요소를 가져오는 코드를 비교해보자. 
(getElementsByClassName과 querySelector 성능 차이도 getElementById와 비슷하다.)

getElementsByClassName은 배열로 반환하기 때문에 단일 요소를 가져오기 위해 `[0]`을 사용해야 한다. querySelector는 1개만 반환하기 때문에 `[0]`을 붙여주지 않아도 된다.

코드를 비교해보면 querySelector 코드가 더 보기 좋은 코드인 것을 알 수 있다.

<br>

**HTML**

```html
<button class="btn btn-success">성공</button>
<button class="btn btn-warning">실패</button>
```

**getElementsByClassName**

```javascript
document.getElementsByClassName('btn-success')[0];
```

**querySelector**

```javascript
document.querySelector('.btn-success');
```

## querySelector는 그렇게 느리지 않다.

querySelector가 getElementById와 비교했을 때 느린 건 사실이지만, querySelecrot는 초당 약 7백만(7,000,000)건의 작업을 처리할 수 있다. 
밀리초로 계산해보면 밀리 초당 7천(7,000)건의 작업을 처리할 수 있다. 

<br> 

querySelector와 jQuery를 비교해보면 jQuery가 느리다. 그럼 jQuery는 더욱 사용하면 안될텐데 현재까지 jQuery에 시장 점유율은 `77.3%`로 어마어마하다. 

성능(속도)보다 편의성과 생산성을 우선시했기 때문에 아직까지 jQuery에 시장 점유율이 높은 것이다. 

![jQuery 시장 점유율](/assets/images/2021-02-12-getelementbyid-versus-queryselector/02-market-share-of-jquery.png)

👉&nbsp; [직접 jQuery 시장 점유율 확인해보기](https://w3techs.com/technologies/history_overview/javascript_library/all/y){:target="_blank"}

# 마치며, 🙇🏻

id 요소로 element 객체를 찾을 경우에는 getElementById를 사용하고, 그 외 경우에는 querySelector를 사용하자.

## 참고한 사이트

[https://hashcode.co.kr/questions/5692/강의-4-11-queryselector에-성능문제에-대해-질문-드립니다](https://hashcode.co.kr/questions/5692/%EA%B0%95%EC%9D%98-4-11-queryselector%EC%97%90-%EC%84%B1%EB%8A%A5%EB%AC%B8%EC%A0%9C%EC%97%90-%EB%8C%80%ED%95%B4-%EC%A7%88%EB%AC%B8-%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4){:target="_blank"}

[https://www.reddit.com/r/learnjavascript/comments/356k1v/confused_on_queryselector_and_getelementbyid](https://www.reddit.com/r/learnjavascript/comments/356k1v/confused_on_queryselector_and_getelementbyid/){:target="_blank"}

[^1]: 성능 측정을 목적으로 컴퓨터 프로그램을 실행하는 행위이다.