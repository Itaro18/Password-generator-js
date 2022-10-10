
let pass1=document.getElementById("password1")
let pass2=document.getElementById("password2")

const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function indexGen(){
    return Math.floor((Math.random())*characters.length)
}

function passGen(){
    let password=""
    for(let i=0;i<15;i++){
        password+=characters[indexGen()]
    }
    return password
}

function generate() {
    pass1.textContent=passGen()
    pass2.textContent=passGen();
}



function copy(){

   

    let text=document.querySelector(".pass1");

    const textarea = document.createElement("textarea");
    textarea.setAttribute("readonly", "");
    textarea.value = text.innerText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

}




