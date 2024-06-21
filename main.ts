#! /usr/bin/env node
//The app will show the students multiple choice questions and prompt the user to reply..
//In the end it will show the students the result of the quiz..

import inquirer from "inquirer"

console.log("Welcome To My Adventure Quiz Game:");
console.log("You are required to gain maximum 4 points for the window.");

let points = 0

//Question 1
let question_1 = await inquirer.prompt([
    {
        name:"One",
        message: "TypeScript is a superset off?",
        type: "list",
        choices: ["Python","C++","JavaScript","jQuery"]
    }
])

if (question_1.One === "JavaScript") {
    console.log("Your Answer Is Correct")
    points++
} else {
    console.log("Incorrect Answer")
}

//Question 2
let question_2 = await inquirer.prompt([
    {
        name: "Two",
        message: "Who Is The Founder Of Microsoft",
        type: "list",
        choices: ["Mark Zuckerberg","Bill Gates","Larry Page","Reid Hoffman"]
    }
])
if (question_2.Two == "Bill Gates") {
    console.log("Your Answer Is Correct")
    points++
} else {
    console.log("Incorrect Answer");
};

//Question 3
let question_3 = await inquirer.prompt([
    {
        name: "Three",
        message: "Which City Is The Capital Of Japan",
        type: "list",
        choices: ["Tokyo","Bangkok","Islamabad","Bern"] 
    }
])
if (question_3.Three == "Tokyo") {
    console.log("Your Answer Is Correct")
    points++
} else {
    console.log("Incorrect Answer");
};

//Question 4
let question_4 = await inquirer.prompt([
    {
        name: "Four",
        message: "Who Is The Current Governor Of Sindh",
        type: "list",
        choices: ["Kamran Tessori","Faisal Karim Kundi","Saleem Haider Khan","Sheikh Jaffar Khan"]
    }
])
if (question_4.Four == "Kamran Tessori") {
    console.log("Your Answer Is Correct")
    points++
} else {
    console.log("Incorrect Answer");
};

//Question 5 
let question_5 = await inquirer.prompt([
    {
        name: "Five",
        message: "Who Is The Founder Of Exams",
        type: "list",
        choices: ["Henry Fischel","Hayden Wood","Amit Gudka","eric ly"]
    }
])
if (question_5.Five === "Henry Fischel") {
    console.log("Your Answer Is Correct")
    points++
} else {
    console.log("Incorrect Answer");
};

//Output Conditions
if (points >= 4) {
    console.log("Congatulations!");
    console.log(`Your Points: ${points}`)
} else {
    console.log("You Loss! Try Again ");
    console.log(`Your Points: ${points}`);
};