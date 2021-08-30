var trackCurrentIndex = 0;
var tracks = [
  {"artist":"Muffin's Zebulon", "title": "Time's goin by", "file":"1 time's goin by baby's comin.mp3"},
  {"artist":"Muffin's Zebulon", "title": "Girl and boy", "file":"2 girl and boy.mp3"},
  {"artist":"Muffin's Zebulon", "title": "Vinaigre", "file":"3 vinaigre.mp3"},
  {"artist":"Muffin's Zebulon", "title": "I'll be here", "file":"4 i'll be here.mp3"},
  {"artist":"Muffin's Zebulon", "title": "One more year", "file":"5 one more year.mp3"},
  {"artist":"Muffin's Zebulon", "title": "It's time for you", "file":"6 it's time for you.mp3"},
  {"artist":"Muffin's Zebulon", "title": "Virus", "file":"7 virus.mp3"},
  {"artist":"Muffin's Zebulon", "title": "Alien", "file":"8 alien.mp3"},
  {"artist":"Muffin's Zebulon", "title": "Bad joke", "file":"9 badjock.mp3"},
  {"artist":"Muffin's Zebulon", "title": "Mystery girl", "file":"10 mystery girl.mp3"},
  {"artist":"Muffin's Zebulon", "title": "A very good mum", "file":"11 very good mum.mp3"}
];

document.addEventListener("DOMContentLoaded", () => {
  var audio = document.getElementById('audio');
  audio.addEventListener('ended', function(event) {
    tracksAudioNext();
  });
});

function tracksAudioSet(trackIndex) {
var track = this.tracks[trackIndex];
  var audio = document.getElementById('audio');
  audio.src = "audio/"+track.file;
  audio.play();

  var audioTitle = document.getElementById('audio-title');
  audioTitle.textContent = track.title;

  this.trackCurrentIndex = trackIndex;
}

function tracksAudioNext() {
  this.trackCurrentIndex = ++this.trackCurrentIndex % this.tracks.length;
  tracksAudioSet(this.trackCurrentIndex);
}

function tracksAudioPrev() {
  if (this.trackCurrentIndex === 0) {
    this.trackCurrentIndex = this.tracks.length - 1;
  } else {
    this.trackCurrentIndex--;
  }
  tracksAudioSet(this.trackCurrentIndex);
}
