function testEmail() {
    var x="nirmalvg97@gmail.com";
    var testContent=/^[A-z 0-9 /./@]+$/;
    var a=testContent.test(x);
    document.getElementById('email').innerHTML=a;
}

function testPassword() {
    var y="123456ab";
    var testContent=/^[A-Z 0-9]+$/;
    var a=testContent.test(y);
    document.getElementById('password').innerHTML=a;
}