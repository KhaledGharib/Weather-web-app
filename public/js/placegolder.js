let i = 0;
let placeholder = "";
const txt = "Enter Address e.g. Mecca";
const speed = 120;

function type(){
    placeholder += txt.charAt(i);
    document.getElementById("search").setAttribute("placeholder",placeholder);
    i++;
    setTimeout(type,speed);
}

type();