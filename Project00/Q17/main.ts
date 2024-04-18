let guests: string[] = ["Ali", "Ahmed", "Raza","Hamza"];
console.log("Due to limited space, only two people can be invited for dinner.");

while (guests.length > 2) {
const removedGuest = guests.pop();
console.log(`Sorry, ${removedGuest}, you are no longer invited to the dinner.`)
};

guests.forEach((guest) => {
console.log(`Dear ${guest}, you are still invited to the dinner.`)
});

guests.pop();
guests.pop();

console.log("Final guest list:", guests);