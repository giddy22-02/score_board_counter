let homeCount =0
let guestCount =0
//create variable to grab the content of the scoreboard home
let homeEl=document.getElementById("score-home")
//create variable to grab the content of the scoreboard guest
let guestEl=document.getElementById("score-guest")

//Create functions to change the score board home
function homeAdd1(){
    let score = homeCount +=1
    homeEl.textContent =score
    document.getElementById("home").textContent= "Home Team: "+score+ " Points"
}
function homeAdd2(){
    let score = homeCount +=2
    homeEl.textContent =score
    document.getElementById("home").textContent= "Home Team: "+score+ " Points"
}
function homeAdd3(){
    let score = homeCount +=3
    homeEl.textContent =score
    document.getElementById("home").textContent= "Home Team: "+score+ " Points"
}
//Create functions to change the score board guest
function guestAdd1(){
    let score = guestCount +=1
    guestEl.textContent =score
    document.getElementById("guest").textContent= "Guest Team: "+score+ " Points"
}
function guestAdd2(){
    let score = guestCount +=2
    guestEl.textContent =score
    document.getElementById("guest").textContent= "Guest Team: "+score+ " Points"
}
function guestAdd3(){
    let score = guestCount +=3
    guestEl.textContent =score
    document.getElementById("guest").textContent= "Guest Team: "+score+ " Points"
}
//Create a function to Reset to New Game
function newMatch(){
    let homeScore=homeCount-homeCount
    let guestScore=guestCount-guestCount
    homeEl.textContent=0
    guestEl.textContent=0
    document.getElementById("home").textContent= "Home Team: "+0+ " Points"
    document.getElementById("guest").textContent= "Guest Team: "+0+ " Points"
    homeCount =0
    guestCount =0
}
