const colors = ["red", "blue", "yellow", "green"];

//toString() method

function toStringMethod() {
    document.getElementById("demo1").innerHTML = colors.toString();
}

//join() method

function joinMethod() {
    document.getElementById("demo2").innerHTML = colors.join(" ");
}

//pop() method

function popMethod() {
    colors.pop();
    document.getElementById("demo3").innerHTML = colors;
}

//push() method

function pushMethod() {
    colors.push("orange");
    document.getElementById("demo4").innerHTML = colors;
}

//shift() method

function shiftMethod() {
    colors.shift();
    document.getElementById("demo5").innerHTML = colors;
}

//unshift() method

function unshiftMethod() {
    colors.unshift("violet");
    document.getElementById("demo6").innerHTML = colors;
}

//length method

function lengthMethod() {
    document.getElementById("demo7").innerHTML = colors.length;
}

//delete method

function deleteMethod() {
    delete colors[0];
    document.getElementById("demo8").innerHTML = colors;
}

//splice() to add method

function splicingToAddMethod() {
    colors.splice(2,0,"brown","black")
    document.getElementById("demo9").innerHTML = colors;
}

//splice() to remove method

function splicingToRemoveMethod() {
    colors.splice(0,1)
    document.getElementById("demo10").innerHTML = colors;
}

//slice() method

function slicingMethod() {
    const shade = colors.slice(1,3);
    document.getElementById("demo11").innerHTML = shade;
}

const myGirlFriends = ["Aiswarya", "Nithila"];
const myBoyFriends = ["Abhiram", "Gayal", "Vishal"];

//concat() method

function concatMethod() {
    const myFriends= myGirlFriends.concat(myBoyFriends);
    document.getElementById("demo12").innerHTML = myFriends;
}