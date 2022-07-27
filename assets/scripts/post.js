$(document).ready(function() {

    const screenWidth = window.screen.width;
    const post = document.querySelector('.post');

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

});
