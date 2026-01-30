let clicks = 0;
let x = 0; //to store the previous position of the mouse
let y = 0;
let newX = 0; // how much did the mouse move 
let newY = 0;
let selected;

window.addEventListener('load', init);

function init() {
    let thebody = document.body;
    thebody.addEventListener('click', clickCalled);

    document.getElementById("clicks").addEventListener('mouseover', changeColor);
    document.getElementById("clicks").addEventListener('mouseleave', changebackColor);
    let puzzles = document.getElementsByClassName("puzzle");

    for (let i=0; i<puzzles.length; i++) {
    puzzles[i].addEventListener('mousedown', down);

    function down(event) {
        x = event.clientX;
        y = event.clientY;
        console.log(x, y);

        selected = event.target; //which rect is selected

        document.addEventListener('mousemove', mouseMove);
        document.addEventListener('mouseup', mouseRelease);

    }
    function mouseMove(event) {
        newX = x - event.clientX;
        newY = y - event.clientY;

        x = event.clientX;
        y = event.clientY;

        selected.style.top = (selected.offsetTop - newY) + "px";
        selected.style.left = (selected.offsetLeft - newX) + "px";
    }

    function mouseRelease() {
         document.removeEventListener('mousemove', mouseMove);
    }
}
    function changeColor() {
        let circleChanged = document.getElementById("clicks");
        circleChanged.style.color = "red";
    }
    function changebackColor() {
        document.getElementById("clicks").style.color = "blue";
    }



    function clickCalled() {
        clicks++;
        console.log(clicks);
        let clicksElement = document.getElementById("clicks");
        clicksElement.innerHTML = clicks;

        clicksElement.style.fontSize = 16+ clicks + "px";
    }

//in progress trying to figure out how moving puzzle by clicking would work
//document.getElementById("p1").addEventListener('click', puzzlemove );
// function puzzlemove() {
//         let puzzleposition = document.getElementById("p1");
//         let top = parseInt(puzzleposition.style.top, 10)

//         if (top>=0 && top <= window.innerHeight){
//         puzzleposition.style.top = clicks*100 + "px";
//         }

//         else{
//         puzzleposition.style.left = clicks*100 + "px";
//         }
//     }



}
