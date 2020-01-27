import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
const video = document.querySelector("video");
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay()]
});

const button = document.querySelector("button");
button.onclick = () => player.togglePlay();

const button_unmute = document.getElementById("unMute");
button_unmute.onclick = () => player.unmute();
