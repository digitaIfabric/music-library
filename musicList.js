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
  playlists: {
            p01: {
              id: "p01",
                              name: "Coding Music",
                              tracks: ["t01", "t02"]
                            },
              p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }

}

  for (var pid in library.playlists) {

    //console.log(pid)
    var trackname = library.playlists.pid['name']
    //key on a key
    //console.log(name)
    var N = Object.keys(pid).length;

    console.log(pid + ": " + trackname + " - " + N + " tracks");

  }

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks


console.log("========================================================")


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)


  for (var i = 1; i <= Object.keys(library["tracks"]).length; i++){

  console.log(library["tracks"]["t0"+i]["id"] + ": " + library["tracks"]["t0"+i]["name"] + " by " + "(" + library["tracks"]["t0"+i]["album"] + ")");

  }

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)






