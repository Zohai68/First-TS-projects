var guestArr = ["Ali", "Ahmed", "Raza"];
var canNotAttend = "Ali";
console.log(canNotAttend + " ", "not attend the dinner");
var newGuest = "Hamza";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
guestArr.map(function (items) {
    return console.log("Dear ".concat(items, ", You are invited to the dinner."));
});
