function my_photo(){
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    var img=new Image();
    img.onload = function(){
        ctx.drawImage(img,0,0);
    };
    var part1="img/w";
    var part2="eb.p";
    var part3="ng";
    img.src=part1+part2+part3;
}

function my_email(){
    var email1="dpzaba"
    var email2="@"
    var email3="gmail."+"com"
    var contact=document.getElementById("contact");
    var fullEmail = email1+email2+email3;

    contact.href="mailto:" + fullEmail;
    contact.innerHTML="Email: " + fullEmail;
}

function start(){
    my_email();
    my_photo();
}

if (window.addEventListener){
    window.addEventListener("load", start, false);
} else if (window.attachEvent){
    window.attachEvent("onload", start);
} else {
    window.onload=start;
}