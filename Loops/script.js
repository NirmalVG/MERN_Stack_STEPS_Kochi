//for loop

let colors = ["red", "blue", "yellow", "green", "violet", "orange"];

function forLoop() {
    for(let i = 0; i < 6; i++) {
        document.getElementById("demo1").innerHTML += colors[i] + "<br>";
    }  
}

//while loop

var table = 4;
var i = 1;

function whileLoop() {
    while (i <= 10) {
        document.getElementById("demo2").innerHTML += table + " x " + i + " = " + (table*i) + "<br>";
        i++;
    }
}

//do while loop

var i = 1;

function doWhileLoop() {
    do {
        var num = document.getElementById("demo3").value;
        document.getElementById("demo4").innerHTML += num + "/" + i + " = " + (num/i) + "<br>";
        i++;
    }
    while (i <= 10);
}