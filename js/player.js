// testes criar player
let videoContainer = document.querySelector('.video-container');
let videoUrl;
let url;

function createPlayer(){
    let videoUrl = document.querySelector('#video-url').value;
    let link = document.querySelector('#link').value;
    let timeBtn = document.querySelector('#time-btn').value;
    let btnText = document.querySelector('#btn-text').value;
    let formContainer = document.querySelector('.form-container');
    let bgColor = document.querySelector('#bg-color').value;
    let textColor = document.querySelector('#text-color').value;

    videoContainer.innerHTML = `
        <video class="myVideo" muted="">
            <source src="${videoUrl}" type="video/mp4">
        </video>
        <div class="play btn-play">
            <h3>Seu vídeo já começou</h3>
            <i class="fa-solid fa-volume-slash"></i>
            <h3>Clique para ouvir</h3>
        </div>
        <div class="pause btn-play"">
            <h3>Não perca essa oportunidade!</h3>
            <i class="fa-solid fa-play-pause"></i>
            <h3>continue assistindo</h3>
        </div>
        <div class="btncompra">
            <a href="${link}" target="_blank" class="btn">
                ${btnText}
            </a>
        </div>
    `;
    
    let video = document.querySelector('video');
    let play = document.querySelector('.play');
    let pause = document.querySelector('.pause');
    let btnPlay = document.querySelectorAll('.btn-play');
    let played = false;

    btnPlay.forEach(btn => {
        btn.style.color = textColor;
        btn.style.backgroundColor = bgColor;
        btn.style.borderColor = textColor;
    });

    video.play();

    play.addEventListener('click',playVideo);

    function playVideo(){
        play.style.display = 'none';
        video.currentTime = 0;
        video.muted = false;
        played = true;

        let time = getTime(timeBtn);

        video.ontimeupdate = ()=>{
            showBtn(time);
        }
    }

    // Função para retornar tempo em segundos
        function getTime(time){
            let timeSplit = time.split(":");
            return parseInt(timeSplit[0]) * 60 + parseInt(timeSplit[1]);
            
        }

    function showBtn(time){
        if (video.currentTime > time){
            let btncompra = document.querySelector('.btncompra');
        btncompra.style.display = 'block';
        }
    
    }

    formContainer.style.display = 'none';

        video.addEventListener('click',playPause);
        pause.addEventListener('click',playPause);

        function playPause(){
            if(video.paused){
                video.play();
                pause.style.display = 'none';
            }else{
                video.pause();
                pause.style.display = 'block';
            }
        }

}