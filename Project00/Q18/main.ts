let places: string[] = ["Paris","England","Germany","Tokyo","Dubai"];
console.log("Original order:",places);

console.log("Alphabetical order:",[...places].sort());
console.log("Original order after sorting:", places);

console.log("Reverse alphabetical order:",[...places].sort().reverse());
console.log("Original order after reverse sorting", places);

places.reverse();
console.log("Reversed order:", places);

places.reverse();
console.log("Back to original order:", places);

places.sort();
console.log("Back in alphabetical order:", places);

places.sort((a,b) => b.localeCompare(a));
console.log("Sort in reverse alphabetical order:", places);
