---
layout: post
categories: Development
title: '마크다운(Markdown) 문법 정리'
subtitle: '마크다운을 사용해 블로그 글 작성하기 ✏️'
date: 2021-01-22 08:46:00 +0900
banner: '/assets/images/2021-01-22-how-to-use-markdown/banner.jpeg'
---

많은 분들이 이용하는 티스토리나 네이버 블로그 같은 경우, 위지위그(WYSIWYG)[^1] 에디터로 글을 작성하고, 개발자들 분들이 많이 이용하는 지킬 블로그나 벨로그 같은 경우, 마크다운(Markdown)으로 글을 작성한다.

마크다운으로 글을 작성하기 때문에 마크다운 문법을 정리해놓으면 좋을 것 같아 블로그에 정리해보고자 한다.

# 마크다운(Markdown)이란?

마크다운은 마크업 언어의 일종으로, 마크다운으로 작성한 문서는 HTML로 변환이 가능하다. 

읽기 쉽고, 쓰기 쉬운 문법이 장점이지만 문법 표준이 없어 마크다운을 지원하는 곳마다 조금씩 문법이 상이하다는 단점이 있다.


# 마크다운 문법 정리

## 제목 (Title)

주로 제목 또는 부제목을 설정할 때 사용된다.

### # 이용하기

> `<h1> ~ <h6>` 태그로 변환된다.

```markdown
# 제목 1
## 제목 2
### 제목 3
#### 제목 4
##### 제목 5
###### 제목 6
```

# 제목 1
## 제목 2
### 제목 3
#### 제목 4
##### 제목 5
###### 제목 6

### === 와 --- 이용하기

> `<h1>`, `<h2>` 태그로 변환된다.

```markdown
제목 1
===

제목 2
---
```

제목 1
===

제목 2
---

## 강조 (Emphasis)

### 이탤릭체

> `<em>` 태그로 변환된다.

```markdown
*italic*
_italic_
```

*italic*
_italic_

### 볼드체

> `<strong>` 태그로 변환된다.

```markdown
**bold**
__bold__
```

**bold**
__bold__

### 선

> `<del>` 태그로 변환된다.

```markdown
~~delete~~
```

~~delete~~

<br/>

여러 가지를 같이 사용하고 싶은 경우, 아래처럼 사용할 수 있다.

```markdown
**_italic and bold_**
```

**_italic and bold_**

## 인용구 (Quote)

`>`를 여러 개 사용하면 계층으로 나타낼 수 있다.

```markdown
> 동물이다.
>> 곰이다.
>>> 북극곰이다.
```

> 동물이다. 
>> 곰이다.
>>> 북극곰이다.

## 목록 (List)

### 번호 목록 (Ordered List)

> `<ol>` 태그로 변환된다.

순서가 있는 목록으로, 순서가 섞여있더라도 마크다운에서 순차로 정리해준다.

``` markdown
1. January
2. February
4. April
3. March
```

1. January
2. February
4. April
3. March

### 기호 목록 (Unordered List)

> `<ul>` 태그로 변환된다.

순서가 없는 목록이라고 하며, `+`, `-`, `*` 기호를 사용할 수 있다.

```markdown
+ Apple
	- Banana
		* Orange
```

+ Apple
    - Banana
        * Orange

## 링크 (Link)

> `<a>` 태그로 변환된다.

### 외부 링크 (External Link)

#### 인라인 링크

```markdown
 My github id is [park-bohee](https://github.com/park-bohee).
```

My github id is [park-bohee](https://github.com/park-bohee).

#### 참조 링크

```markdown
[park-bohee][github_me]

내용

[github_me]:https://github.com/park-bohee 
```

[park-bohee][github_me]

[github_me]:https://github.com/park-bohee

#### URL 링크

주로 이메일 주소를 기재할 때 사용된다.

```markdown
<parkbohee0705@gmail.com>
```

<parkbohee0705@gmail.com>

### 내부 링크 (Internal Link)

`#`으로 지정한 제목으로 이동할 수 있다.

이동할 텍스트가 영문일 시 `소문자`만 가능하며, 띄어쓰기는 `-`로 구분해야 한다. 

```markdown
[보여지는 텍스트](#이동할-텍스트)
[마크다운 문법으로](#마크다운-문법-정리)
```

[마크다운 문법으로](#마크다운-문법-정리)

## 이미지 (Image)

> `<img>` 태그로 변환된다.

인라인 링크와 참조 링크 문법과 유사하다. 앞에 `!`를 붙여주어야 한다.

```markdown
![markdown logo](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1280px-Markdown-mark.svg.png)
```

![markdown logo](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1280px-Markdown-mark.svg.png)

<br/>

마크다운 문법으로는 이미지 사이즈 조절이 불가능하기 때문에 사이즈를 조절해야 할 경우 HTML 문법을 이용해야 한다.

```html
<img width="170px" height="100px" alt="markdown logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1280px-Markdown-mark.svg.png">
```

<img width="170px" height="100px" alt="markdown logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1280px-Markdown-mark.svg.png">

## 수평선 (Horizontal Rule)

> `<hr>` 태그로 변환된다.

마크다운 문서는 페이지 구분이 없기 때문에 페이지를 구분지을 경우 사용한다.

```markdown
---
***
```

---

***

## 코드 (Code)

> `<code>` 태그로 변환된다. 

### 인라인 코드 (Inline Code)

글 중간에 코드를 삽입하고 싶은 경우 사용한다.

(글에서 강조하고 싶은 부분에 사용하는 경우도 있다.)

```markdown
파이썬에서 출력하는 함수는 `print()` 함수를 사용한다.
```

파이썬에서 출력하는 함수는 `print()` 함수를 사용한다.

### 블록 코드 (Block Code)

뒤에 명시한 언어로 문법에 대한 색상이 적용된다.

(중첩 블록 코드는 사용할 수 없어 이미지로 대체한다.)

![마크다운 코드 문법](/assets/images/2021-01-22-how-to-use-markdown/01.%20마크다운%20코드%20문법.png)

``` javascript 
const say_hello = () => {
  console.log('hello');
}
```

## 표 (Table)

> `<table>`, `<tr>`, `<th>`, `<td>` 태그로 변환된다.

### 표의 구조 (Structure)

```markdown
| breakfast 	| lunch        	| dinner     	|
| :------------ | :-----------: | ------------:	|
| toast     	| curry        	| pork belly 	|
|           	| kimchijjigae 	| **kimbab**  	|
| ~~rice cake~~ | tteokbokki    | chicken       |
```

| breakfast 	| lunch        	| dinner     	|
| :------------ | :-----------: | ------------:	|
| toast     	| curry        	| pork belly 	|
|           	| kimchijjigae 	| **kimbab**  	|
| ~~rice cake~~ | tteokbokki    | chicken       |

### 표의 정렬 (Alignment)

표를 정렬하기 위해서는 `:`를 헤더의 양쪽 혹은 한쪽에 삽입한다.

```markdown
| Header 1   | Header 2   | Header 3   | Header 4   |
| ---------- | :--------- | :--------: | ---------: |
| Default    | Left       | Center     | Right      |
```

| Header 1   | Header 2   | Header 3   | Header 4   |
| ---------- | :--------- | :--------: | ---------: |
| Default    | Left       | Center     | Right      |

<br>

👉 [마크다운 표 쉽게 만들기](https://www.tablesgenerator.com/markdown_tables)

# 마치며, 🙇🏻

일부 문법은 블로그에서 보여주는데 문제가 있어 제외하고 작성했다.

## 참고한 사이트

[https://eungbean.github.io/2018/06/11/How-to-use-markdown/](https://eungbean.github.io/2018/06/11/How-to-use-markdown/)

[https://heropy.blog/2017/09/30/markdown/](https://heropy.blog/2017/09/30/markdown/)

[^1]: What You See Is What You Get 의 약자로, 해석하면 "보이는 대로 얻는다"는 의미를 가지고 있다. 간말히 말해, 보이는 대로 표현이 되는 에디터이다.