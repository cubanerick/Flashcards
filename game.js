var flashcards = require("./flashcards.js")
var inquirer = require("inquirer");

var count = 0;
var correct = 0;
var incorrect = 0;

inquirer.prompt([
    {
        type: "list",
        name: "Flashcard_type",
        message: "Do you want to use the basic or cloze flashcards?",
        choices: ["basic", "cloze"]
    }
]).then(function(answer){
    if(answer.Flashcard_type === "basic"){
        basicCardGame();
    }else {
        clozeCardGame();
    }
});

function basicCardGame(){
    inquirer.prompt([
        {
            type: "input",
            message: flashcards[0][count].front,
            name: "user_answer"
        }
    ]).then(function(answer){
        if(answer.user_answer.toLowerCase() === flashcards[0][count].back.toLowerCase()){
            console.log("Correct!")
            count++;
            correct++;
            if(count <= 9){
                basicCardGame();
            }else {
                console.log("You finished the game.")
                console.log("Correct: " + correct + "\n Incorrect: " + incorrect);
            }
        }else {
            console.log("The correct answer is " + flashcards[0][count].back)
            count++;
            incorrect++;
            if(count <= 9){
                basicCardGame();
            }else {
                console.log("You finished the game.")
                console.log("Correct: " + correct + "\n Incorrect: " + incorrect);
            }
        }
    })
}

function clozeCardGame(){
    inquirer.prompt([
        {
            type: "input",
            message: flashcards[1][count].partial,
            name: "user_answer"
        }
    ]).then(function(answer){
        if(answer.user_answer.toLowerCase() === flashcards[1][count].cloze.toLowerCase()){
            console.log("Correct!")
            console.log(flashcards[1][count].fulltext)
            count++;
            correct++;
            if(count <= 9){
                clozeCardGame();
            }else {
                console.log("You finished the game.")
                console.log("Correct: " + correct + "\n Incorrect: " + incorrect);
            }
        }else {
            console.log("Incorrect")
            console.log(flashcards[1][count].fulltext)
            count++;
            incorrect++;
            if(count <= 9){
                clozeCardGame();
            }else {
                console.log("You finished the game.")
                console.log("Correct: " + correct + "\n Incorrect: " + incorrect);
            }
        }
    })
}