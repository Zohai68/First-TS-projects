let guestArr: string[] = ["Ali", "Ahmed", "Raza"];
let canNotAttend: string ="Ali";
console.log(canNotAttend + " ","not attend the dinner");
let newGuest: string = "Hamza";

guestArr [guestArr.indexOf(canNotAttend)] = newGuest;
// console.log(guestArr);

// guestArr.map((items) => 
// console.log(`Dear ${items}, I found a bigger table so I invited some more people`));

let guestNew: string ="Zeeshan";
guestArr.unshift(guestNew);
// console.log(guestArr);

let middleGuest: string ="Naeem";
let middleIndex = guestArr.length/3;
guestArr.splice(middleIndex,0,middleGuest);
// console.log(guestArr);

guestArr.push("Fahan");
// console.log(guestArr);

guestArr.map((items) =>
console.log(`Dear ${items}, you are invited in the bigger dinner`));