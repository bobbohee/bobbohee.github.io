---
layout: post
categories: Python 
title: '파이썬 datetime 모듈 시간대(Timezone) 설정하기'
subtitle: '시간대를 설정해야 하는 이유 🕘'
date: 2021-02-04 12:00:00 +0900
banner: '/assets/images/2021-02-05-python-datetime-timezone/banner.jpeg'
draft: true
---

이 글은 협정세계시(UTC)와 그리니치 평균시(GMT), 시간대(Timezone)에 대한 이해가 필요하기 때문에 아래 글을 먼저 읽어보기를 추천한다.

👉 [협정세계시(UTC)와 그리니치 평균시(GMT) + 서머타임(Summer Time)](https://park-bohee.github.io/2021-01-29/utc-and-gmt)

# datetime 모듈

datetime 모듈은 파이썬에서 기본으로 제공하는 라이브러리로, 날짜와 시간 데이터를 처리할 수 있다.

datetime 객체는 시간대 포함 여부에 따라서 `나이브(naive)`와 `어웨어(aware)`로 나뉜다.

## 나이브(naive)

나이브 객체는 시간대를 포함하지 않았기 때문에 날짜와 시간은 컴퓨터나 서버의 설정된 시간대에 따른다.

컴퓨터(로컬)에 설정된 시간대는 한국 표준시(KST)였지만, 서버에 설정된 시간대가 협정 세계시(UTC)라면 로컬과 서버가 서로 다른 시간을 사용하게 된다.

나이브 객체를 타이머 용도로 사용한다면 문제가 될 게 없지만, 데이터베이스에 저장한다고 할 떄 문제가 발생한다.

만약, 데이터베이스에 글을 업로드한 시간을 저장한다고 할 때 5일 오전 7시에 블로그에 작성한 글을 업로드하면 서버에 설정된 시간대는 UTC이기 때문에 데이터베이스에 4일 오후 10시로 엉뚱한 시간이 저장된다.

이러한 문제 때문에 나이브 객체는 되도록 사용하지 않는 편이 좋다.

## 어웨어(aware)

어웨어 객체는 시간대를 포함하기 때문에 날짜와 시간은 설정한 시간대를 따른다.

시간대를 지정할 떄 주로 tzinfo 또는 timezone을 많이 사용한다.

# 시간대(Timezone) 설정

# 마치며, 🙇🏻

## 참고한 사이트

[https://docs.python.org/ko/3.7/library/datetime.html](https://docs.python.org/ko/3.7/library/datetime.html)

[https://spoqa.github.io/2019/02/15/python-timezone.html](https://spoqa.github.io/2019/02/15/python-timezone.html)

[https://www.44bits.io/ko/post/python-datatime-cheetsheet](https://www.44bits.io/ko/post/python-datatime-cheetsheet)

[https://howchoo.com/g/ywi5m2vkodk/working-with-datetime-objects-and-timezones-in-python](https://howchoo.com/g/ywi5m2vkodk/working-with-datetime-objects-and-timezones-in-python)