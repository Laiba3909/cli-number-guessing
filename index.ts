#! /usr/bin/env node
import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random()*10 + 1);

const answer = await inquirer.prompt([
    {
        name:"userguessnumber", 
        type:"number", 
        message: "Please guess a number between 1-10:"
    }
]);

if(answer.userguessnumber === randomNumber) {
  console.log("Congratulation you guess right number and you get 2 points")
} else {
    console.log("you guess wrong number")
}