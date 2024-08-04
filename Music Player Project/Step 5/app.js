const container = document.querySelector(".container");
const image = document.querySelector("#music-image");
const title = document.querySelector("#music-details .title");
const singer = document.querySelector("#music-details .singer ");
const play = document.querySelector("#controls #play ");
const prev = document.querySelector("#controls #prev ");
const next = document.querySelector("#controls #next ");
const duration = document.querySelector("#duration-time");
const current = document.querySelector("#current-time");
const progresBar = document.querySelector("#progress-bar");
const volume=document.querySelector("#volume");
const volumeBar=document.querySelector("#volume-bar");
const ul=document.querySelector("#ul");
const player = new MusicPlayer(musicList);
window.addEventListener("load", () => {
  let music = player.getMusic();
  displayMusic(music);
  displayMusicList(player.musicList);
  isMusicPlayingNow();
});

const displayMusic =(music) => {
  title.innerText = music.getName();
  singer.innerText = music.singer;
  image.src = "../img/" + music.img;
  audio.src = "../mp3/" + music.file;
}
play.addEventListener("click", () => {
  const isMusicPlaying = container.classList.contains("playing");
  isMusicPlaying ? pauseMusic() : playMusic();
});

next.addEventListener("click", () => {
  nextMusic();
});
const  nextMusic = () => {
  player.next();
  let music = player.getMusic();
  displayMusic(music);
  playMusic();
  isMusicPlayingNow();

}

prev.addEventListener("click", () => {
  prevMusic();
});
const prevMusic = () =>  {
  player.prev();
  let music = player.getMusic();

  isMusicPlayingNow();


  displayMusic(music);
  playMusic();
}

const playMusic =() => {
  container.classList.add("playing");
  play.querySelector("i").classList = "fa-solid fa-pause";
  audio.play();
}

const  pauseMusic = () => {
  container.classList.remove("playing");
  play.querySelector("i").classList = "fa-solid fa-play";
  audio.pause();
}

calculatedTime = (totalSecond) => {
  const minute = Math.floor(totalSecond / 60);
  const second = Math.floor(totalSecond % 60);

  const totalTime =
    second < 10 ? `${minute}:0${second}` : `${minute}:${second}`;

  return totalTime;
};

audio.addEventListener("loadedmetadata", () => {
  duration.textContent = calculatedTime(audio.duration);
  progresBar.max = Math.floor(audio.duration);
});

audio.addEventListener("timeupdate", () => {
  progresBar.value = Math.floor(audio.currentTime);
  current.textContent = calculatedTime(progresBar.value);
});

progresBar.addEventListener("input", () => {
  current.textContent = calculatedTime(progresBar.value);
  audio.currentTime = progresBar.value;
});

let sesDurumu="sesli";

volume.addEventListener("click",()=>{
  if(sesDurumu==="sesli"){
    audio.muted=true;
    sesDurumu="sessiz"
    volume.classList ="fa-solid fa-volume-xmark";
    volumeBar.value=0;
  }
  else{
    audio.muted=false;
    volumeBar.value=100;
    sesDurumu="sesli";
    volume.classList="fa-solid fa-volume-high";
  }
})

volumeBar.addEventListener("input",(e)=>{

      const volumeLevel = e.target.value;

      audio.volume=volumeLevel/ 100;

      if(volumeLevel==0){
        audio.muted=true;
        sesDurumu="sessiz"
        volume.classList ="fa-solid fa-volume-xmark";
        volumeBar.value=0;
      }
      else{
        audio.muted=false;

        sesDurumu="sesli";
        volume.classList="fa-solid fa-volume-high";
      }
})
const displayMusicList =(list)=>{

  for(let i =0;i<list.length;i++){

    let liTag=`
            <li li-index='${i}' onclick="selectedMusic(this)" class="list-group-item d-flex justify-content-between align-items-center ">
                <span>${list[i].getName()}</span>
                <span id="music-${i}" class="badge bg-primary rounded-pill"></span>
                <audio class="music-${i}" src="../mp3/${list[i].file}"></audio>
            </li> 
    `;
            ul.insertAdjacentHTML("beforeend",liTag);
               let  liAudioDuration=ul.querySelector(`#music-${i}`)
               let  liAudioTag = ul.querySelector(`.music-${i}`);

            
               liAudioTag.addEventListener("loadedmetadata",()=>{

                  liAudioDuration.innerText=calculatedTime(liAudioTag.duration);

              })  
  }
   
}


const selectedMusic =(li)=>{

        player.index=li.getAttribute("li-index");
        displayMusic(player.getMusic());
        playMusic();
        isMusicPlayingNow ();
        }


const isMusicPlayingNow =()=>{


        for(let li of ul.querySelectorAll("li")){

          if(li.classList.contains("playing")){
            li.classList.remove("playing");
          }
          if(li.getAttribute("li-index")==player.index){
            li.classList.add("playing");
          }
        }
}
audio.addEventListener("ended",()=>{
  nextMusic();
})