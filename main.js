const game = document.querySelector(".game");
const gamescreen = document.getElementById("game")
const won = document.getElementById("won");
const lost = document.getElementById("lost");

const words = document.querySelector(".words");
const letters = document.querySelector(".letters");
const wordlist = document.getElementById("wordlist");
const livesleft = document.getElementById("livesleft");



const letterslist = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

let initalword = ["N", "A", "T", "L", "A", "B", "A"];
let undescore = [];
let lives = 9;
let win = false

function creategame(){
    writeword()
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
    console.log(letterslist[letternum])
    checkword(letterslist[letternum])
}

function writeword(){
    wordlist.innerHTML = "";
    for (let i = 0; i < initalword.length; i++){
        undescore += "_";
        wordlist.innerHTML += " "+ undescore[i] + " ";
    }
}

function checkword(guess){
    if (initalword.indexOf(guess) > -1){
        console.log("letter is in the word")
        
    }else{
        if (lives > 0){
            lives--;
        }else{
            gamescreen.style.display = "none";
            if(win === true){
                won.style.display = "flex";
            }else{
                lost.style.display = "flex";
            }
        }
        livesleft.textContent = lives
        console.log("letter isnt")
    }
}







creategame()