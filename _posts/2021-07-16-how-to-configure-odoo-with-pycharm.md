---
layout: post
category: Odoo
title: '파이참(Pycharm)에 Odoo 환경 설정하기'
subtitle: '세상 깐깐한 Odoo 설치하고 세팅하기 - 2편 🍆'
banner: '/assets/images/2021-07-16-how-to-configure-odoo-with-pycharm/banner.jpeg'
---

[1편 - ‘MacOS에 Odoo 버전 13 설치하기’][1편]{:target="_blank"}

<br>

1편에서는 Terminal에 명령어를 입력해 Odoo를 실행했는데, Pycharm에 Configuration을 설정하면 버튼 하나로 Odoo를 실행할 수 있다. 🙈 🙉 🙊

# 파이썬 Interpreter 설정하기

## #1

상단 메뉴에서 `Pycharm`, `Preferences`를 클릭하면, 환경설정 창이 나타난다.

(또는, `⌘,` 단축키를 사용할 수 있다.)

![Python Interpreter 설정 1](/assets/images/2021-07-16-how-to-configure-odoo-with-pycharm/01-python-interpreter.png)

## #2

환경설정 창에서 `Project: [프로젝트명]`, `Python Interpreter`를 클릭한다.

(또는, 검색창에 `interpreter`를 검색하면 쉽게 찾을 수 있다.)

![Python Interpreter 설정 2](/assets/images/2021-07-16-how-to-configure-odoo-with-pycharm/02-python-interpreter.png)

## #3

인터프리터를 설정하지 않아서 `No interpreter`로 나타난다.

![Python Interpreter 설정 3](/assets/images/2021-07-16-how-to-configure-odoo-with-pycharm/03-python-interpreter.png)

## #4

`No interpreter`, `Show All...`을 클릭하면 모든 인터프리터 목록이 나타난다. 

![Python Interpreter 설정 4](/assets/images/2021-07-16-how-to-configure-odoo-with-pycharm/04-python-interpreter.png)

## #5

목록에 [1편][1편]{:target="_blank"}에서 생성한 가상 환경이 없다면 `+` 버튼을 클릭하고, 만약 있다면 [#7][#7]로 이동한다.

![Python Interpreter 설정 5](/assets/images/2021-07-16-how-to-configure-odoo-with-pycharm/05-python-interpreter.png)

## #6

`Existing environment`의 `Interpreter`를 보면 자동으로 해당 프로젝트에서 사용하는 pvenv 경로를 찾아 지정해주는데, 만약 경로가 다르다면 직접 지정하고 `OK` 버튼을 클릭한다. 

![Python Interpreter 설정 6](/assets/images/2021-07-16-how-to-configure-odoo-with-pycharm/06-python-interpreter.png)

## #7

위에서 추가한 `odoo-13-venv`이 인터프리터 목록에 추가되었다! 사용할 인터프리터로 `odoo-13-venv`를 선택하고, `OK` 버튼을 클릭한다.

![Python Interpreter 설정 7](/assets/images/2021-07-16-how-to-configure-odoo-with-pycharm/07-python-interpreter.png)

## #8

`No interpreter`에서 선택한 인터프리터로 변경되었다. `OK` 버튼을 클릭해 파이썬 Interpreter 설정을 완료한다.

![Python Interpreter 설정 8](/assets/images/2021-07-16-how-to-configure-odoo-with-pycharm/08-python-interpreter.png)

# Configuration 설정하기

## #9

우측 상단에 `ADD CONFIGURATION...`을 클릭하면, Configuration 창이 나타난다. 

![Configuration 설정 1](/assets/images/2021-07-16-how-to-configure-odoo-with-pycharm/09-configuration.png){: .shadow}

## #10

Configuration을 생성하기 위해 `+` 버튼을 클릭한다.

![Configuration 설정 2](/assets/images/2021-07-16-how-to-configure-odoo-with-pycharm/10-configuration.png)

## #11

`Python`을 선택한다.

![Configuration 설정 3](/assets/images/2021-07-16-how-to-configure-odoo-with-pycharm/11-configuration.png)

## #12

`Script path`를 쉽게 지정하기 위해 `📁` 아이콘을 클릭하면 파인더가 나타난디.

![Configuration 설정 4](/assets/images/2021-07-16-how-to-configure-odoo-with-pycharm/12-configuration.png)

## #13

파인더에서 해당 프로젝트의 `odoo-bin` 스크립트를 선택하고, `Open` 버튼을 클릭한다. 

![Configuration 설정 5](/assets/images/2021-07-16-how-to-configure-odoo-with-pycharm/13-configuration.png)

## #14

`Parameter`에 -_-config=./config/.odoorc_ 를 입력하고, `Python Interpreter`에 위에서 설정한 interpreter가 지정되었는지 확인한다.

![Configuration 설정 6](/assets/images/2021-07-16-how-to-configure-odoo-with-pycharm/14-configuration.png)

# Log 설정하기

## #15

`Logs` 탭으로 이동해 `+` 버튼을 클릭하면, Log를 추가하는 창이 나타난다. 

![Log 설정 1](/assets/images/2021-07-16-how-to-configure-odoo-with-pycharm/15-configuration-log.png)

## #16

`Log File Location`을 쉽게 지정하기 위해 `📁` 아이콘을 클릭하면 파인더가 나타난다. 

![Log 설정 2](/assets/images/2021-07-16-how-to-configure-odoo-with-pycharm/16-configuration-log.png)

## #17

파인더에서 log 파일을 선택한다. 만약 log 파일이 없다면 생성한다. 

![Log 설정 3](/assets/images/2021-07-16-how-to-configure-odoo-with-pycharm/17-configuration-log.png)

## #18

`Alias`에 사용할 Log 명칭을 입력하고, `OK` 버튼을 클릭한다.

![Log 설정 4](/assets/images/2021-07-16-how-to-configure-odoo-with-pycharm/18-configuration-log.png)

## #19

`OK` 버튼을 클릭하면 Configuration 설정이 완료된다.

![Log 설정 5](/assets/images/2021-07-16-how-to-configure-odoo-with-pycharm/19-configuration-log.png)

## #20

`Configuration`을 설정했더니 설정하기 전과는 다르게 아이콘들이 활성화되었다. 

이제 `Debug` 버튼을 클릭하기만 하면 Odoo를 실행할 수 있다! 🐛

![Configuration 설정 완료](/assets/images/2021-07-16-how-to-configure-odoo-with-pycharm/20-configuration-debug.png){: .shadow}

<br><br><br><br><br>

(비하인드 스토리)

<h1 class="pt-0">
Log가 안보일 경우 🤨
</h1>

## #1

`Debug` 버튼을 클릭해 Odoo를 실행하면 하단에 여러 탭이 나타나는데 그 중 `log` 탭을 클릭한다. 

![Log가 안보일 경우 1](/assets/images/2021-07-16-how-to-configure-odoo-with-pycharm/21-can-not-see-log.png){: .shadow}

## #2

아래처럼 아무것도 나오지 않는다면 ? 

![Log가 안보일 경우 2](/assets/images/2021-07-16-how-to-configure-odoo-with-pycharm/22-can-not-see-log.png){: .shadow}

<br>

`warnings`으로 설정되어 있는지 확인한다. 

![Log가 안보일 경우 3](/assets/images/2021-07-16-how-to-configure-odoo-with-pycharm/23-can-not-see-log.png){: .shadow}

## #3

`warning`에서 `all`로 변경한다. 

![Log가 안보일 경우 4](/assets/images/2021-07-16-how-to-configure-odoo-with-pycharm/24-can-not-see-log.png){: .shadow}

## #4

짠!💥 Log가 나타난다.

![Log가 안보일 경우 5](/assets/images/2021-07-16-how-to-configure-odoo-with-pycharm/25-can-not-see-log.png){: .shadow}

# 마치며, 🙇🏻

이번 포스트는 유난히 넣을 스크린샷이 많아서 편집하고 정리하느라 애먹었다. 휴...💦

[1편]:/2021-06-06/how-to-install-odoo-13-version-on-mac

[#7]:#7