let images=[]
let index=0

function loadSlider(imgArray){

images = imgArray
index = 0

showSlide()

}

function showSlide(){

document.getElementById("slideImage").src = images[index]

}

function nextSlide(){

index++

if(index >= images.length){
index = 0
}

showSlide()

}

function prevSlide(){

index--

if(index < 0){
index = images.length-1
}

showSlide()

}