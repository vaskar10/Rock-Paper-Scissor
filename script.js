const computerChoice = document.querySelector('#computer-choice')
const userChoice  = document.querySelector('#user-choice')
let result = document.querySelector('#result')
const rock = document.querySelector('#rock')
const paper= document.querySelector('#paper')
const scissor = document.querySelector('#scissor')
const button = document.querySelectorAll('button')
let displayResult = ''
let user;

function getResult(){
    if(user === "rock" && res === "rock"){
        displayResult = "you win"
        
    }
    if(user === "rock" && res === "paper"){
        displayResult = "you lost"
        
    }
    if(user === "rock" && res === "scissor"){
        displayResult = "you draw"
        
    }

    result.innerText = displayResult 
    
}
button.forEach(element => element.addEventListener('click', (e) => {
    let user = e.target.id
    userChoice.textContent = user
    console.log(user)
    generateComputerChoice()
    getResult()

}))

function generateComputerChoice(){
    let choices =["rock","paper","scissor"]
    let index = Math.floor(Math.random() * 3)
    res = choices[index]
    console.log(res)
    computerChoice.innerHTML = res
}





