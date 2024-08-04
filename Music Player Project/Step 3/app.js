const container = document.querySelector(".container");
const image = document.querySelector("#music-image");
const title = document.querySelector("#music-details .title");
const singer = document.querySelector("#music-details .singer ");
const play = document.querySelector("#controls #play ");
const prev = document.querySelector("#controls #prev ");
const next = document.querySelector("#controls #next ");
const duration = document.querySelector("#duration-time");
const current = document.querySelector("#current-time");
const progresBar= document.querySelector("#progress-bar");
const player = new MusicPlayer(musicList);

window.addEventListener("load", () => {
  let music = player.getMusic();
  displayMusic(music);
});

function displayMusic(music){
    title.innerText = music.getName();
    singer.innerText = music.singer;
    image.src="../img/" + music.img;
    audio.src="../mp3/" + music.file;

}
play.addEventListener("click",()=>{
  const isMusicPlaying = container.classList.contains("playing");
   isMusicPlaying ? pauseMusic() : playMusic() ;
})

next.addEventListener("click",()=>{
  nextMusic();
  
})
function nextMusic(){
  player.next();
  let  music = player.getMusic();
  displayMusic(music);
  playMusic();
}


  prev.addEventListener("click",()=>{
    prevMusic();
    
  })
function prevMusic(){
      player.prev();
      let  music = player.getMusic();
      displayMusic(music);
      playMusic();
}

function playMusic ()  {
  container.classList.add("playing");
  play.classList= "fa-solid fa-pause"
        audio.play();
 }
 
function  pauseMusic  (){
    container.classList.remove("playing");
    play.classList= "fa-solid fa-play";
        audio.pause();
 }


 calculatedTime = (totalSecond) =>{
      const minute =Math.floor(totalSecond/60);
      const second=Math.floor(totalSecond%60);

    const totalTime = second<10 ? `${minute}:0${second}`:`${minute}:${second}`

    return totalTime;
 }

 audio.addEventListener("loadedmetadata",()=>{
    duration.textContent= calculatedTime(audio.duration);
    progresBar.max = Math.floor(audio.duration);
 })

 audio.addEventListener("timeupdate",()=>{

    progresBar.value=audio.currentTime;
    current.textContent=calculatedTime(audio.currentTime);
 })


