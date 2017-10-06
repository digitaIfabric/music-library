var library = {
    tracks: { t01: { id: "t01",
        name: "Code Monkey",
        artist: "Jonathan Coulton",
        album: "Thing a Week Three" },
        t02: { id: "t02",
            name: "Model View Controller",
            artist: "James Dempsey",
            album: "WWDC 2003"},
        t03: { id: "t03",
            name: "Four Thirty-Three",
            artist: "John Cage",
            album: "Woodstock 1952"}
    },
    playlists: { p01: { id: "p01",
        name: "Coding Music",
        tracks: ["t01", "t02"]
    },
        p02: { id: "p02",
            name: "Other Playlist",
            tracks: ["t03"]
        }
    }
}

// Print tracks
var printTracks = function(){
    for (var track in library.tracks){
     printTrack(track);
    }
}

console.log("========================================================")

// Print track (input = trackId)
var printTrack = function (trackId) {
    var trackObj = library.tracks[trackId];
    console.log(trackObj.id + ': ' + trackObj.name + ' by ' + trackObj.artist + ' (' + trackObj.album + ')');
}
printTracks(library)

console.log("========================================================")


// Print playlists
var printPlaylists = function(){
    for (var playlist in library.playlists) {
        printPlaylist(playlist);
    }
}

// Print playlist (input = playlistId)
var printPlaylist = function (playlistId) {
    var playlistObj = library.playlists[playlistId];
    console.log(playlistObj.id + ': ' + playlistObj.name + ' - ' + playlistObj.tracks.length + ' tracks');
}
printPlaylists(library);

console.log("========================================================")


// Print playlist and tracks
var printPlaylistAndTracks = function (playlistId) {
    printPlaylist(playlistId);
    var playlistObj = library.playlists[playlistId];
        for (var i=0; i < playlistObj.tracks.length; i++){
            printTrack(playlistObj.tracks[i]);
        }


}
printPlaylistAndTracks('p01');

console.log("========================================================")

// adds an existing track to an existing playlist
var addTrackToPlaylist = function (trackId, playlistId) {

    library.playlists[playlistId].tracks.push(trackId);
    console.log(library.playlists[playlistId].tracks)

}
addTrackToPlaylist("t01","p02");

console.log("========================================================")

// generates a unique id
// (use this for addTrack and addPlaylist)
var uid = function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

console.log(uid);

console.log("========================================================")

// adds a track to the library
var addTrack = function (name, artist, album) {

    library.tracks[uid()] = {name: name, artist: artist, album: album};
    console.log(library.tracks);

}

addTrack("Homemade Dynamite (Digital Fabric Remix)","Lorde","Melodrama [Deluxe]");

console.log("========================================================")

// adds a playlist to the library
var addPlaylist = function (name) {

    uid = uid();
    library.playlists[uid] = {id: uid, name: name, tracks: ""};
    console.log(library.playlists);

}
addPlaylist();

console.log("========================================================")
console.log(library.tracks);
console.log(library.playlists);

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}


