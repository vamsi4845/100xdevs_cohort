interface User4{
    name: string;
    age:number
}
type Users = Record<string, { name: string; age: number}>
// const userMap=new Map<string,User4>()
const users: Users = {
    "adjjaj": {
        name: "Vamsi",
        age:24
    },
    "jwwjjw": {
        name: "Sai",
        age:28
    }
}