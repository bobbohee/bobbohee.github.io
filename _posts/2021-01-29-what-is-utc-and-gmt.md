---
layout: post
category: Development
title: '협정세계시(UTC)와 그리니치 평균시(GMT)란? + 서머타임(Summer Time)'
subtitle: '시간에 대한 흥미로운 이야기들️ 😲'
banner: '/assets/images/2021-01-29-what-is-utc-and-gmt/banner.jpeg'
---

원래 파이썬의 `datetime`에 대해 글을 작성하려고 했는데, 그전에 datetime을 이해하기 위해 필요한 UTC와 시간대에 대해 블로그에 정리하면 좋을 것 같다는 생각이 들었다.

UTC와 시간대에 대해 검색하다보니 기본적인 개념 외에 흥미로운 이야기들이 있어 일부 작성했다. 😉

# 그리니치 평균시(GMT)

그리니치 평균시(GMT, Greenwich Mean Time)는 영국 런던 그리니치 천문대를 기점[^1]으로 하는 협정 세계시이다.

![그리니치 천문대](/assets/images/2021-01-29-what-is-utc-and-gmt/01.%20그리니치%20천문대.png)

GMT는 조금씩 늦어지는 지구 자전의 영향을 받기 때문에 새로 협정 세계시(UTC)가 재정되어, 1925년부터 1972년까지 사용했다.

# 협정 세계시(UTC)

협정 세계시(UTC, Coordinated Universal Time)는 1972년부터 시행된 국제 표준시이다.
세슘 원자 진동수를 기반으로 측정해 매우 정확하고, 국제원자시[^2]와 윤초[^3] 보정을 기반으로 표준화되었다.

UCT와 GMT는 초의 소숫점 단위에서만 차이가 나기 떄문에 혼용되어 사용되기도 하지만, 기술적인 표기에서는 UTC가 사용된다.

![협정세계시 지도](/assets/images/2021-01-29-what-is-utc-and-gmt/02.%20협정세계시%20지도.png)

## UTC 약자의 유래

영어권 사람들과 프랑스어권 사람들이 각자의 언어로 된 약자인 CUT(Coordinated Universal Time)와 TUC(Temps Universel Coordonné)을 사용하기 원했다.
이 분쟁은 결국 두 언어 모두 `C`, `T`, `U`로 구성되어 있다는 것에 착안하여 UTC라는 약어가 되었다.

UTC는 Universal Time Code이나 Universal Time Coordination의 약어라고 하는데 이는 잘못된 것이다.

## 시간대

360˚를 24시간으로 나누면 15˚당 1시간이 된다. 따라서 경도 15˚ 단위로 1시간씩 차이가 난다.

대한민국의 시간대(KST, Korea Standard Time)는 `경도 135˚`를 기준으로 `UTC+9`에 속하고, 이는 UTC보다 9시간이 빠르다는 것을 의미한다.

| 미국(워싱턴) | UTC-5 	| 28일 오후 7시         |
| 영국 	    | UTC+0 	| 29일 오전 12시 (자정)  |
| 중국      	| UTC+8 	| 29일 오전 8시         |
| 대한민국  	| UTC+9 	| 29일 오전 9시         |

### 미국과 중국

미국과 중국, 그 외 대륙이 큰 나라는 사실상 지역별로 시간대가 다르다.

중국은 수도 베이징을 기준으로 시간대를 통일해 사용하고 있다. 그래서 중국과 국경이 맞다아 있는 나라 중 아프가니스탄은 UTC+4.5로 중국과 3시간 30분 차이가 난다.

미국은 대지4개)와 미국령(5개), 미사용 영토(2개)를 포함해 총 11개의 시간대를 사용하고 있다. 3월 ~ 11월에는 서머타임을 적용해 기존 시간대보다 1시간 빠른 시간대를 사용한다.

![미국 시간대](/assets/images/2021-01-29-what-is-utc-and-gmt/03.%20미국%20시간대.png)

<figcaption class="mt-n4">구글에 '미국 시간'을 검색했을 때 나오는 결과</figcaption>

# 서머타임(Summer Time)

일광 절약 시간대(DST, Daylight Saving Time)라고도 한다.

서머타임은 낮 시간이 길어지는 여름(3월 ~ 11월)에 표준시를 1시간 앞당기는 제도이다.
낮 시간이 길어지면서 사람들이 효율적인 경제적인 활동을 할 수 있고, 에너지를 절약할 수 있다는 점에서 많은 나라에서 시행하고 있지만,
서머타임이 효과가 없다는 의견이 제시되고 있어 폐지에 대한 논의가 꾸준히 이루어지고 있다.

미국은 서머타임을 시행하지 않는 주도 있어 시간 계산 시, 주 시간대와 서머타임 시행 여부를 고려해야 되기 때문에 복잡하다. 🤯&nbsp; (구글에 검색하는 게 제일 빠르다.)

# 마치며, 🙇🏻

한국 표준시에 대한 흥미로운 글인데 블로그에 담지는 않았다. 읽어보기를 추천한다.

👉&nbsp; [한국 표준시에 대한 흥미로운 이야기](https://velog.io/@hiro2474/%ED%95%9C%EA%B5%AD%ED%91%9C%EC%A4%80%EC%8B%9C%EC%97%90-%EB%8C%80%ED%95%9C-%ED%9D%A5%EB%AF%B8%EB%A1%9C%EC%9A%B4-%EC%9D%B4%EC%95%BC%EA%B8%B0){:target="_blank"}

## 참고한 사이트

[https://www.a-ha.io/questions/456012fa3017cb17bb371c43928fc875](https://www.a-ha.io/questions/456012fa3017cb17bb371c43928fc875){:target="_blank"}

[https://perfectacle.github.io/2018/09/26/date-and-time](https://perfectacle.github.io/2018/09/26/date-and-time){:target="_blank"}

[^1]: 영국 런던 그리니치 천문대를 기점으로 하기 때문에 그리니치 천문대에 경도는 0.00이다.
[^2]: 국제원자시(프랑스어: TAI, Temps Atomique International)는 시각에 대한 국제 표준이다.
[^3]: 협정 세계시(UTC)에사 기준으로 한 세슘 원자시계와 실제 지구의 자전·공전 속도를 기준으로 한 태양시의 차이로 인해 발생한 오차를 보정하기 위하여 추가하는 1초이다.
