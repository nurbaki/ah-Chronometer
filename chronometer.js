//*=================================================================
//*              Choronometer
//* ================================================================


const sec = document.querySelector(".seconds");
const minut = document.querySelector(".minutes");
const Hour = document.querySelector(".hours");
const startStopBtn = document.querySelector(".startStop");
const makeZeroBtn = document.querySelector(".makeZero");


let counter = 0;
let minutes = 0;
let hours = 0;

let ilksaat = 0;
let ilkdakika = 0;

let start = 0;


function screenSet(){
    if (counter < 10) {
      sec.innerHTML = `0${counter}`;
    }else sec.textContent = counter;

    if (minutes < 10) {
    minut.innerHTML = `0${minutes}`;
    }else minut.innerHTML = minutes;

    if (hours%10 < 10) {
    Hour.innerHTML = `0${hours%10}`;
    }else Hour.innerHTML = hours%60;
};

function Chronometer(){
    if (counter < 10) {
        sec.innerHTML = `0${counter}`;
        counter +=1;
    } 
    else if ( 9 < counter && counter <100) {
        sec.textContent = counter%100;
        counter +=1;

    }
    else if ( counter == 100) {
        if (ilkdakika == 0) {
            minutes +=1;
            ilkdakika =1;
        }
        if (minutes < 10) {
            minut.innerHTML = `0${minutes}`;
            minutes += 1;
        }
        else if ( 9 <minutes && minutes <60) {
            minut.innerHTML = minutes%60;
            minutes += 1;
        }
        else if ( minutes == 60) {
            if (ilksaat== 0) {
                hours +=1;
                ilksaat =1;
            };

            if ((hours) < 10) {                              
                Hour.innerHTML = `0${hours}`;
                hours += 1;
            }
            else if ( 9 < hours && hours < 60) {
                Hour.innerHTML = hours % 60;
                hours += 1;
            }
            else if ( (hours%60) == 0) {
                Hour.innerHTML = `00`
                hours=1;
            }
            minut.innerHTML = `00`;
            minutes = 1;
        }    
    sec.innerHTML = `00`;
    counter = 1;
    }; 
};

function makeZero (){
    counter = 0;
    minutes = 0;
    hours = 0;
    ilksaat = 0;
    ilkdakika = 0;
    screenSet();
};


startStopBtn.onclick = () =>{
    if (start ==0) {
        myInterval = setInterval(Chronometer, 10);
        start = 1;
    }else {
        clearInterval(myInterval);
        start = 0;
    }
};

makeZeroBtn.onclick = () =>{
    makeZero ();
};

screenSet();
let myInterval = setInterval(Chronometer, 10);
clearInterval(myInterval);




