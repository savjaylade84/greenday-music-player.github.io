

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

let song_list = ` [
   {
      "title" : "Somewhere Now", 
      "url" : "./music/revolutionary_radio/01_Somewhere_Now.mp3", 
      "cover" : "./images/revolution.jpg"
    },
    {
       "title": "Bang Bang",
       "url": "./music/revolutionary_radio/02_Bang_Bang.mp3",
       "cover": "./images/revolution.jpg"
     },
     {
       "title": "Revolution Radio",
       "url": "./music/revolutionary_radio/03_Revolution_Radio.mp3",
       "cover": "./images/revolution.jpg"
     },
     {
       "title": "Say Goodbye",
       "url": "./music/revolutionary_radio/04_Say_Goodbye.mp3",
       "cover": "./images/revolution.jpg"
     },
     {
       "title": "Outlaws",
       "url": "./music/revolutionary_radio/05_Outlaws.mp3",
       "cover": "./images/revolution.jpg"
     },
     {
       "title": "Bouncing Off The Wall",
       "url": "./music/revolutionary_radio/06_Bouncing_Off_The_Wall.mp3",
       "cover": "./images/revolution.jpg"
     },
     {
       "title": "Still Breathing",
       "url": "./music/revolutionary_radio/07_Still_Breathing.mp3",
       "cover": "./images/revolution.jpg"
     },
     {
       "title": "Youngblood",
       "url": "./music/revolutionary_radio/08_Youngblood.mp3",
       "cover": "./images/revolution.jpg"
     },
     {
       "title": "Too Dumb To Die",
       "url": "./music/revolutionary_radio/09_Too_Dumb_To_Die.mp3",
       "cover": "./images/revolution.jpg"
     },
     {
       "title": "Troubled Time",
       "url": "./music/revolutionary_radio/10_Troubled_Time.mp3",
       "cover": "./images/revolution.jpg"
     },
     {
       "title": "Forever Now",
       "url": "./music/revolutionary_radio/11_Forever_Now.mp3",
       "cover": "./images/revolution.jpg"
     },
     {
       "title": "Forever Now",
       "url": "./music/revolutionary_radio/11_Forever_Now.mp3",
       "cover": "./images/revolution.jpg"
     },
     {
       "title": "2000 Light Years Away",
       "url": "./music/god_greatest_band/01_2000_Light_Years_Away.mp3",
       "cover": "./images/greatest_band.jpg"
     },
     {
       "title": "2000 Light Years Away",
       "url": "./music/god_greatest_band/01_2000_Light_Years_Away.mp3",
       "cover": "./images/greatest_band.jpg"
     },
     {
       "title": "Longview",
       "url": "./music/god_greatest_band/02_Longview.mp3",
       "cover": "./images/greatest_band.jpg"
     },
     {
       "title": "Welcome To Paradise",
       "url": "./music/god_greatest_band/03_Welcome_To_Paradise.mp3",
       "cover": "./images/greatest_band.jpg"
     },
     {
       "title": "Basket Case",
       "url": "./music/god_greatest_band/04_Basket_Case.mp3",
       "cover": "./images/greatest_band.jpg"
     },
     {
       "title": "When I Come Around",
       "url": "./music/god_greatest_band/05_When_I_Come_Around.mp3",
       "cover": "./images/greatest_band.jpg"
     },
     {
       "title": "She",
       "url": "./music/god_greatest_band/06_She.mp3",
       "cover": "./images/greatest_band.jpg"
     },
     {
       "title": "Brain Stew",
       "url": "./music/god_greatest_band/07_Brain_Stew.mp3",
       "cover": "./images/greatest_band.jpg"
     },
     {
       "title": "Hitchin' A Ride",
       "url": "./music/god_greatest_band/08_Hitchin_A_Ride.mp3",
       "cover": "./images/greatest_band.jpg"
     },
     {
       "title": "Good Riddance",
       "url": "./music/god_greatest_band/09_Good_Riddance.mp3",
       "cover": "./images/greatest_band.jpg"
     },
     {
       "title": "Minority",
       "url": "./music/god_greatest_band/10_Minority.mp3",
       "cover": "./images/greatest_band.jpg"
     },
     {
       "title": "Warning",
       "url": "./music/god_greatest_band/11_Warning.mp3",
       "cover": "./images/greatest_band.jpg"
     },
     {
       "title": "American Idiot",
       "url": "./music/god_greatest_band/12_American_Idiot.mp3",
       "cover": "./images/greatest_band.jpg"
     },
     {
       "title": "Holiday",
       "url": "./music/god_greatest_band/13_Holiday.mp3",
       "cover": "./images/greatest_band.jpg"
     },
     {
       "title": "Boulevard Of Broken Dreams",
       "url": "./music/god_greatest_band/14_Boulevard_Of_Broken_Dreams.mp3",
       "cover": "./images/greatest_band.jpg"
     },
     {
       "title": "Wake Me Up When September Ends",
       "url": "./music/god_greatest_band/15_Wake_Me_Up_When_September_Ends.mp3",
       "cover": "./images/greatest_band.jpg"
     },
     {
       "title": "Know Your Enemy",
       "url": "./music/god_greatest_band/16_Know_Your_Enemy.mp3",
       "cover": "./images/greatest_band.jpg"
     },
     {
       "title": "21 Guns",
       "url": "./music/god_greatest_band/17_21_Guns.mp3",
       "cover": "./images/greatest_band.jpg"
     },
     {
       "title": "Oh Love",
       "url": "./music/god_greatest_band/18_Oh_Love.mp3",
       "cover": "./images/greatest_band.jpg"
     },
     {
       "title": "Bang Bang",
       "url": "./music/god_greatest_band/19_Bang_Bang.mp3",
       "cover": "./images/greatest_band.jpg"
     },
     {
       "title": "Still Breathing",
       "url": "./music/god_greatest_band/20_Still_Breathing.mp3",
       "cover": "./images/greatest_band.jpg"
     },
     {
       "title": "Ordinary World",
       "url": "./music/god_greatest_band/21_Ordinary_World.mp3",
       "cover": "./images/greatest_band.jpg"
     },
     {
       "title": "Back In The USA",
       "url": "./music/god_greatest_band/22_Back_In_The_USA.mp3",
       "cover": "./images/greatest_band.jpg"
     }
  ]
`;
let song_index;

//set and load song json 
 song_list = JSON.parse(song_list);
 song_index = 0;
 load_song(song_list[song_index]);

  //update song
 function load_song(song) {

  title.innerHTML =`${song.title}`;
  audio.src = `${song.url}`;
  cover.src = `${song.cover}`;
      console.log(song);

  };


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