type User3 = {
  name: string;
    age: number;
}

const user: Readonly<User3> = {
    name: "John",
    age:21
}


user.age =21