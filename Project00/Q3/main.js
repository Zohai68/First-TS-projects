var personName = "John";
// For Lowercase
console.log(personName.toLowerCase());
// For Uppercase
console.log(personName.toUpperCase());
// For titlecase
console.log(personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
