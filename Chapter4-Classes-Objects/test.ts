

class Song {

    name : string

    artist : string

    constructor(name: string, artist: string) {
        this.name = name
        this.artist = artist
    }

}

const song = new Song('Beautiful Girl', 'Wiliam Fitzsimmons')

console.log('listenning in this session to : ' + song.name, ', By : ' + song.artist )