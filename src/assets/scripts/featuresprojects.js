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