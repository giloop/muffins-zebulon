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
