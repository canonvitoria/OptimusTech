function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    const range = end - start;
    let startTime = null;

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const current = Math.min(Math.floor(start + (progress / duration) * range), end);
        obj.innerText = current + (id === 'downloads' ? 'k' : '+');
        if (progress < duration) {
            window.requestAnimationFrame(step);
        }
    }

    window.requestAnimationFrame(step);
}

document.addEventListener('DOMContentLoaded', () => {
    animateValue('projects', 0, 400, 2000);
    animateValue('collaborators', 0, 100, 2000);
    animateValue('downloads', 0, 20, 2000);
    animateValue('reviews', 0, 500, 2000);
});

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });
});