//1.Create a variable called highScore that can be a number OR a boolean
let hightScore: number | boolean;


//2.create an array called stuff
//it can be an array of numbers OR an array of strings
//it cannot be an array of numbers and strings (mixed together)
let stuff: number[] | string[];

//3.Write a function called greet that accepts a single string OR an array of strings
//It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
const greet = (name: string | string[]) => {
    if (typeof name === "string") {
        console.log(`Hello,${name}`);
    } else {
        name.forEach(element => {
            console.log(`Hello,${element}`);
        });
    }
}

//4.Given this interface: Select the answer below that is a valid implementation of the Cryable interface
interface Cryable {
    cry(): string;
}
const human: Cryable = {
    cry() {
        return "BOO HOO"
    }
}