function addition() {
    var num1=eval(document.getElementById('num1').value);
    var num2=eval(document.getElementById('num2').value);
    var sum=num1+num2;
    document.getElementById('sum').value=sum;
}

function subtraction() {
    var num3=eval(document.getElementById('num3').value);
    var num4=eval(document.getElementById('num4').value);
    var sum=num3-num4;
    document.getElementById('subtract').value=sum;
}

function multiplication() {
    var num5=eval(document.getElementById('num5').value);
    var num6=eval(document.getElementById('num6').value);
    var sum=num5*num6;
    document.getElementById('multiply').value=sum;
}

function division() {
    var num7=eval(document.getElementById('num7').value);
    var num8=eval(document.getElementById('num8').value);
    var sum=num7/num8;
    document.getElementById('divide').value=sum;
}