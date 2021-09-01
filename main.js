var trackCurrentIndex = 0;
var tracks = [
  {"artist":"Muffin's Zebulon", "title": "Time's goin by",    "file":"MuffinsZebulon-2021-TimesRoll-01-TimesGoinBy.mp3"},
  {"artist":"Muffin's Zebulon", "title": "Girl and boy",      "file":"MuffinsZebulon-2021-TimesRoll-02-GirlAndBoy.mp3"},
  {"artist":"Muffin's Zebulon", "title": "Vinaigre",          "file":"MuffinsZebulon-2021-TimesRoll-03-Vinaigre.mp3"},
  {"artist":"Muffin's Zebulon", "title": "I'll be here",      "file":"MuffinsZebulon-2021-TimesRoll-04-IllBeHere.mp3"},
  {"artist":"Muffin's Zebulon", "title": "One more year",     "file":"MuffinsZebulon-2021-TimesRoll-05-OneMoreYear.mp3"},
  {"artist":"Muffin's Zebulon", "title": "It's time for you", "file":"MuffinsZebulon-2021-TimesRoll-06-ItsTimeForYou.mp3"},
  {"artist":"Muffin's Zebulon", "title": "Virus",             "file":"MuffinsZebulon-2021-TimesRoll-07-Virus.mp3"},
  {"artist":"Muffin's Zebulon", "title": "Alien",             "file":"MuffinsZebulon-2021-TimesRoll-08-Alien.mp3"},
  {"artist":"Muffin's Zebulon", "title": "Bad joke",          "file":"MuffinsZebulon-2021-TimesRoll-09-BadJoke.mp3"},
  {"artist":"Muffin's Zebulon", "title": "Mystery girl",      "file":"MuffinsZebulon-2021-TimesRoll-10-MysteryGirl.mp3"},
  {"artist":"Muffin's Zebulon", "title": "A very good mum",   "file":"MuffinsZebulon-2021-TimesRoll-11-AVeryGoodMum.mp3"}
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

  var audio = document.getElementById('audio-alt');
  audio.href = "audio/"+track.file;

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
