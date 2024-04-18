let guestArr: string[] = ["Ali", "Ahmed", "Raza"];
let canNotAttend: string ="Ali";
console.log(canNotAttend + " ","not attend the dinner");
let newGuest: string = "Hamza";

guestArr [guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);

guestArr.map((items) => 
console.log(`Dear ${items}, You are invited to the dinner.`));