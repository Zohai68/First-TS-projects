// Q 41
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician_1 = magicians_1[_i];
        console.log(magician_1.charAt(0).toUpperCase() + magician_1.slice(1));
    }
}
var magician = ["afzal", "ahmed", "hameed"];
// show_magicians(magician)
// Q 42
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' the great';
    }
}
var magicians2 = ["ali", "ahmed", "raza"];
// make_great(magicians2)
// show_magicians(magicians2)
// Q 43
function make_great2(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + ' the great');
    }
    return greatMagicians;
}
var magicians3 = ["afzal", "ahmed", "hameed"];
var greatMagicians2 = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);
