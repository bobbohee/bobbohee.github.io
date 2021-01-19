---
layout: post
categories: Development
title: '마크다운(Markdown) 문법 정리'
subtitle: '마크다운을 사용해 블로그 글 작성하기 ✏️'
date: 2021-01-17 00:00:00 +0900
draft: true
---

많은 분들이 이용하시는 티스토리나 네이버 블로그 같은 경우, WISYWIG 에디터를 이용해 글을 작성하고, 개발자 분들이 많이 이용하는 지킬 블로그나 velog와 같은 경우, 마크다운(Markdown)을 이용해 글을 작성한다.

마크다운을 이용해 글을 작성하기 때문에 마크다운 문법을 정리해놓으면 좋을 것 같아 블로그에 정리해보고자 한다.

# 마크다운(Markdown)이란?

마크다운은 마크업 언어의 일종으로, 존 그루버(John Grober)와 에런 스워치(Aaron Swartz)가 만들었다.

마크다운으로 작성한 문서는 HTML로 변환이 가능하다.

읽기 쉽고, 쓰기 쉬운 문법이 장점이지만 문법 표준이 없기 때문에 마크다운을 지원하는 곳마다 조금씩 문법이 상이하다.

# 마크다운 문법 정리

## 제목 (Title)

주로 제목 또는 부제목을 설정할 때 사용된다.

### `===` 과 `—-` 이용하기

H1과 H2만 사용이 가능하고, H3부터는 `#` 을 이용해야 한다.

```markdown
H1
===

H2
---
```

### `#` 이용하기

H1 ~ H6까지만 지원한다.

```markdown
# H1
## H2
### H3
#### H4
##### H5
###### H6
```

## 강조 (Header)

### 이탤릭체

```markdown
*italic*
_italic_
```

### 볼드체

```markdown
**bold**
__bold__
```

### 선

```markdown
~~delete~~
```

여러 가지를 같이 사용하고 싶은 경우, 아래처럼 사용할 수 있다.

```markdown
**_italic and bold_**
```

## 블록 인용구 (Block Quote)

여러 개를 사용하면 계층으로 나타낼 수 있다.

```markdown
> 안뇽
>> 안뇽뇽
>>> 안뇽뇽뇽
```

## 목록 (List)

### 번호 목록 (Ordered List)

순서가 섞여있더라도 마크다운에서 순차로 정리해준다.

테이블

### 기호 목록 (Unordered List)

순서가 없는 목록이라고 하며, `+` `-` `*` 기호를 사용할 수 있다.

```markdown
+ Apple
	- banana
		* orange
```

## 링크 (Link)

### 외부 링크 (External Link)

#### 인라인 링크

```markdown
[Google]()
```

#### 참조 링크

```markdown
[Google][1]

내용

[1]: 
```

#### URL 링크

주로 이메일 주소를 기재할 때 사용된다.

```markdown
<>
```

### 내부 링크 (Internal Link)

```markdown
[링크 (Link)](#id)
```

## 이미지 (Image)

인라인 링크와 참조 링크 문법과 유사하다. 앞에 `!`를 붙여주어야 한다.

```markdown
![dog]()
```

마크다운 문법으로는 이미지 사이즈 조절이 불가능해, 이미지 사이즈를 조절해야 할 경우 HTML 문법을 이용해야 한다.

```html
<img alt="dog" src="" width="200px" height="300px">
```

## 수평선 (Hr)

마크다운 문서는 페이지 구분이 없기 때문에 페이지를 구분지을 경우 사용한다.

```markdown
---
***
```

## 코드 (Code)

### 인라인 코드 (Inline Code)

글 중간에 코드를 삽입하고 싶은 경우 사용한다.

```markdown
javascript의 출력문은 `console.log()`을 사용한다.
```

### 블록 코드 (Block Code)

뒤에 명시한 언어로 문법에 대한 색상이 적용된다.

``` javascript
const say_hello = () => {
	console.log('hello');
}
```

## 표 (Table)

### 표의 구조 (Structure)

```markdown
| First Header  | Second Header | Third Header         |
| :------------ | :-----------: | -------------------: |
| First row     | Data          | Very long data entry |
| Second row    | **Cell**      | *Cell*               |
| Third row     | Cell that spans across two columns  ||
[Table caption, works as a reference][section-mmd-tables-table1]
```

### 표의 정렬 (Alignment)

표를 정렬하기 위해서는 `:`를 헤더의 양쪽 혹은 한쪽에 삽입한다.

```markdown
| Header One | Header Two | Header Three | Header Four |
| ---------- | :--------- | :----------: | ----------: |
| Default    | Left       | Center       | Right       |
```

### 열 병합 (Column Spanning)

```markdown
| Column 1 | Column 2 | Column 3 | Column 4 |
| -------- | :------: | -------- | -------- |
| No span  | Span across three columns    |||
```

# 마치며,

## 참고한 사이트
[https://eungbean.github.io/2018/06/11/How-to-use-markdown/](https://eungbean.github.io/2018/06/11/How-to-use-markdown/)

[https://heropy.blog/2017/09/30/markdown/](https://heropy.blog/2017/09/30/markdown/)