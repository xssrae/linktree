// Seleciona os elementos do DOM
const playPauseButton = document.getElementById('play-pause-button');
const musicPlayer = document.getElementById('music-player');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');

playPauseButton.addEventListener('click', () => {
    if (musicPlayer.paused) {
        musicPlayer.play();
        playIcon.classList.add('hidden');
        pauseIcon.classList.remove('hidden');
    } else {
        musicPlayer.pause();

        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
    }
});

musicPlayer.addEventListener('ended', () => {
    playIcon.classList.remove('hidden');
    pauseIcon.classList.add('hidden');
});