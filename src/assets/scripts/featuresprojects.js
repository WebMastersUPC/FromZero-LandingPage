'use strict'

var carouselData = [
    {tittle: "Cerveceria de CoLima", image: "./assets/images/Featured-project-1.png"},
    {tittle: "Restaurante DPaso", image: "./assets/images/Featured-project-2.png"},
    {tittle: "We Transfer", image: "./assets/images/Featured-project-3.png"}
]

var currentIndex = 0;

function updateCarousel(){
    document.getElementById("carousel-tittle").innerText = carouselData[currentIndex].tittle;
    document.getElementById("carousel-img").src = carouselData[currentIndex].image;
}

function nextImage() {
    var imageElement = document.getElementById("carousel-img");
    imageElement.classList.add("fade-out");

    setTimeout(function() {
        currentIndex = (currentIndex + 1) % carouselData.length;
        updateCarousel();
        imageElement.classList.remove("fade-out");
    }, 500);
}

function previousImage() {
    var imageElement = document.getElementById("carousel-img");
    imageElement.classList.add("fade-out");

    setTimeout(function() {
        currentIndex = (currentIndex - 1 + carouselData.length) % carouselData.length;
        updateCarousel();
        imageElement.classList.remove("fade-out");
    }, 500);
}

document.addEventListener('DOMContentLoaded', (event) => {
    updateCarousel();
});

const bloque    = document.querySelectorAll('.bloque')
const h2        = document.querySelectorAll('.h2')
    
h2.forEach( ( cadaH2 , i )=>{
    h2[i].addEventListener('click', ()=>{
        bloque.forEach( ( cadaBloque , i )=>{
            bloque[i].classList.remove('activo')
        })
        bloque[i].classList.add('activo')
    })
})

const textElement = document.querySelector('.text');
const textToWrite = textElement.textContent;
let index = 0;
let isDeleting = false;

function writeDeleteText() {
    textElement.textContent = textToWrite.slice(0, index);

    if (index === textToWrite.length) {
        isDeleting = true;
    } else if (index === 0) {
        isDeleting = false;
    }

    index = isDeleting ? index - 1 : index + 1;

    setTimeout(writeDeleteText, isDeleting ? 100 : 200);
}

writeDeleteText();