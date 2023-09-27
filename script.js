/* ----------------- test exam 12/8/22 ------------------  */ 
let player = document.querySelector(".player")
let p1value
let p2value
let p3value 
let message = document.querySelector(".message")
let message2 = document.querySelector(".message2")

let p1number = document.querySelector(".p1number")
let p1button = document.querySelector(".p1button")

let p2number = document.querySelector(".p2number")
let p2button = document.querySelector(".p2button")

let p3number = document.querySelector(".p3number")
let p3button = document.querySelector(".p3button")


p1button.addEventListener("click", function(){
    p1value = p1number.value
    player.innerHTML = "player 2" 
    p1number.style.display = "none";
    p1button.style.display = "none";
    p2number.style.display = "inline-block";
    p2button.style.display = "inline-block";
})

let = p2attemptCount = 0;

p2button.addEventListener("click", function(){
    p2attemptCount++
        if(p2attemptCount < 5){
            if(p1number.value == p2number.value){
                p2number.style.display = "none";
                p2button.style.display = "none";
                message.innerHTML = "player 2 is winner"
                player.innerHTML = "player 3"
                p3number.style.display = "inline-block";
                p3button.style.display = "inline-block";
                } 
        } else if(p2attemptCount == 5 && p1number.value != p2number.value){
            p2number.style.display = "none";
            p2button.style.display = "none";
            player.innerHTML = "player 3"
            p3number.style.display = "inline-block";
            p3button.style.display = "inline-block";
        } else{
            p2number.style.display = "none";
            p2button.style.display = "none";
            message.innerHTML = "player 2 is winner"
            player.innerHTML = "player 3"
            p3number.style.display = "inline-block";
            p3button.style.display = "inline-block";
        } 
        p2number.value = ""
})
    

let = p3attemptCount = 0;

p3button.addEventListener("click", function(){
    p3attemptCount++
        if(p3attemptCount < 5){
            if(p1number.value == p3number.value){
                p3number.style.display = "none";
                p3button.style.display = "none";
                message2.innerHTML = "player 3 is winner"
                player.innerHTML = ""
                } 
        } else if(p3attemptCount == 5 && p1number.value != p3number.value){
            p3number.style.display = "none";
            p3button.style.display = "none";
            message.innerHTML = "player 1 is winner"
            player.innerHTML = ""
        } else{
            p3number.style.display = "none";
            p3button.style.display = "none";
            message2.innerHTML = "player 3 is winner"
            player.innerHTML = ""
        } 
    p3number.value = ""
})
console.log("javed")