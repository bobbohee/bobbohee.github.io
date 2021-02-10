---
layout: post-list 
permalink: /post
banner-title: 'Post'
banner-description: 주로 개발 분야의 글을 올려요. ✏️
---

<ul class="catalogue">
{% for page in site.posts %}
    {% include post-list.html %}
{% endfor %}
</ul>