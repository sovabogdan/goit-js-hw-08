import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
    const TIME_KEY = "videoplayer-current-time";

player.on('timeupdate', throttle(onPlay, 1000));
function onPlay() {
    player.getCurrentTime().then(function(seconds) {
    localStorage.setItem(TIME_KEY, seconds)
})
}

player.on('loaded', updateTime);
function updateTime() {
    const savedTime = localStorage.getItem(TIME_KEY);
    player.setCurrentTime(savedTime).then(function(seconds) {
        console.log(seconds);
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
    }
});
}