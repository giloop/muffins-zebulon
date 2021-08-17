var trackCurrentIndex = 0;
var tracks = [
  {"artist":"Muffin's Zebulon", "title": "Time's goin by baby's comin", "file":"1 time's goin by baby's comin.mp3"},
  {"artist":"Muffin's Zebulon", "title": "Girl and boy", "file":"2 girl and boy.mp3"},
  {"artist":"Muffin's Zebulon", "title": "Vinaigre", "file":"3 vinaigre.mp3"},
  {"artist":"Muffin's Zebulon", "title": "I'll be here", "file":"4 i'll be here.mp3"},
  {"artist":"Muffin's Zebulon", "title": "One more year", "file":"5 one more year.mp3"},
  {"artist":"Muffin's Zebulon", "title": "It's time for you", "file":"6 it's time for you.mp3"},
  {"artist":"Muffin's Zebulon", "title": "Badjock", "file":"9 badjock.mp3"},
  {"artist":"Muffin's Zebulon", "title": "Mystery girl", "file":"10 mystery girl.mp3"},
  {"artist":"Muffin's Zebulon", "title": "Very good mum", "file":"11 very good mum.mp3"}
];

document.addEventListener("DOMContentLoaded", () => {
  var audio = document.getElementById('audio');
  audio.addEventListener('ended', function(event) {
    tracksAudioNext();
  });

  // // Ajout des morceaux depuis le fichier liste-morceaux.txt
  // arTracks = [];
  // fetch("./liste-morceaux.json")
  // .then(response => {
  //     if (!response.ok) {
  //         throw new Error("HTTP error " + response.status);
  //     }
  //     return response.json();
  // })
  // .then(json => {
  //     json.tracks.forEach(track => {
  //     arTracks.push(track);
  //     // Append node in page
  //     // .add({
  //     //    title:track.title,
  //     //    artist:track.artist,
  //     //    mp3:"audio/"+track.file
  //     // });
  //   });
  // });
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
