interface User1{
    name: string,
    age:number,
}

function sumOfAge(user1: User1, user2: User1) {
    return user1.age + user2.age
}

const age = sumOfAge({ name: "Vamsi", age: 20 }, { name: "Sai", age: 50 })

console.log(age);
