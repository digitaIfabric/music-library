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

   for (pid in library.playlists) {

    id = library.playlists[pid].id;
    name = library.playlists[pid].name
    N = library.playlists[pid].tracks.length;

    console.log(id + ":" + name + " - " + N + " tracks.");
  }



  // for (item in library.playlists) {
  //   id = library.playlists[item].id;
  //   name = library.playlists[item].name;
  //   tracks = library.playlists[item].tracks.length;
  //   console.log(id + ": by " + name + " - " + tracks + " tracks.")
  // }

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks


console.log("========================================================")


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)


  for (pid in library.tracks) {
    N = library.tracks[pid].id;
    name = library.tracks[pid].name;
    artist = library.tracks[pid].artist;
    album = library.tracks[pid].album;
    console.log(N + ": " + name + " by " + artist + " (" + album + ")")
  }


console.log("========================================================")

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

  var pid = "p02";

  var pid = this.playlists[pid];
  var pname = this.playlists[pid].name;
  var N = this.playlists[pid].tracks.length;
  console.log(pid + ": " + pname + " - " + N + " tracks.");

  for (track in this.playlists[pid].tracks) {

    tid = this.playlists[pid].tracks[track];
    tname = this.tracks[tid].name;
    tartist = this.tracks[tid].artist;
    talbum = this.tracks[tid].album;

    console.log(tid + ": " + tname + " by " + tartist + " (" + talbum + ")");

  }

console.log("========================================================")







