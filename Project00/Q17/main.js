var guests = ["Ali", "Ahmed", "Raza", "Hamza"];
console.log("Due to limited space, only two people can be invited for dinner.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", you are no longer invited to the dinner."));
}
;
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are still invited to the dinner."));
});
guests.pop();
guests.pop();
console.log("Final guest list:", guests);
