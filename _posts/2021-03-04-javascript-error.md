---
layout: post
categories: Javascript
title: '자바스크립트 커스텀 에러(Error) 만들기'
subtitle: '자바스크립트 예외 처리 - 2편 🚨'
---

# 에러(Error)

```javascript
new Error(message, fileName, lineNumber)
```

#### 매개 변수

- `message [optional]` 오류에 대한 설명
- `fileName [optional]` Error 생성자를 호출한 코드의 파일명
- `lineNumber [optional]` Error 생성자를 호출한 파일의 줄 번호

<br>

⚠️ *fileName과 lineNumber는 모든 브라우저에서 지원하지는 않는다.*

👉 [fileName과 lineNumber 브라우저 호환성 살펴보기](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Error#%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80_%ED%98%B8%ED%99%98%EC%84%B1)

## 에러(Error) 객체 생성

`new` 키워드 없이 Error 함수를 호출했을 때(1번), Error 객체를 리턴해 `new` 키워드를 사용해 객체를 생성했을 때(2번)와 동일하게 Error 객체를 가진다.

즉, 1번과 2번 결과는 동일한 Error 객체를 가지기 때문에 어느 것을 사용해도 괜찮다. 👌

```javascript
Error('에러 생성!');    // 1: 함수로 호출 
new Error('에러 생성!') // 2: 객체로 호출
```

# 커스텀 에러(Error)



👉 [커스텀 에러를 만드는 좋은 방법](https://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript){:target="_blank"}

## ES6 이전

```javascript
function CustomError(message) {
    this.message = message;
    this.stack = new Error().stack;
}

CustomError.prototype = Object.create(Error.prototype);
CustomError.prototype.name = 'CustomError';
```

## ES6 이후

```javascript
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomError';
    }
    
    toString() {
        return `${this.name}: ${this.message}`;
    }
}
```

# 마치며, 🙇🏻

## 참고한 사이트

[https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Error](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Error){:target="_blank"}

[https://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript](https://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript){:target="_blank"}

[https://imkh.dev/js-error/](https://imkh.dev/js-error/){:target="_blank"}