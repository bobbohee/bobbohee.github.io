---
layout: post-list 
permalink: /post
banner-title: "Post"
banner-description: 아주 가끔씩 관심 분야의 글을 올려요.
---

<ul class="catalogue">
{% for page in site.posts %}
    {% include post-list.html %}
{% endfor %}
</ul>