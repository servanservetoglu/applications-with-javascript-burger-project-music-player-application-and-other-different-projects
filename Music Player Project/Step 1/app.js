const player = new MusicPlayer(musicList);

let music= player.getMusic();
console.log(music.getName());




music = player.getMusic();
player.next();
console.log(music.getName());

music = player.getMusic();
player.previous();
console.log(music.getName());

music = player.getMusic();
player.previous();
console.log(music.getName());
