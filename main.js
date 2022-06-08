const game = document.querySelector(".game");
const gamescreen = document.getElementById("game")
const won = document.getElementById("won");
const lost = document.getElementById("lost");

const words = document.querySelector(".words");
const wordss = document.querySelector(".wordss");
const letters = document.querySelector(".letters");
const wordlist = document.getElementById("wordlist");
const livesleft = document.getElementById("livesleft");



const letterslist = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

let initalword = ["N", "A", "T"];
let undescore = [];
let lives = 9;
let win
let wordsguessed = initalword.length
let wordl = " "

for (let i = 0; i < initalword.length; i++){
    wordl += initalword[i] 
    wordl = wordl.toLowerCase()
}

won.innerHTML = "you won! the word was" + wordl
lost.innerHTML ="you lost. the word was" + wordl

function creategame(){
    for (let i = 0; i < initalword.length; i++){
        const word = document.createElement("h3")
        word.setAttribute("id", i)
        word.innerHTML += "_" + "."
        wordss.appendChild(word)
    }
    for(let i = 0; i < letterslist.length; i++){
        const button = document.createElement("button")
        button.setAttribute("id", i)
        button.setAttribute("class", "button")
        button.innerHTML = letterslist[i]
        button.addEventListener("click", clicked)
        letters.appendChild(button)
    }
}

function clicked(){
    let letternum = this.getAttribute("id");
    this.setAttribute("style", "background-color: rgba(101, 177, 204, 0.281); color: rgba(0, 0, 0, 0.281);")
    checkword(letterslist[letternum])
}

function writeword(num, word){
    const getid = document.getElementById(num)
    getid.innerHTML = word + "."
    wordsguessed--;
    checkwin()
}

function checkwin(){
    if (wordsguessed === 0){
        win = true
    }else{
        if(lives === 0){
            win = false
        }
    }
    if(win === true){
        gamescreen.style.display = "none";
        won.style.display = "flex";
    }if (win === false) {
        gamescreen.style.display = "none";
        lost.style.display = "flex";
    }
    
}

function checkword(guess){
    if (initalword.indexOf(guess) > -1){
        let num = initalword.indexOf(guess)
        writeword(num, guess)
    }else{
        if (lives > 0){
            lives--;
        }
        checkwin()
        livesleft.textContent = lives
        console.log("letter isnt")
    }
}







creategame()