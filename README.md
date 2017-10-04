### MUSIC LIBRARY

#### The program will consist of:

````
1. an object, the library, that will store all the information about tracks and playlists
````
````
2. a collection of functions that will perform certain operations on the library, for example addPlaylist
````

#### The library object is structured like this:


````
var library = {
  tracks: { 123: { id: 123,
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            456: { id: 456,
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"}
          },

  playlists: { 789: { id: 789,
                      name: "Coding Music",
                      tracks: [123, 456]
                    }
             }
};
````
