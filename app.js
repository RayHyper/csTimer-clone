

//import api
import { randomScrambleForEvent } from "https://cdn.cubing.net/js/cubing/scramble";
import { TwistyPlayer } from "https://cdn.cubing.net/js/cubing/twisty";

const output = document.getElementById("output")
const timer = document.getElementById("timer")
const next = document.getElementById("next")
let list = document.getElementById("list")

//stopwatch variables
let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let intervalId;

let mins = 0;
let secs = 0;
let mili = 0;
let times = 1;

let started = false

let nexted = false;


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
        if (event.code === 'Space' && !started) {
            timer.style.color = "#00FF00"
   
            }
});


document.addEventListener("keyup", function(event) {

    timer.style.color = "black"

    if(nexted === true){

    

    if (event.code === 'Space') {
        if (started) {
            clearInterval(intervalId);

            list.innerHTML += '<li>'+times + ". " + secs + '.' + mili + '</li>';
            times++;
            nexted = false
         
            
             
           
        }
        else{

        
        
       
       startTime = Date.now() - elapsedTime;
       intervalId = setInterval(updateTime,80)
        }
        started = true;
       
  
      
        }
    }


});


next.addEventListener("click", ()=>{
    nexted = true;

    main()

    clearInterval(intervalId);
    elapsedTime = 0;
    mins = 0;
    secs = 0;
    mili = 0;
    minStart = false;
    started = false;
    timer.textContent = "0.00";
    timer.style.color = "black";

    
})


let minStart = false

function updateTime(){
    

    elapsedTime = Date.now() - startTime;

    secs = Math.floor((elapsedTime/1000) % 60)
    mins= Math.floor((elapsedTime / (1000*60))%60)
    mili = (elapsedTime % 1000).toString().padStart(3, '0');
     //mili = (elapsedTime % 1000);

   mili = mili.toString().slice(0, -1);
    
    


    if(secs >= 59 || minStart == true){
        minStart = true
        timer.textContent  = mins + ":" + secs + "." + mili
    }
    else{
        timer.textContent  = secs + "." + mili
    }

 
}





