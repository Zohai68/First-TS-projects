var guestArr = ["Ali", "Ahmed", "Raza"];
var canNotAttend = "Ali";
console.log(canNotAttend + " ", "not attend the dinner");
var newGuest = "Hamza";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
// console.log(guestArr);
// guestArr.map((items) => 
// console.log(`Dear ${items}, I found a bigger table so I invited some more people`));
var guestNew = "Zeeshan";
guestArr.unshift(guestNew);
// console.log(guestArr);
var middleGuest = "Naeem";
var middleIndex = guestArr.length / 3;
guestArr.splice(middleIndex, 0, middleGuest);
// console.log(guestArr);
guestArr.push("Fahan");
// console.log(guestArr);
guestArr.map(function (items) {
    return console.log("Dear ".concat(items, ", you are invited in the bigger dinner"));
});
