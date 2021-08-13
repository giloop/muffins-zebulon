// Init flipbook
var _innerWidth = $( window ).width();
var initWidth = 800;
var initDisplay = "double";
if (_innerWidth < 820) {
    initWidth = 400;
    initDisplay = "single";
} 
const myBook = $("#flipbook").turn({
    width: initWidth,
    height: 400,
    autoCenter: true,
    display: initDisplay, // 'single', // 'double'
});

$(window).resize(function () {
    var newWidth = $( window ).width();
    if (_innerWidth >= 820 && newWidth < 820) {
        // Switch from double page to single
        // myBook.width = 400; // window.innerWidth;
        $("#flipbook").turn("display", "single");
        $("#flipbook").turn("size", 400, 400);
        $("#flipbook").turn("resize");
    } 
    if (_innerWidth < 820 && newWidth >= 820) {
        // heightOutput.textContent = window.innerHeight;
        $("#flipbook").turn("display", "double");
        $("#flipbook").turn("size", 800, 400);
        $("#flipbook").turn("resize");
        // widthOutput.textContent = window.innerWidth;
    } 
    // Save width state
    _innerWidth = newWidth;
});

// Init media player
var myPlaylist = undefined;
$(document).ready(function () {

	myPlaylist = new jPlayerPlaylist({
		jPlayer: "#jplayer",
		cssSelectorAncestor: "#jp_container"
	}, 
    [
    ], 
    {
		playlistOptions: {
			enableRemoveControls: false
		},
		swfPath: "js",
		supplied: "mp3",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true
	});

    $('.jp-playlist').hide();

    // Ajout des morceaux depuis le fichier liste-morceaux.txt
    arTracks = [];
    fetch("../liste-morceaux.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
    })
    .then(json => {
        json.tracks.forEach(track => {
        arTracks.push(track);
        myPlaylist.add({
            title:track.title,
            artist:track.artist,
            mp3:"audio/"+track.file
        });
    });
        
    })
    .catch(function () {
        this.dataError = true;
    }) 

});

function playTrack(number) {
    myPlaylist.play(number);
    // Change currently playing title
    $('#playing').text('En cours : '+myPlaylist.playlist[number].title);
}

// Lecture de la 