"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "Adam",
    age: 31,
    hobbies: ["Sports", "Music"],
    role: Role.ADMIN,
};
let favoriteActivities;
favoriteActivities = ["beer"];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
if (person.role == Role.AUTHOR) {
    console.log("is admin");
}
