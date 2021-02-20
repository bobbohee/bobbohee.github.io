---
layout: post
categories: Python 
title: '파이썬 datetime 모듈 표준 시간대(Timezone) 설정하기'
subtitle: '표준 시간대를 설정해야 하는 이유 🕘'
banner: '/assets/images/2021-02-05-python-datetime-timezone/banner.jpeg'
---

이 글은 협정세계시(UTC)와 그리니치 평균시(GMT), 시간대(Timezone)에 대한 이해가 필요하기 때문에 아래 글을 먼저 읽어보기를 추천한다.

👉 [협정세계시(UTC)와 그리니치 평균시(GMT) + 서머타임(Summer Time)](https://park-bohee.github.io/2021-01-29/utc-and-gmt){:target="_blank"}

# datetime 모듈

datetime 모듈은 파이썬에서 기본으로 제공하는 라이브러리로, 날짜와 시간 데이터를 처리할 수 있다.

datetime 객체는 시간대를 포함했는지 여부에 따라서 `나이브(naive)`와 `어웨어(aware)`로 나뉜다.

<br>

⚠️ _두 객체는 서로 비교 및 연산을 할 수 없다._

## 나이브(naive)

naive 객체는 시간대를 포함하지 않는다. 

어느 시간대를 기준으로 하고 있는지 알 수 없다.
(개인적인 생각으로는 컴퓨터(로컬), 서버에 설정된 시간대 또는 UTC일 것으로 생각된다.)

컴퓨터(로컬)에 설정된 시간대는 한국 표준시(KST)지만, 서버에 설정된 시간대가 협정 세계시(UTC)라면 서버는 9시간 느린 시간을 사용하게 된다. 
만약, 데이터베이스에 글을 업로드한 시간을 저장한다고 할 때 5일 오전 7시에 글을 업로드하면 데이터베이스에 4일 오후 10시로 엉뚱한 시간이 저장된다.

이러한 문제 때문에 naive 객체는 사용하지 않는 것이 좋다. 

## 어웨어(aware)

aware 객체는 시간대를 포함한다. 

aware 객체는 자신의 시각 정보를 다른 aware 객체와 상대적인 값으로 조정할 수 있도록 시간대나 서머 타임 정책 또는 적용 가능한 알고리즘 정보를 담고 있다.

# datetime 비교

#### 개발 환경

- `Python` 3.7
- `pytz` 2019.1

## 나이브(naive) datetime

naive 객체는 날짜와 시간 정보만을 가진다. 

`datetime.utcnow()`는 UTC를 기준으로 현재 시간 정보를 가져오지만 naive 객체이다. 

```python
from datetime import datetime

datetime.utcnow()
# UTC 기준
# > 2021-02-05 12:33:52.544007
# > datetime(2021, 2, 5, 12, 33, 52, 544007)

datetime.now()
# 실행 환경 기준
# > 2021-02-05 21:33:52.544012
# > datetime(2021, 2, 5, 21, 33, 52, 544012)
```

## 어웨어(aware) datetime

aware 객체는 날짜와 시간 + `시간대 정보(tzinfo)`를 가진다.

```python
from datetime import datetime
from pytz import utc

utc.localize(datetime.utcnow())
# UTC 기준
# > 2021-02-05 12:44:34.995183+00:00
# > datetime(2021, 2, 5, 12, 44, 34, 995183, tzinfo=<UTC>)
```

<br>

`datetime.utcnow()`는 UTC를 기준으로 현재 시간 정보를 가져오지만 naive 객체이므로 `localize()`를 통해 변환된 aware 객체와 같지 않다.

```python
naive = datetime.utcnow()
aware = utc.localize(naive)

naive == aware
# > False
```

# 표준 시간대(Timezone) 설정

`localize()`를 통해 시간대를 변경하고, 시간대에 맞게 시간까지 변경하고 싶다면 `astimezone()`을 사용한다.

```python
from datetime import datetime
from pytz import timezone, utc

now = datetime.now()
KST = timezone('Asia/Seoul')

timezone.localize(navie)
# UTC 시간, KST 시간대
# > 2021-02-05 13:21:47.901826+09:00
# > datetime(2021, 2, 5, 13, 21, 47, 901826, tzinfo=<DstTzInfo 'Asia/Seoul' KST+9:00:00 STD>)

utc.localize(naive).astimezone(KST)
# KST 시간, KST 시간대
# > 2021-02-05 22:21:47.901826+09:00
# > datetime(2021, 2, 5, 22, 21, 47, 901826, tzinfo=<DstTzInfo 'Asia/Seoul' KST+9:00:00 STD>)
```

# 마치며, 🙇🏻

아래 블로그가 이번 글 작성에 많은 도움이 되었다. 더 많은 내용을 담고 있기 때문에 꼭 읽어보기를 추천한다.

👉 [스포카 기술 블로그 : 파이썬의 시간대에 대해 알아보기(datetime.timezone)](https://spoqa.github.io/2019/02/15/python-timezone.html){:target="_blank"}

## 참고한 사이트

[https://docs.python.org/ko/3.7/library/datetime.html](https://docs.python.org/ko/3.7/library/datetime.html){:target="_blank"}

[https://spoqa.github.io/2019/02/15/python-timezone.html](https://spoqa.github.io/2019/02/15/python-timezone.html){:target="_blank"}

[https://www.44bits.io/ko/post/python-datatime-cheetsheet](https://www.44bits.io/ko/post/python-datatime-cheetsheet){:target="_blank"}