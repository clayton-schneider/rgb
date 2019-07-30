var numSqrs = 6
var colors = []
var pickedColor;

var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");
var colorDisplay = document.getElementById("colorDisplay");

init();

function init() {
    //Mode event listeners
    setModBtns();

    setSqrs();

    reset();
}

function setModBtns() {
    for(var i = 0; i < modeBtns.length; i++) {
        modeBtns[i].addEventListener("click", function() {
            modeBtns[0].classList.remove('active-mode');
            modeBtns[1].classList.remove('active-mode');
            this.classList.add('active-mode');
            this.textContent === "Easy" ? numSqrs = 3 : numSqrs = 6;
            reset(); 
        })
    } 
}

function setSqrs() {
    for (var i=0; i < squares.length; i++) {
        // Add click listeners to squares
        squares[i].addEventListener("click", function() {
            //grab color of picked square
            var clickedColor = this.style.backgroundColor;
            // compare color to picked color
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!"
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetBtn.textContent = "Play again?"
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again";
            }
        })
    }
}
function reset() {
    colors = generateColors(numSqrs);
    //pick a new color
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetBtn.textContent = "New game";
    messageDisplay.textContent = "";
    //change colors
    for (var i=0; i<squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }

    }
    h1.style.backgroundColor = "steelblue";

}



resetBtn.addEventListener("click", function() {
    reset();
})


function changeColors(color) {
    //loop through all squares
    for (var i=0; i < squares.length; i++) {
        //Change all squares to given color
        squares[i].style.backgroundColor = color;
    }

}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateColors(num) {
    //Make an array
    var arr = [];
    //Add num random colors to array
    for (var i=0; i<num; i++) {
        //Get random color and push into array
        arr.push(randomColor());
    }
    //Return that array
    return arr
}

function randomColor() {
    //generate red
    var red = Math.floor(Math.random() * 256);
    //generate green
    var green = Math.floor(Math.random() * 256);
    // generate blue
    var blue = Math.floor(Math.random() * 256);
    //add to string
    var genColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    return genColor;
}