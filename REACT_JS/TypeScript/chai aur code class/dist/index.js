// function greet(person:string):string{
// return `hello ${person} , welcom to our website`
// }
// const username:string = " khizar khan "
// console.log(greet(username));
// let name = "khizar khan "
// name = "mudassir khan"
export {};
// console.log(name);
// UNION AND ANY
// const orders = ["22","25", "28", "30"]
// let currentorder:string | undefined;
// for(let order  of orders){
//     if (order === "30"){
//         currentorder = order
//         break
//     }
// }
// console.log(currentorder);
// type greenTea = {type :"greentea" , spicey:number}
// type masalaTea  = {type :"masalatea" ,sugar:number}
// type ElaichiTea = {type :"elaichitea" ,amonut:number}
// type Tea = greenTea | masalaTea | ElaichiTea
// function MakeTea(order:Tea) {
//     switch (order.type) {
//         case "greentea":
//         return `your order is green tea and spicey level is ${order.spicey}`
//             break;
//             case "elaichitea":
//                 return `yor order is Elaichi tea and elaichi peice is ${order.amonut}`
//             break
//             case "masalatea":
//                 return `yor order is masla tea and sugar spoon is ${order.sugar}`
//                 break
//         default:
//             break;
//     }
// }
// console.log(MakeTea({type: "greentea", spicey:2 }));
// console.log(MakeTea({type: "masalatea", sugar:4 }));
// tupples
//  let arr:[number,string,number]= [1,"5",5] 
//  console.log(arr);
// type annotation
// let a = 1
// let a:number = 1
// let a:number = "1"
// inference
// let num =12
// interface and type aliases
// let userobj ={
//     email:"khizar@gmail.com"
// }
// oops classes and obj
// CONSTRUCTOR AND CLASS DEF
// class student {
//     public name
//     public email
//     public dob
//     constructor (name:string, email:string,dob:string){
//        this.name = name
//        this.email = email 
//        this.dob = dob 
//     }
// }
// let s1 = new student("khizar","khizar@gmai.com","06-07-2004")
// let s2 = new student("zoya ","ZOYa@gmai.com","06-07-2010")
//  console.log(s2);
// class bottels{
//     constructor (public name:string,  public material:string ,public color:string){}
// }
// let bottle1 = new bottels("pakola","plastic" ," white")
// console.log(bottle1);
// ACCESS MODIFIER (PRIVATE PUBLIC PROTECTED)
// class user {
//     constructor(email:string) {}
//     login(email:string){
//         if (!email) return
//     else {
//         console.log("user login")
//     }
// }
// }
// class Recruter extends user{
// login(password:string){}
// }
// let r1 = new Recruter("khizarkhan@mail.com")
// console.log(r1);
// Functions
// const foo = (val:string , cb:(val:string) => void) => {
//     cb(val)
// }
// foo("hello" , (v:string)=>{
//     console.log(v, "khizar");
// })
