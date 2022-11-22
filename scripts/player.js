/* eslint-disable indent */
/* eslint-disable no-undef */

//VARIÁVEIS
let playPodcast = document.querySelector('.play-btn')
let audio = document.querySelector('audio');
let seekBar = document.querySelector('#seek-bar');
let playPause = document.querySelector('#btn');
let playBtn = document.querySelector('.play');
let pauseBtn = document.querySelector('.pause');
let audioCurrentTime = document.querySelector('#start');
let audioDuration = document.querySelector('#end');
let fowardBtn = document.querySelector('.foward');
let backwardBtn = document.querySelector('.backward');
let volume = document.querySelector('#volume');
let volumeMaxBtn = document.querySelector('.vol-max');
let muted = document.querySelector('.muted');
let volumeBar = document.querySelector('#vol');
let volControler = document.querySelector('#vol-bar');
let removeBtn = document.querySelector('#remove-player');
let aside = document.querySelector('aside');

// TOCAR O PROGRAMA NO SITE 
playPodcast.addEventListener('click', ()=> {
	aside.style.display = 'block';
	audio.play();
});

//PLAY E PAUSE
playPause.addEventListener('click', () => {
	if(audio.paused) {
		audio.play();
		pauseBtn.style.display = 'inline';
		playBtn.style.display = 'none';
	} else {
		audio.pause();
		pauseBtn.style.display = 'none';
		playBtn.style.display = 'inline';
	}
});

//PLAYER E DURAÇÃO
audio.onloadeddata = ()=> {
const setCast = () => {
	if(audio.play) {
		seekBar.value = 0;
		setTimeout(() => {
			seekBar.max = audio.duration;
			audioDuration.innerText = timeFormat(audio.duration);
		}, 300);
	}
};

setCast();
};

function timeFormat(ct) {
	let min = Math.floor(ct / 60);
	if (min < 10) {
		min = `0${min}`;
	}
	let sec = Math.floor(ct % 60);
	if (sec < 10) {
		sec = `0${sec}`;
	}

	return `${min}:${sec}`;
}

//BARRA DE DURAÇÃO
setInterval (() => {
	seekBar.value = audio.currentTime;
	audioCurrentTime.innerHTML = timeFormat(audio.currentTime);
});

seekBar.addEventListener('change', () =>{
	audio.currentTime = seekBar.value;
});

// BOTÕES DE AVANÇAR E VOLTAR 
fowardBtn.addEventListener('click', () => {
	audio.currentTime += Math.floor(10 % 60);
});
backwardBtn.addEventListener('click', () => {
	audio.currentTime -= Math.floor(10 % 60);
});

// VOLUME
volume.addEventListener('mouseover', () => {
	volControler.style.display = 'inline'; 
});

volume.addEventListener('mouseout', () => {
	volControler.style.display = 'none'; 
});

volumeBar.addEventListener('change', () => {
	audio.volume = volumeBar.value / 100;
	if(volumeBar.value == 0) {
		volumeMaxBtn.style.display = 'none';
		muted.style.display = 'inline';
	} else {
		muted.style.display = 'none';
		volumeMaxBtn.style.display = 'inline';
	}
});

volume.addEventListener('click', () => {
	audio.muted = !audio.muted;
    if(audio.muted) {
		volumeMaxBtn.style.display = 'none';
		muted.style.display = 'inline';
	} else {
		muted.style.display = 'none';
		volumeMaxBtn.style.display = 'inline';
	}
});

// REMOVER O PLAYER
removeBtn.addEventListener('click', () => {
	aside.style.display = 'none';
		function stop() {
			audio.pause();
			audio.currentTime = 0;
		}
	stop();
});





