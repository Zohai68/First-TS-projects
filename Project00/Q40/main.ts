function make_album(artist: string,title: string): {artist: string, title: string} {
const dictionaries = {
    artist: artist.charAt(0).toUpperCase() + artist.slice(1),
    title: title.charAt(0).toUpperCase() + artist.slice(1)
};
return dictionaries;
}
let album = make_album("ali","kitty")
console.log(album)

album = make_album("raza","waves")
console.log(album)


album = make_album("talha","light")
console.log(album)