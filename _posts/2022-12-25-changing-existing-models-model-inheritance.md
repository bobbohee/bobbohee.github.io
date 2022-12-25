---
layout: post
category: Odoo
title: 'Odoo의 모델(Model) 상속에 대해 알아보기'
subtitle: 'Class, Prototype, Delegation Inheritance 🍆'
banner: '/assets/images/2022-12-25-changing-existing-models-model-inheritance/banner.jpeg'
---

# Model 상속 및 확장 (Inheritance and Extension)

Odoo는 3가지 유형의 상속을 제공한다.

- 클래스 상속 (Class Inheritance)
- 프로토타입 상속 (Prototype Inheritance)
- 위임 상속 (Delegation Inheritance)

![Odoo 모델 상속 3가지](/assets/images/2022-12-25-changing-existing-models-model-inheritance/01-inheritance-and-extension.png)

## 클래스 상속 (Class Inheritance)

클래스 상속은 기존 모델을 확장하는 상속으로, 가장 많이 사용되는 방식이다. 기존 모델에 새로운 필드를 추가하거나, 메소드를 수정하는 경우에 사용된다.

`_inherit` 속성에 상속받을 모델명을 정의한다.

![클래스 상속](/assets/images/2022-12-25-changing-existing-models-model-inheritance/02-class-inheritance.png)

### 새로운 필드 추가

`res.partner` 모델에 Github 아이디를 저장할 필드를 추가하고자 하는 경우에 아래와 같이 코드를 작성할 수 있다.

```python
from odoo import fields, models

class ResPartner(models.Model):
    _inherit = 'res.partner'

    github = fields.Char(string='Github Username')
```

### 기존 메소드 수정

`res.partner` 모델에서 `user_id`가 연결된 레코드 삭제 시, 사용자에게 경고 메세지를 나타내고 싶은 경우에 아래와 같이 코드를 작성할 수 있다.

```python
from odoo import fields, models, _
from odoo.exceptions import UserError

class ResPartner(models.Model):
    _inherit = 'res.partner'

    def unlink(self):
        for partner in self:
            if partner.user_id:
                raise UserError(_('You cannot delete if have a connected User.'))
        return super(ResPartner, self).unlink()
```

## 프로토타입 상속 (Prototype Inheritance)

기존 모델에 정의를 복사해 새로운 모델을 생성하는 경우에 사용된다.

`_inherit` 속성에는 복사할 모델명을 정의하고, `_name` 속성에는 복사된 새로운 모델명을 정의한다.

```python
from odoo import fields, models

class ResPartner(models.Model):
    _name = 'res.partner.copy'
    _inherit = 'res.partner'
```

![프로토타입 상속](/assets/images/2022-12-25-changing-existing-models-model-inheritance/03-prototype-inheritance.png)

## 위임 상속 (Delegation Inheritance)

`res.staff` 모델에 `res.partner` 모델의 데이터 구조를 포함한 중복 데이터 구조가 생성된다.

⚠️ &nbsp; `_inherit` 속성 대신 `_inherits` 속성을 사용한다. (s의 차이)

```python
from odoo import fields, models

class ResPartner(models.Model):
    _name = 'res.staff'
    _inherits = {'res.partner': 'partner_id'}

    partner_id = fields.Many2one('res.partner', ondelete='cascade')
```

![위임 상속](/assets/images/2022-12-25-changing-existing-models-model-inheritance/04-delegation-inheritance.png)

# Field 확장 (Incremental Definition)

같은 필드명과 타입으로 재정의하면 필드를 확장할 수 있다. 

기존 필드에 `required` 속성을 추가하고 싶은 경우에 아래와 같이 코드를 작성할 수 있다.

```python
from odoo import fields, models

class ResPartner(models.Model):  # parent
    _name = 'res.partner'
    
    github = fields.Char(string='Github Username')


class ResPartner(models.Model):  # child
    _inherit = 'res.partner'
    
    github = fields.Char(required=True)
```

# 마치며, 🙇🏻

오랜만에 크리스마스에 써보는 글 ~ 🎄

## 참고한 사이트

[https://www.odoo.com/documentation/14.0/developer/reference/addons/orm.html#inheritance-and-extension](https://www.odoo.com/documentation/14.0/developer/reference/addons/orm.html#inheritance-and-extension){:target="_blank"}

[https://subscription.packtpub.com/book/programming/9781800200319/4/ch04lvl1sec40/adding-features-to-a-model-using-inheritance](https://subscription.packtpub.com/book/programming/9781800200319/4/ch04lvl1sec40/adding-features-to-a-model-using-inheritance){:target="_blank"}
