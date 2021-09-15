var first,second,symbol,ans;

function disp(idval) {
    document.getElementById("result").value = document.getElementById("result").value + idval;
}

function symbolClick(idval2) {
    first = eval(document.getElementById("result").value);
    document.getElementById("result").value = "";
    symbol = idval2;
}

function solve() {
    second = eval(document.getElementById("result").value);
    if(symbol == "+") {
        ans = first + second;
    } else if(symbol == "-") {
        ans = first - second;
    } else if(symbol == "*") {
        ans = first * second;
    } else if(symbol == "/") {
        ans = first / second;
    } else {
        ans = "Invalid Operation";
    }
    document.getElementById("result").value = ans;
}

function clr() {
    document.getElementById("result").value = "";
}
