function make_album(artist, title) {
    var dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + artist.slice(1)
    };
    return dictionaries;
}
var album = make_album("ali", "kitty");
console.log(album);
album = make_album("raza", "waves");
console.log(album);
album = make_album("talha", "light");
console.log(album);
