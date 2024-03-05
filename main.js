let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create new audio element
let curr_track = document.createElement("audio");

// Define the tracks that have to be played
let track_list = [
  {
    name: " 25-25",
    artist: "Arjan Dhillon",
    image:"https://i1.sndcdn.com/artworks-m0X5FKsuG60yMxnH-ke0y8A-t500x500.jpg",    
    path: "./25-25.mp3",
  },
  {
    name: " Back to Sikhi",
    artist: "Arjan Dhillon",
    image:"https://i1.sndcdn.com/artworks-m0X5FKsuG60yMxnH-ke0y8A-t500x500.jpg",    
    path: "./Back to Sikhi.mp3",
  },
  {
    name: " Biography",
    artist: "Arjan Dhillon",
    image:"https://i1.sndcdn.com/artworks-m0X5FKsuG60yMxnH-ke0y8A-t500x500.jpg",    
    path: "./Biography.mp3",
  },
  {
    name: " Drunk Arjan",
    artist: "Arjan Dhillon",
    image:"https://i1.sndcdn.com/artworks-m0X5FKsuG60yMxnH-ke0y8A-t500x500.jpg",    
    path: "./Drunk Arjan.mp3",
  },
  {
    name: " Fantasy",
    artist: "Arjan Dhillon",
    image:"https://i1.sndcdn.com/artworks-m0X5FKsuG60yMxnH-ke0y8A-t500x500.jpg",    
    path: "./Fantasy.mp3",
  },
  {
    name: " Glorious",
    artist: "Arjan Dhillon",
    image:"https://i1.sndcdn.com/artworks-m0X5FKsuG60yMxnH-ke0y8A-t500x500.jpg",    
    path: "./Glorious.mp3",
  },
  {
    name: " Hazur",
    artist: "Arjan Dhillon",
    image:"https://i1.sndcdn.com/artworks-m0X5FKsuG60yMxnH-ke0y8A-t500x500.jpg",    
    path: "./Hazur.mp3",
  },
  {
    name: " Hommie Call",
    artist: "Arjan Dhillon",
    image:"https://i1.sndcdn.com/artworks-m0X5FKsuG60yMxnH-ke0y8A-t500x500.jpg",    
    path: "./Hommie Call.mp3",
  },
  {
    name: " Hot Shit",
    artist: "Arjan Dhillon",
    image:"https://i1.sndcdn.com/artworks-m0X5FKsuG60yMxnH-ke0y8A-t500x500.jpg",    
    path: "./Hot Shit.mp3",
  },
  {
    name: " It's My Time",
    artist: "Arjan Dhillon",
    image:"https://i1.sndcdn.com/artworks-m0X5FKsuG60yMxnH-ke0y8A-t500x500.jpg",    
    path: "./It's My Time.mp3",
  },
  {
    name: " Janu Janu",
    artist: "Arjan Dhillon",
    image:"https://i1.sndcdn.com/artworks-m0X5FKsuG60yMxnH-ke0y8A-t500x500.jpg",    
    path: "./Janu Janu.mp3",
  },
  {
    name: " Kuz Saal",
    artist: "Arjan Dhillon",
    image:"https://i1.sndcdn.com/artworks-m0X5FKsuG60yMxnH-ke0y8A-t500x500.jpg",    
    path: "./Kuz Saal.mp3",
  },
  {
    name: " Maava'n",
    artist: "Arjan Dhillon",
    image:"https://i1.sndcdn.com/artworks-m0X5FKsuG60yMxnH-ke0y8A-t500x500.jpg",    
    path: "./Maava'n.mp3",
  },
  {
    name: " Maharani Jinda'n",
    artist: "Arjan Dhillon",
    image:"https://i1.sndcdn.com/artworks-m0X5FKsuG60yMxnH-ke0y8A-t500x500.jpg",    
    path: "./Maharani Jinda'n.mp3",
  },
  {
    name: " Memory Lane",
    artist: "Arjan Dhillon",
    image:"https://i1.sndcdn.com/artworks-m0X5FKsuG60yMxnH-ke0y8A-t500x500.jpg",    
    path: "./Memory Lane.mp3",
  },
  {
    name: " Munde Pindan De",
    artist: "Arjan Dhillon",
    image:"https://i1.sndcdn.com/artworks-m0X5FKsuG60yMxnH-ke0y8A-t500x500.jpg",    
    path: "./Munde Pindan De.mp3",
  },
  {
    name: " Parallel Thoughts",
    artist: "Arjan Dhillon",
    image:"https://i1.sndcdn.com/artworks-m0X5FKsuG60yMxnH-ke0y8A-t500x500.jpg",    
    path: "./Parallel Thoughts.mp3",
  },
  {
    name: " Rafal",
    artist: "Arjan Dhillon",
    image:"https://i1.sndcdn.com/artworks-m0X5FKsuG60yMxnH-ke0y8A-t500x500.jpg",    
    path: "./Rafal.mp3",
  },
  {
    name: " Sandalbar",
    artist: "Arjan Dhillon",
    image:"https://i1.sndcdn.com/artworks-m0X5FKsuG60yMxnH-ke0y8A-t500x500.jpg",    
    path: "./Sandalbar.mp3",
  },
  {
    name: " Suits You",
    artist: "Arjan Dhillon",
    image:"https://i1.sndcdn.com/artworks-m0X5FKsuG60yMxnH-ke0y8A-t500x500.jpg",    
    path: "./Suits You.mp3",
  },
  {
    name: " Tha Karke",
    artist: "Arjan Dhillon",
    image:"https://i1.sndcdn.com/artworks-m0X5FKsuG60yMxnH-ke0y8A-t500x500.jpg",    
    path: "./Tha Karke.mp3",
  },
  {
    name: " Tyaar",
    artist: "Arjan Dhillon",
    image:"https://i1.sndcdn.com/artworks-m0X5FKsuG60yMxnH-ke0y8A-t500x500.jpg",    
    path: "./Tyaar.mp3",
  },
  {
    name: " Vigde",
    artist: "Arjan Dhillon",
    image:"https://i1.sndcdn.com/artworks-m0X5FKsuG60yMxnH-ke0y8A-t500x500.jpg",    
    path: "./Vigde.mp3",
  },
  {
    name: " Way Bigger",
    artist: "Arjan Dhillon",
    image:"https://i1.sndcdn.com/artworks-m0X5FKsuG60yMxnH-ke0y8A-t500x500.jpg",    
    path: "./Way Bigger.mp3",
  },
  {
    name: " Woah",
    artist: "Arjan Dhillon",
    image:"https://i1.sndcdn.com/artworks-m0X5FKsuG60yMxnH-ke0y8A-t500x500.jpg",    
    path: "./Woah.mp3",
  },
  {
    name: " Youth Flow",
    artist: "Arjan Dhillon",
    image:"https://i1.sndcdn.com/artworks-m0X5FKsuG60yMxnH-ke0y8A-t500x500.jpg",    
    path: "./Youth Flow.mp3",
  },
];

function random_bg_color() {
  // Get a number between 64 to 256 (for getting lighter colors)
  let red = Math.floor(Math.random() * 256) + 64;
  let green = Math.floor(Math.random() * 256) + 64;
  let blue = Math.floor(Math.random() * 256) + 64;

  // Construct a color withe the given values
  let bgColor = "rgb(" + red + "," + green + "," + blue + ")";

  // Set the background to that color
  document.body.style.background = bgColor;
}

function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();
  curr_track.src = track_list[track_index].
  path;
  curr_track.load();

  track_art.style.backgroundImage =
    "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent =
    "PLAYING " + (track_index + 1) + " OF " + track_list.length;

  updateTimer = setInterval(seekUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
  random_bg_color();
}

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

// Load the first track in the tracklist
loadTrack(track_index);

function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

function nextTrack() {
  if (track_index < track_list.length - 1) track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  if (track_index > 0) track_index -= 1;
  else track_index = track_list.length;
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  let seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);

    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(
      curr_track.currentTime - currentMinutes * 60
    );
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(
      curr_track.duration - durationMinutes * 60
    );

    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }
    if (durationSeconds < 10) {
      durationSeconds = "0" + durationSeconds;
    }
    if (currentMinutes < 10) {
      currentMinutes = "0" + currentMinutes;
    }
    if (durationMinutes < 10) {
      durationMinutes = "0" + durationMinutes;
    }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}
