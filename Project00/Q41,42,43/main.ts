// Q 41
function show_magicians(magicians: string[]): void {
for(const magician of magicians) {
    console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
}
}
const magician: string [] = ["afzal","ahmed","hameed"];
// show_magicians(magician)


// Q 42
    
function make_great(magicians: string[]): void {
for (let i =0; i < magicians.length; i++) {
    magicians[i] = magicians[i] + ' the great'
}
}
const magicians2: string[] = ["ali","ahmed","raza"];
// make_great(magicians2)
// show_magicians(magicians2)

// Q 43

function make_great2(magicians: string[]): string[] {
const greatMagicians: string[] = [];
for(let i =0; i < magicians.length; i++) {
    greatMagicians.push(magicians[i] + ' the great');
}
return greatMagicians;
}
const magicians3: string[] = ["afzal","ahmed","hameed"];
const greatMagicians2: string[] = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);
    
    