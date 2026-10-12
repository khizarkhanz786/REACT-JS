"use strict";
// function greet(person:string):string{
// return `hello ${person} , welcom to our website`
// }
// const username:string = " khizar khan "
// console.log(greet(username));
// let name = "khizar khan "
// name = "mudassir khan"
Object.defineProperty(exports, "__esModule", { value: true });
function MakeTea(order) {
    switch (order.type) {
        case "greentea":
            return `your order is green tea and spicey level is ${order.spicey}`;
            break;
        case "elaichitea":
            return `yor order is Elaichi tea and elaichi peice is ${order.amonut}`;
            break;
        case "masalatea":
            return `yor order is masla tea and sugar spoon is ${order.sugar}`;
            break;
        default:
            break;
    }
}
console.log(MakeTea({ type: "greentea", spicey: 2 }));
console.log(MakeTea({ type: "masalatea", sugar: 4 }));
//# sourceMappingURL=index.js.map