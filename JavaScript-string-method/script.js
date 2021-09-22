const colors = "red, blue, yellow, green";

//String length

function stringLength() {
    document.getElementById("demo1").innerHTML = colors.length;
}

//slice() method

function sliceMethod() {
    document.getElementById("demo2").innerHTML = colors.slice(5,17);
}

//substring() method

function substringMethod() {
    document.getElementById("demo3").innerHTML = colors.substring(5,17);
}

//substr() method

function substrMethod() {
    document.getElementById("demo4").innerHTML = colors.substr(5);
}

//replace method

function replaceMethod() {
    let text = document.getElementById("demo5").innerHTML;
    document.getElementById("demo5").innerHTML = text.replace("Coursera","freeCodeCamp");
}

//toUpperCase() method

function toUpperCaseMethod() {
    let content = document.getElementById("demo6").innerHTML;
    document.getElementById("demo6").innerHTML = content.toUpperCase();
}

//toLowerCase() method

function toLowerCaseMethod() {
    let content2 = document.getElementById("demo7").innerHTML;
    document.getElementById("demo7").innerHTML = content2.toLowerCase();
}

//concat() method

function concatMethod() {
    let text1 = "Hello";
    let text2 = "World";
    document.getElementById("demo8").innerHTML = text1.concat(" ", text2);
}

//trim() method

function trimMethod() {
    let text = "     Hello World!     ";
    document.getElementById("demo9").innerHTML = text.trim();
}