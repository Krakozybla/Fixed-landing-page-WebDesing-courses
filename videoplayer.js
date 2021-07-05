window.addEventListener('load', ()=>{
    let playBtn = document.querySelector('.video__start');
    let pauseBtn = document.querySelector('.video__pause');
    let video = document.querySelector('.video__player');
    playBtn.addEventListener('click', play);
    pauseBtn.addEventListener('click', pause);
    function play(){
        video.play();
        playBtn.classList.add('video-start__hiden');
        pauseBtn.classList.add('video__pause-show');
    }
    function pause(){
        video.pause();
        playBtn.classList.remove('video-start__hiden');
    }
})

