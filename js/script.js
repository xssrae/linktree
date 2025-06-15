const playPauseButton = document.getElementById('play-pause-button');
const musicPlayer = document.getElementById('music-player');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');
const volumeSlider = document.getElementById('volume-slider');

musicPlayer.volume = volumeSlider.value;

playPauseButton.addEventListener('click', () => {
    if (musicPlayer.paused) {
        musicPlayer.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
    } else {
        musicPlayer.pause();
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    }
});

volumeSlider.addEventListener('input', (e) => {
    musicPlayer.volume = e.target.value;
});

musicPlayer.addEventListener('ended', () => {
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
});