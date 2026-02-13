window.onload = function() {

    // 다크 모드 토글
    const toggle = document.querySelector('.theme-toggle');
    if (toggle) {
      const icon = toggle.querySelector('i');

      // 현재 상태에 맞게 아이콘 설정
      if (document.body.classList.contains('dark')) {
        icon.classList.replace('fa-moon', 'fa-sun');
      }

      toggle.addEventListener('click', function() {
        document.body.classList.toggle('dark');
        const isDark = document.body.classList.contains('dark');
        icon.classList.replace(isDark ? 'fa-moon' : 'fa-sun', isDark ? 'fa-sun' : 'fa-moon');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
      });
    }

    /* Scroll to top */
    const scrollBtn = document.querySelector('.scroll-to-top');
    if (scrollBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                scrollBtn.classList.add('visible');
            } else {
                scrollBtn.classList.remove('visible');
            }
        });

        scrollBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 카테고리 필터
    const categoryBtns = document.querySelectorAll('.category-btn');
    if (categoryBtns.length > 0) {
        const items = document.querySelectorAll('.catalogue-item');

        categoryBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                categoryBtns.forEach(function(b) { b.classList.remove('active'); });
                btn.classList.add('active');

                var category = btn.getAttribute('data-category');
                items.forEach(function(item) {
                    if (category === 'all' || item.getAttribute('data-category') === category) {
                        item.style.display = '';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    const screenWidth = window.screen.width;
    const post = document.querySelector('.post');
    if (!post) return;

    /* image padding */
    for (const image of post.querySelectorAll('img.shadow')) {
        image.parentElement.style.padding = screenWidth <= 670 ? '0 0.72rem' : '0 1.5rem';
    }

    /* image group */
    const paddingWidth = 30;
    const standardHeight = 350;
    const minScreenWidth = 768;

    if (minScreenWidth < screenWidth) {
        for (const imageGroup of post.querySelectorAll('.image-group')) {
            const images = imageGroup.querySelectorAll('img');
            let totalWidth = 0;

            for (const image of images) {
                const width = $(image).width();
                const height = $(image).height();
                const increaseHeightPercent = (standardHeight - height) / height * 100;
                const increaseWidth = width * (1 + increaseHeightPercent / 100) + paddingWidth;

                $(image).data('width', increaseWidth);
                totalWidth += increaseWidth;
            }

            for (const image of images) {
                const width = $(image).data('width');
                const widthPercent = (width / totalWidth) * 100;
                image.parentElement.style.width = `${widthPercent}%`;
            }
        }
    }

    /* TOC (Table of Contents) */
    const tocNav = document.querySelector('.toc');
    if (tocNav) {
        const tocList = tocNav.querySelector('.toc-list');
        const postInfo = post.querySelector('.post-info');
        const headings = Array.from(post.querySelectorAll('h1, h2, h3')).filter(function(h) {
            return !postInfo || !postInfo.contains(h);
        });

        if (headings.length < 2) {
            tocNav.style.display = 'none';
        } else {
            headings.forEach(function(heading) {
                if (!heading.id) {
                    heading.id = heading.textContent
                        .trim()
                        .toLowerCase()
                        .replace(/[^\w\s가-힣ㄱ-ㅎㅏ-ㅣ-]/g, '')
                        .replace(/\s+/g, '-');
                }

                var level = parseInt(heading.tagName.charAt(1));
                var li = document.createElement('li');
                li.className = 'toc-level-' + level;

                var a = document.createElement('a');
                a.href = '#' + heading.id;
                a.textContent = heading.textContent.trim();
                a.addEventListener('click', function(e) {
                    e.preventDefault();
                    heading.scrollIntoView({ behavior: 'smooth' });
                    history.replaceState(null, null, '#' + heading.id);
                });

                li.appendChild(a);
                tocList.appendChild(li);
            });
        }
    }

}
