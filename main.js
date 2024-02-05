let btn =document.getElementById("btn")

const player1 = document.getElementById("p1");
const player2= document.getElementById("p2");
const Scoreplayer1 = document.getElementById("sp1");
const Scoreplayer2= document.getElementById("sp2");

const mtchRes = document.getElementById("mtchRes");

const won = document.getElementById("p4")



const Np1 = document.getElementById("Np1");
const Np2 = document.getElementById("Np2");
Np1.innerText=0;
Np2.innerText=0;

let resetBtn =document.getElementById("resetBtn");
const strbtn = document.getElementById("strbtn")
resetBtn.disabled=true;

btn.addEventListener('click',function() {
 const a = prompt("enter name of player 1")
const b = prompt("enter name of player 2")

player1.innerText=a;
player2.innerText = b;
Scoreplayer2.innerText=b;
Scoreplayer1.innerText=a;
})


resetBtn.addEventListener("click",function(){
    let check = confirm("Do you want to reset");
    if(resetBtn.innerText=="Reset Game"&& check==true){
        Np1.innerText=0;
        Np2.innerText=0;
        won.innerText="Click On Start Button to play"
    }
    else if(check==false){
        strbtn.innerText="Click me"
        btn.disabled=true;
        resetBtn.disabled=false;
    }
})

const ludogame =() =>{
     const value1 = Math.floor(Math.random()*6)+1;

const value2 = Math.floor(Math.random()*6)+1;



const diceP1 =`images/dice-six-faces-${value1}.svg`

const diceP2 =`images/dice-six-faces-${value2}.svg`

document.getElementById("diceP1").setAttribute('src',diceP1);

document.getElementById("diceP2").setAttribute('src',diceP2);

if(value1>value2){
      won.innerText="Player 1 won the round"
      Np1.innerText=Number(Np1.innerText)+1;
      
}
else if(value1<value2){
    won.innerText="Player 2 won the round"
     Np2.innerText=Number(Np2.innerText)+1;
    
}
else{
    won.innerText="Round Draw"
}
}



strbtn.addEventListener('click',function(){
    if(strbtn.innerText=="Start Game"){
        strbtn.innerText="click me";
        btn.disabled=true;
        resetBtn.disabled =false;
        

    }
})
resetBtn.addEventListener("click",function(){
    if(strbtn.innerText=="click me"){
        strbtn.innerText="Start Game"
        btn.disabled=false;
        resetBtn.disabled=true;
        mtchRes.innerText="Match result"

    }
})





