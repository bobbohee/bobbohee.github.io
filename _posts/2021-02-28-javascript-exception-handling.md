---
layout: post
categories: Javascript 
title: '자바스크립트 예외(Exception) 처리하기'
subtitle: 'try...catch 문으로 예외를 캐치해보자 🙌'
banner: '/assets/images/2021-02-28-javascript-exception-handling/banner.jpeg'
---

# 예외 처리(Exception Handing)란?

자바스크립트는 인터프리터[^1] 언어로 브라우저 동작 중 문제가 발생하면, 해당 동작이 중단된다.
동작이 중단되지 않고, 문제를 대처할 수 있도록 처리하는 것을 `예외 처리(Handling Exception)`라고 한다.

<br>

**여기서 잠깐! ✋** 에러(Error)와 예외(Exception)의 차이는 무엇일까?

프로그래밍 언어의 문법적인 오류를 에러(Error)라고 하고, 프로그램 실행 중에 발생하는 오류를 예외(Exception)라고 한다.

# 예외 처리문

## throw 문

자바스크립트는 런타임[^2] 에러가 발생했을 때 예외를 발생시킨다. 강제로 예외를 발생시키고 싶은 경우, `throw`문을 사용해 강제로 예외를 발생시킬 수 있다.

```javascript
throw expression;
```

<br>

⭐️ expression(표현식)은 Error 객체가 아니어도 된다.

```javascript
throw 500;              
throw new Error('500'); 
```

Error 객체를 사용하면 예외를 해결하기 위해 필요한 정보를 얻을 수 있어, Error 객체를 사용하는 것이 좋다.

![throw 표현](/assets/images/2021-02-28-javascript-exception-handling/01.%20throw%20표현.png)

예시 코드와 같이 강제로 예외를 발생시키고 싶은 경우, `throw`문을 사용한다.

```javascript
function addNumber (n) {
    if (isNaN(n)) {
        throw new Error(`'n' is not Number type`);
    }
    
    return n + 1;
}
```

## try...catch 문

`try`블록에 예외가 발생할 수 있는 코드를 작성하고, 예외가 발생하면 `catch`블록에서 예외를 처리한다. 

```javascript
try {
    
} catch (catchID) {
  statements
}
```

식별자(catchID)는 발생한 예외에 대한 정보를 가지고 있으며, `catch`블록에 진입했을 때 식별자(catchID)를 생성한다.

<br>

위에서 설명한 `throw`문을 사용해 강제로 예외를 발생시키고, `catch`블록에서 예외를 처리할 수 있다. 

```javascript
try {
    throw new Error('실수!');
} catch (e) {
    console.error(e);
}
```

<br>

`if/else if/else`문과 `instanceof`[^3] 연산자를 사용해 식별자(catchID)를 구분해 발생한 예외에 대해 다양한 처리를 할 수 있다.

```javascript
try {
    // code
} catch (e) {
    if (e instanceof TypeError) {
        console.error('TypeError 발생!');
    } else if (e instanceof RangeError) {
        console.error('RangeError 발생!');} 
    else {
        console.error('TypeError와 RangeError를 제외한 Error 발생!');
    }
}
```

# 마치며, 🙇🏻

매 주 금요일에 글을 업로드 하기로 다짐했는데 이번주는 일요일에 글을 업로드했다 ... 😓 게으른 나 ...

## 참고한 사이트

[https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#예외처리문](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#%EC%98%88%EC%99%B8%EC%B2%98%EB%A6%AC%EB%AC%B8){:target="_blank"}

[https://webclub.tistory.com/71](https://webclub.tistory.com/71){:target="_blank"}

[^1]: 코드를 한 줄씩 읽어 들이며 실행하는 프로그램이다.

[^2]: 프로그래밍 언어가 구동되는 환경으로, 자바스크립트의 경우 브라우저를 의미한다.

[^3]: `A instanceof B`의 형식으로 사용하며 A(객체)가 B(클래스)의 속하는지 판단한다.