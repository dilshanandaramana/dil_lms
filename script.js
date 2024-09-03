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

