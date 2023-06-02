import { randomScrambleForEvent } from "https://cdn.cubing.net/js/cubing/scramble";
import { TwistyPlayer } from "https://cdn.cubing.net/js/cubing/twisty";


const output = document.getElementById("output")


async function main(){
const scramble = await randomScrambleForEvent("333");

let currentScramble =  scramble.toString();


output.textContent = currentScramble


document.querySelector("#main").alg = currentScramble

}

document.addEventListener("keyup", function(event) {
    if (event.code === 'Space') {
        main()
           
    }
});




