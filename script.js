document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('video-modal');
    var videoPlayer = document.getElementById('video-player');
    var closeBtn = document.getElementsByClassName('close-btn')[0];

    document.querySelectorAll('.watch-video-btn').forEach(function (button) {
        button.addEventListener('click', function () {
            var videoSrc = this.getAttribute('data-video');
            videoPlayer.src = videoSrc;
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
        videoPlayer.pause();
        videoPlayer.src = "";
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            videoPlayer.pause();
            videoPlayer.src = "";
        }
    });
});

// Swiper initialization
var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            tabLinks.forEach(link => link.classList.remove('active'));
            tabContents.forEach(content => content.classList.add('hidden'));

            link.classList.add('active');
            const targetId = link.getAttribute('data-target');
            document.getElementById(targetId).classList.remove('hidden');
        });
    });

    document.querySelector('.tab-link[data-target="dashboard"]').click();
});
