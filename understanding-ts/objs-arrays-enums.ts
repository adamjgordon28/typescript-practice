// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Adam",
//   age: 31,
//   hobbies: ["Sports", "Music"],
//   role: [3, "programmer"],
// };

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Adam",
  age: 31,
  hobbies: ["Sports", "Music"],
  role: Role.ADMIN,
};

// person.role.push("admin");
// person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ["beer"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role == Role.AUTHOR) {
  console.log("is admin");
}
