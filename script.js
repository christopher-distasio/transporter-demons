

// document.getElementById("test").innerHTML = "This is from the script.js file"

let transporter1 = document.getElementById("grid-item-4");
let transporter2 = document.getElementById("grid-item-5");
let transporter3 = document.getElementById("grid-item-6");
let transporter4 = document.getElementById("grid-item-7");
let transporter5 = document.getElementById("grid-item-8");

transporter1.innerHTML = "";
transporter2.innerHTML = "";
transporter3.innerHTML = "";
transporter4.innerHTML = "";
transporter5.innerHTML = "";

//'<img class="second-demon" height="100" width="125" style="position: relative; left: 122px; top:125px" src="assets/images/demon-phases/second.png">'

//'<img class="final-demon" height="300" width="200" style="position: relative; left: 80px; top: 50px" src="assets/images/demon-phases/final.png">'


// if (1<2){
//  firstDemon4 = document.getElementById("grid-item-4").innerHTML = "";
// }

//PSEUDOCODE (just means writing to plan what you'll code, not actually coding it):

//CHECK INTERNAL LOGIC FIRST ... event listeners, etc. are the next step, not the first one with JS ... it can also be like filling in a puzzle with what you know and google until it looks right and THEN code it


// Game Logic Functions:


// function attack (){

    //timerStart() -- call the function starts timer

    //randomFirstAttack() -- call the function that randomizes which transporter unit gets the first image that then starts changing


    //if a random number comes up for the first transporter unit, the first image will show up there, if the second unit does, etc.

    //async function that sets a timeout until the first demon image turns into second demon image then another to third 

// }

//function timerStart(){

    //let timer = 
    //if timer.value = 

//}

function randomFirstAttack (){

    // let randomFirstAttack = Math.random()

    // if (randomFirstAttack){}

    let randomFirstAttack = .2


    //Good time to use switch statement because of many actions based on the value of a single variable

    if (randomFirstAttack <= .2){
            transporter1.innerHTML = '<img class="first-demon" height="100" width="125" style="position: relative; left: 122px; top:125px" src="assets/images/demon-phases/first.png">';
    } else if (randomFirstAttack > .2 && randomFirstAttack <= .4){
            transporter2.innerHTML = '<img class="first-demon" height="100" width="125" style="position: relative; left: 122px; top:125px" src="assets/images/demon-phases/first.png">';


    }
}
            

    //let timer = 
    //if timer.value = 
    
//}


//when the user clicks on any image, the random generator of first images goes again
//if any final attacking image shows up and the user doesn't click on the image before the final timeout
//  all of the transporters show the attacking image and the screen turns red
//  alert with prompt for starting game over pops up

//if user clicks on the prompt in the alert, the game starts over as if the user had clicked the start button

//if the user is able to destroy all the demons before the time remaining timer is up, then an alert with a prompt to start over will pop up and the transporters will all show smiley faces with a thumbs up





// Event Listeners:

//for start button click to start attack function???
//same thing for prompt button in alerts
