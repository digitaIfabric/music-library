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
    },
    printTracks: function(){
        for (var track in this.tracks){
            this.printTrack(track);
        }
    },
    printTrack: function (trackId) {
        var trackObj = this.tracks[trackId];
        console.log(trackObj.id + ': ' + trackObj.name + ' by ' + trackObj.artist + ' (' + trackObj.album + ')');
    },
    printPlaylists: function(){
        for (var playlist in this.playlists) {
            this.printPlaylist(playlist);
        }
    },
    printPlaylist: function (playlistId) {
        var playlistObj = this.playlists[playlistId];
        console.log(playlistObj.id + ': ' + playlistObj.name + ' - ' + playlistObj.tracks.length + ' tracks');
    },
    printPlaylistAndTracks: function (playlistId) {
        this.printPlaylist(playlistId);
        var playlistObj = this.playlists[playlistId];
        for (var i=0; i < playlistObj.tracks.length; i++){
            this.printTrack(playlistObj.tracks[i]);
        }
    },
    addTrackToPlaylist: function (trackId, playlistId) {

        this.playlists[playlistId].tracks.push(trackId);
        console.log(this.playlists[playlistId].tracks)

    },
    uid: function() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    },
    addTrack: function (name, artist, album) {

        this.tracks[this.uid()] = {name: name, artist: artist, album: album};
        console.log(this.tracks);

    },
    addPlaylist: function (name) {

        uuu = this.uid();
        this.playlists[uuu] = {id: uuu, name: name, tracks: ""};
        console.log(this.playlists);

    }
}

library.printPlaylists();
library.printPlaylistAndTracks('p01');
library.addTrackToPlaylist("t01","p02");
library.printTrack('t01');
library.printTracks();
console.log(library.uid);
library.addTrack("Homemade Dynamite (Digital Fabric Remix)","Lorde","Melodrama [Deluxe]");
library.addPlaylist();
console.log(library.tracks);
console.log(library.playlists);


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {
    qSTR = new RegExp(query, 'i')
    for (uid in library.tracks){
        var track = library.tracks[uid]
        if (qSTR.test(track.name) || qSTR.test(track.artist) || qSTR.test(track.album)){
            return library.printTrack(uid)
        }
    }
}

printSearchResults('Homemade');
