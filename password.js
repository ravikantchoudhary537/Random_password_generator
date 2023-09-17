let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghigklmnopqrstuvwxyz";
let number  = "1234567890";
let symbol = "!@#$%^&*()<>,/?~";
let mixall = uppercase + lowercase + number + symbol ;
let inputpass = document.getElementById('input');

const lengt = 12;
function generatepassword(){
    let password = "";
    password += uppercase[Math.floor(Math.random()*uppercase.length)];
    password += lowercase[Math.floor(Math.random()*lowercase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];
    
    while(lengt >password.length){
        password += mixall[Math.floor(Math.random()*mixall.length)];
    }
    inputpass.value = password;
}

function copypassword(){
    inputpass.select();
    document.execCommand("copy");
}