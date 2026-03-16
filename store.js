function buyAccount(code){

let user = localStorage.getItem("loginUser")

if(!user){

alert("Silakan login atau daftar terlebih dahulu untuk membeli akun.")
return

}

let message = `Halo admin Hubble Store
Saya ingin membeli akun.

Kode Unit: ${code}`

let url = "https://wa.me/6281229314973?text=" + encodeURIComponent(message)

window.open(url)

}

let search = document.getElementById("searchBox")

if(search){

search.addEventListener("keyup", function(){

let keyword = this.value.toUpperCase()

let cards = document.querySelectorAll(".admin-card")

cards.forEach(card=>{

let code = card.dataset.code

if(code.includes(keyword)){
card.style.display="block"
}else{
card.style.display="none"
}

})

})

}

function resetSearch(){

let cards = document.querySelectorAll(".admin-card")

cards.forEach(card=>{
card.style.display="block"
})

document.getElementById("searchBox").value=""

}

function markSold(btn){

let card = btn.parentElement

card.querySelector("p").innerText="Status: SOLD"

btn.disabled=true

}