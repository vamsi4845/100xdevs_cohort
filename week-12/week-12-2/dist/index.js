"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAge({ name: "Vamsi", age: 20 }, { name: "Sai", age: 50 });
console.log(age);
