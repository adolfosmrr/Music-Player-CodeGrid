let musicPlayer = document.querySelector('.music-player-container');
let togglePlayer = document.querySelector('.toggle-player');

let trackInfo = document.querySelector('.track-info');
let trackName = document.querySelector('.track-name');
let trackArtist = document.querySelector('.track-artist');
let trackNav = document.querySelector('.track-nav');

let playPauseBtn = document.querySelector('.playpause-track');
let nextBtn = document.querySelector('.next-track');
let prevBtn = document.querySelector('.prev-track');

let trackIndex = 0;
let isPlaying = false;
let isHidden = true;


let currentTrack = document.createElement("audio");
let soundBars = document.querySelector(".sound-bars")

togglePlayer.addEventListener("click", function () {
    isHidden = !isHidden;

    if(isHidden){
        musicPlayer.classList.remove("hide");
        togglePlayer.innerHTML = '<ion-icon name="remove-outline"></ion-icon>';
        trackInfo.style.transitionDelay = "0.3s";
        trackNav.style.transitionDelay = "0.3s";
    }else{
        musicPlayer.classList.add("hide");
        togglePlayer.innerHTML = '<ion-icon name="add-outline"></ion-icon>';
        trackInfo.style.transitionDelay = "0";
        trackNav.style.transitionDelay = "0";
    }
});

let soundBarsLottie = bodymovin.loadAnimation({
    container: soundBars,
    renderer:"svg",
    loop: true,
    autoplay: false,
    path: "https://assets5.lottiefiles.com/packages/lf20_jJJl6i.json",
});

let trackList = [
    {
        name: "Obstáculo",
        artist: "Tainy, Myke Towers",
        path: "./songs/1.mp3",
    },
    {
        name: "Pasiempre",
        artist: "Tainy, Arcángel, Jhayco, etc.",
        path: "./songs/2.mp3",
    },
    {
        name: "Todavía",
        artist: "Tainy, Wisin y Yandel",
        path: "./songs/3.mp3",
    },
    {
        name: "Fantasma | AVC",
        artist: "Tainy, Jhayco",
        path: "./songs/4.mp3",
    },
    {
        name: "Mojabi Ghost",
        artist: "Tainy, Bad Bunny",
        path: "./songs/5.mp3",
    },
    {
        name: "11 y Once",
        artist: "Tainy, Sech, E.VAX",
        path: "./songs/6.mp3",
    },
    {
        name: "Desde las 10",
        artist: "Tainy, kany García",
        path: "./songs/7.mp3",
    },
    {
        name: "Mañana",
        artist: "Tainy, Young Miko, The Marías",
        path: "./songs/8.mp3",
    },
    {
        name: "Buenos Aires",
        artist: "Tainy, Mora, Zion",
        path: "./songs/9.mp3",
    },
    {
        name: "La Baby",
        artist: "Tainy, Daddy Yankee, Feid, Sech",
        path: "./songs/10.mp3",
    },
    {
        name: "Me Jodí...",
        artist: "Tainy, Arcángel",
        path: "./songs/11.mp3",
    },
    {
        name: "Volver",
        artist: "Tainy, Skrillex, Four Tet, Rauw Alejandro",
        path: "./songs/12.mp3",
    },
    {
        name: "En Visto",
        artist: "Tainy, Ozuna",
        path: "./songs/13.mp3",
    },
    {
        name: "Lo Siento BB:/",
        artist: "Tainy, Julieta Venegas, Bad Bunny",
        path: "./songs/14.mp3",
    },
    {
        name: "Si Preguntas Por Mí",
        artist: "Tainy, Kris Floyd, Judeline",
        path: "./songs/15.mp3",
    },
    {
        name: "Sci-Fi",
        artist: "Tainy, Rauw Alejandro",
        path: "./songs/16.mp3",
    },
    {
        name: "Corleone Interlude",
        artist: "Tainy, Chencho Corleone",
        path: "./songs/17.mp3",
    },
    {
        name: "Paranormal",
        artist: "Tainy, Alvaro Díaz",
        path: "./songs/18.mp3",
    },
    {
        name: "Sacrificio",
        artist: "Tainy, Xantos",
        path: "./songs/19.mp3",
    },
];

function loadTrack(trackIndex) {
    currentTrack.src = trackList[trackIndex].path;
    currentTrack.load();
    trackName.textContent = trackList[trackIndex].name;
    trackArtist.textContent = trackList[trackIndex].artist;
    currentTrack.addEventListener("ended", nextTrack);
}

loadTrack(trackIndex);

function playPauseTrack() {
    if(!isPlaying) playTrack();
    else pauseTrack();
};

function playTrack() {
    currentTrack.play();
    isPlaying = true;
    playPauseBtn.innerHTML = '<ion-icon name="pause-sharp"></ion-icon>';
    soundBarsLottie.playSegment([0,120], true);
};

function pauseTrack(){
    currentTrack.pause();
    isPlaying = false;
    playPauseBtn.innerHTML='<ion-icon name="play-sharp"></ion-icon>';
    soundBarsLottie.stop();
};

function nextTrack() {
    if(trackIndex < trackIndex.lenght - 1) trackIndex += 1;
    else trackIndex = 0;
    loadTrack(trackIndex);
    playTrack();
};

function prevTrack() {
    if(trackIndex < 0) trackIndex -= 1;
    else trackIndex = trackIndex.length;
    loadTrack(trackIndex);
    playTrack();
};