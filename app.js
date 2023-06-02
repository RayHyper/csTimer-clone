

//import api
import { randomScrambleForEvent } from "https://cdn.cubing.net/js/cubing/scramble";
import { TwistyPlayer } from "https://cdn.cubing.net/js/cubing/twisty";

const output = document.getElementById("output")


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
document.addEventListener("keyup", function(event) {
    if (event.code === 'Space') {
        main()
           
    }
});




