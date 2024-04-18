function make_shirt(size: string = "large",text: string = "I love typescript"): void {
    console.log(`You ordered a ${size}, shirt that says ${text}`)
}

make_shirt();
make_shirt("medium");
make_shirt("small","I need a big shirt");