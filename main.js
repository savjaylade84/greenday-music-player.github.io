
// get the important element
const music_container = document.querySelector('.music-container');
const play_btn = document.querySelector('#play');
const prev_btn = document.querySelector('#prev');
const next_btn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progress_container = document.querySelector('.progress-container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');

let song_list;
let song_index;

  //update song
 function load_song(song) {

  title.innerHTML = `${String(song.title).toString()}`;
  audio.src = `${String(song.url).toString()}`;
  cover.href = `${String(song.cover).toString()}`;
      console.log(song);

  };

//get and load song list from json file
function loadJson(){
  
  fetch("songs.json").
  then(res =>{
  
    if(res.ok)
     JSON.parse(res.json());
    
  }).then(data => {
    
    console.log(data);
    
    //set and store song json file
    song_list = data;
    
    //track songs list count
    song_index = song_list.length;
    
    //load the song
    load_song(song_list[song_index]);
    console.log("song is loaded");

  }).catch(error => {
    console.log("json parsing failed");
  });
  
} 

window.addEventListener('load',loadJson);

// play the song
function play_song(){
  music_container.classList.add('play');
  
  play_btn.querySelector('i.fas').classList.replace('fa-play', 'fa-pause');
  
  audio.play();
} 

// pause the song
function pause_song(){
  music_container.classList.remove('play');
  
  play_btn.querySelector('i.fas').classList.replace('fa-pause', 'fa-play');
  
  audio.pause();
}

// set and play the next song 
function next_song(){
    song_index++
  
    if (song_index > song_list.length - 1)
      song_index = 0;
  
    load_song(song_list[song_index]);
    play_song();
} 

// set and play the last song played
function prev_song(){
    song_index--;
  
    if (song_index < 0)
      song_index = song_list.length - 1;
  
    load_song(song_list[song_index]);
    play_song();
} 

// load the progress bar 
function load_progress(e){
    const { duration, currentTime } = e.srcElement;
    const progress_percent = (currentTime / duration) * 100;
    progress.style.width = `${progress_percent}%`;
} 

// define the loading progress bar
function set_progress(e){
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
  
    audio.currentTime = (clickX / width) * duration;
} 

//Event listener
// play the current song
play_btn.addEventListener('click',()=>{
  
  const isPlaying = music_container.classList.contains('play');
  
  if(isPlaying){
    pause_song();
  }else{
    play_song();
  } 
  
});

// go to the last song
prev_btn.addEventListener('click',prev_song);

// go to the next song
next_btn.addEventListener('click',next_song);

//play the audio and progressbar
audio.addEventListener('timeupdate',load_progress);

progress_container.addEventListener('click',set_progress);

audio.addEventListener('ended',next_song);