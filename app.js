

//import api
import { randomScrambleForEvent } from "https://cdn.cubing.net/js/cubing/scramble";
import { TwistyPlayer } from "https://cdn.cubing.net/js/cubing/twisty";

const output = document.getElementById("output")
const timer = document.getElementById("timer")
const next = document.getElementById("next")
let clicked = false

//stopwatch variables
let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let intervalId;

let mins = 0;
let secs = 0;
let mili = 0;

let started = false


async function main(){

//generates new scramble
const scramble = await randomScrambleForEvent("333");

//convert scramble to string
let currentScramble =  scramble.toString();


//output it
output.textContent = currentScramble

//set twisty player to scramble
document.querySelector("#main").alg = currentScramble

}

//generate new scramble when space is pressed
document.addEventListener("keydown", function(event) {
        if (event.code === 'Space') {
            timer.style.color = "#00FF00"
   
            }
});


document.addEventListener("keyup", function(event) {

    if (event.code === 'Space') {

        
        timer.style.color = "black"
       startTime = Date.now() - elapsedTime;
       intervalId = setInterval(updateTime,100)
  
      
        }


});


next.addEventListener("click", ()=>{
    main()
})


let minStart = false

function updateTime(){
    

    elapsedTime = Date.now() - startTime;

    secs = Math.floor((elapsedTime/1000) % 60)
    mins= Math.floor((elapsedTime / (1000*60))%60)
    mili = (elapsedTime % 1000).toString().padStart(3, '0');
     //mili = (elapsedTime % 1000);

   mili = mili.toString().slice(0, -2);


    console.log(mili)
    
    


    if(secs >= 60 || minStart == true){
        minStart = true
        timer.textContent  = mins + ":" + secs + "." + mili
    }
    else{
        timer.textContent  = secs + "." + mili
    }

 
}





