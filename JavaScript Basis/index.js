console.log("Web Dev");

let a = prompt("Please enter a number: ")

// let print = `a is greater than 6 and the value of a is: ${a}`

// if (a > 6){
//     console.log(print);
// }

// else{
//     console.log("a is not greater than 6");
// }

switch (Number(a)){

    case 1:
        console.log("a is equal to 1");
        break;

    case 2:
        console.log("a is equal to 2");
        break;

    case 3:
        console.log("a is equal to 3");
        break;

    default:
        console.log("a has some other value");
}