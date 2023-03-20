const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
var charLength = characters.length - 1;
var passwordLength = 16;
let passwordArray = [];
let password;
var password1 = document.getElementById('password-1')
var password2 = document.getElementById('password-2')

function generatePassword() {
for(let i = 0; i <= passwordLength; i++) {
    passwordArray.push(characters[randomIndex()])
    }
    password = passwordArray.join('');
    passwordArray = []
    return password;
}
function randomIndex() {
    return Math.round(Math.random() * (charLength - 0) + 0)
}
function getPassword() {
    password1.value = generatePassword()
    password2.value = generatePassword()
}

function copy(field) {
    var copyText = document.getElementById(field);
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(copyText.value);
    document.getElementById("copy-alert").style.color = "#55F991";
    
  }






