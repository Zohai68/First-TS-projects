var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Paris", "England", "Germany", "Tokyo", "Dubai"];
console.log("Original order:", places);
console.log("Alphabetical order:", __spreadArray([], places, true).sort());
console.log("Original order after sorting:", places);
console.log("Reverse alphabetical order:", __spreadArray([], places, true).sort().reverse());
console.log("Original order after reverse sorting", places);
places.reverse();
console.log("Reversed order:", places);
places.reverse();
console.log("Back to original order:", places);
places.sort();
console.log("Back in alphabetical order:", places);
places.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sort in reverse alphabetical order:", places);
