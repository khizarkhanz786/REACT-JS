// function greet(person:string):string{
// return `hello ${person} , welcom to our website`
// }
// const username:string = " khizar khan "
// console.log(greet(username));
// let name = "khizar khan "
// name = "mudassir khan"

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

type greenTea = {type :"greentea" , spicey:number}
type masalaTea  = {type :"masalatea" ,sugar:number}
type ElaichiTea = {type :"elaichitea" ,amonut:number}

type Tea = greenTea | masalaTea | ElaichiTea
function MakeTea(order:Tea) {
    switch (order.type) {
        case "greentea":
        return `your order is green tea and spicey level is ${order.spicey}`

            break;
            case "elaichitea":
                return `yor order is Elaichi tea and elaichi peice is ${order.amonut}`
            break
            case "masalatea":
                return `yor order is masla tea and sugar spoon is ${order.sugar}`
                break
        default:
            break;
    }
}
console.log(MakeTea({type: "greentea", spicey:2 }));
console.log(MakeTea({type: "masalatea", sugar:4 }));
