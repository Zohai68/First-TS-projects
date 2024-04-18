function sandwich(...items: string[]): void {
    console.log("Sandwich order:")
    for (let i = 0; i < items.length; i++) {
        console.log(`- ${items[i]}`)
    }
}

console.log("enjoy your sandwich");
sandwich('tomato','egg','chicken')
sandwich('mayo sauce','chilli sauce','chicken')
sandwich('beef','butter','black pepper')