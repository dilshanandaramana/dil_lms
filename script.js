document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('video-modal');
    var videoPlayer = document.getElementById('video-player');
    var closeBtn = document.getElementsByClassName('close-btn')[0];
    
    document.querySelectorAll('.watch-video-btn').forEach(function(button) {
        button.addEventListener('click', function() {
            var videoSrc = this.getAttribute('data-video');
            videoPlayer.src = videoSrc;
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        videoPlayer.pause();
        videoPlayer.src = "";
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            videoPlayer.pause();
            videoPlayer.src = "";
        }
    });
});

// Swiper initialization
var swiper = new Swiper('.swiper-container', {
    loop: true,          // Enable continuous loop mode
    autoplay: {
        delay: 3000,      // Delay between slides (3 seconds)
        disableOnInteraction: false,
    },
    effect: 'fade',       // Fade effect for hiding/showing slides
    fadeEffect: {
        crossFade: true   // Smooth transition between slides
    },
    pagination: {
        el: '.swiper-pagination', // Selector for pagination container
        clickable: true,          // Allow clicks on pagination bullets
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Remove active class from all links
            tabLinks.forEach(link => link.classList.remove('active'));

            // Hide all tab contents
            tabContents.forEach(content => content.classList.add('hidden'));

            // Add active class to the clicked link
            link.classList.add('active');

            // Show the content associated with the clicked link
            const targetId = link.getAttribute('data-target');
            document.getElementById(targetId).classList.remove('hidden');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            
            tabContents.forEach(content => {
                if (content.id === targetId) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });

    // Optionally, set the default tab
    document.querySelector('.tab-link[data-target="dashboard"]').click();
});



