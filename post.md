---
layout: post-list 
permalink: /post
banner-title: 'Post'
banner-description: 주로 개발 분야의 글을 올려요. ✏️
---

<div class="category-filter">
    {% assign category_order = "all,Odoo,Development,Travel,Etc" | split: "," %}
    {% for category in category_order %}
    <button class="category-btn{% if category == 'all' %} active{% endif %}" data-category="{{ category }}">{% if category == 'all' %}All{% else %}{{ category }}{% endif %}</button>
    {% endfor %}
</div>

<ul class="catalogue">
{% for page in site.posts %}
    {% include post-list.html %}
{% endfor %}
</ul>