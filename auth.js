function checkLoginMenu(){

let user = localStorage.getItem("loginUser")

if(user){

let guestMenu = document.getElementById("guestMenu")
let userMenu = document.getElementById("userMenu")

if(guestMenu) guestMenu.style.display="none"
if(userMenu) userMenu.style.display="block"

}

}

function logout(){

localStorage.removeItem("loginUser")

window.location="index.html"

}

checkLoginMenu()