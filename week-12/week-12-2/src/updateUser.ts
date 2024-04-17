interface User2{
    id: string;
    name: string;
    age:number;
    email: string;
    password: string;
}

type UpdateProps = Pick<User2, "name" | "age" | "email">

type UpdatePropsOptional =Partial<UpdateProps>

function updateUser(user:UpdatePropsOptional) {
    console.log(`Name:${user.name}, Email:${user.email}`);
}

updateUser({name:"vamsi",email:"Vamsi@gmail.com"})