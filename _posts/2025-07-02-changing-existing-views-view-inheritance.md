---
layout: post
category: Odoo
title: 'Odoo의 뷰(View) 상속에 대해 알아보기'
subtitle: 'View, Field Inheritance 🍆'
banner: '/assets/images/2025-07-02-changing-existing-views-view-inheritance/banner.jpeg'
---

# View 상속 (Inheritance)

Odoo에서는 기존에 정의된 View를 상속받아 변경하거나 확장할 수 있다.

## view 상속

`inherit_id`에 상속받고자 하는 뷰를 `{module}.{view_id}` 형식으로 정의한다.

만약 상속받고자 하는 뷰가 같은 module 내에 있다면 module을 생략할 수 있지만, 가독성과 명확성을 위해 module을 명시하는 것이 좋다.

##### 예시: `res.partner`의 tree 뷰 상속

```xml
<record id="view_partner_tree" model="ir.ui.view">
    <field name="model">res.partner</field>
    <field name="inherit_id" ref="base.view_partner_tree"/>
    <field name="arch" type="xml">
    </field>
</record>
```

## field 상속

필드 상속은 `xpath` 태그를 사용한다. 

- `expr`: 기준이 되는 요소를 XPath로 지정한다.
- `position`: 수정 방식을 지정한다.

##### 예시: `email` 필드 다음에 `github` 필드 추가

```xml
<xpath expr="//field[@name='email']" position="after">
    <field name="github"/>
</xpath>
```

# position 속성

| 값     | 설명                       |
| ----- | ------------------------ |
| inside | (default) 기준 요소 내부에 추가       |
| replace | 기준 요소를 새로운 요소로 교체        |
| after | 기준 요소 다음에 추가             |
| before | 기준 요소 이전에 추가             |
| attributes | 기준 요소의 속성(attribute)을 변경 |
| move  | 기준 요소를 뷰의 다른 위치로 이동      |

## position="attributes"

position 속성 중 `attributes` 속성이 가장 많이 사용된다.
`attributes` 속성을 사용해 필드를 안보이도록 하거나, string을 변경하거나, 수정이 불가능하게 변경하는 등 다양하게 사용할 수 있다.

##### 예시1: String 변경

```xml
<record id="view_order_form" model="ir.ui.view">
    <field name="model">sale.order</field>
    <field name="inherit_id" ref="sale.view_order_form"/>
    <field name="arch" type="xml">
        <xpath expr="//button[@name='action_confirm'][last()]" position="attributes">
            <attribute name="string">Order Confirm</attribute>
        </xpath>
    </field>
</record>
```

##### 예시2: 관리자만 보이게 변경

```xml
<record id="view_partner_property_form" model="ir.ui.view">
    <field name="model">res.partner</field>
    <field name="inherit_id" ref="account.view_partner_property_form"/>
    <field name="arch" type="xml">
        <xpath expr="//group[@name='fiscal_information']" position="attributes">
            <attribute name="groups">base.group_erp_manager</attribute>
        </xpath>
    </field>
</record>
```

##### 예시3: 특정 항목만 보이게 변경 (domain 추가)

```xml
<record id="product_supplierinfo_form_view" model="ir.ui.view">
    <field name="model">product.supplierinfo</field>
    <field name="inherit_id" ref="product.product_supplierinfo_form_view"/>
    <field name="arch" type="xml">
        <xpath expr="//field[@name='name']" position="attributes">
            <attribute name="domain">[('supplier_rank','=','1')]</attribute>
        </xpath>
    </field>
</record>
```

# 마치며, 🙇🏻

이 글은 예전에 회사 블로그에 작성했던 내용을 기반으로 재작성했다.

## 참고한 사이트

[https://www.odoo.com/documentation/18.0/developer/reference/addons/views.html#inheritance](https://www.odoo.com/documentation/18.0/developer/reference/addons/views.html#inheritance){:target="_blank"}

[https://www.youtube.com/watch?v=3iY3ea-wvjw&ab_channel=OdooMates](https://www.youtube.com/watch?v=3iY3ea-wvjw&ab_channel=OdooMates){:target="_blank"}
