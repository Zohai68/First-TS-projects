function make_shirt(size, text) {
    if (size === void 0) { size = "large"; }
    if (text === void 0) { text = "I love typescript"; }
    console.log("You ordered a ".concat(size, ", shirt that says ").concat(text));
}
make_shirt();
make_shirt("medium");
make_shirt("small", "I need a big shirt");
