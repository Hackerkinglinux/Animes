// scripts.js

const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

let currentIndex = 0;
const intervalTime = 5000; // Intervalo de tiempo en milisegundos (5 segundos)
let slideInterval;

// Función para iniciar el carrusel
function startCarousel() {
    slideInterval = setInterval(() => {
        moveNext();
    }, intervalTime);
}

// Función para avanzar al siguiente elemento del carrusel
function moveNext() {
    currentIndex++;
    if (currentIndex >= carouselItems.length) {
        currentIndex = 0;
    }
    updateCarousel();
}

// Función para retroceder al elemento anterior del carrusel
function movePrev() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = carouselItems.length - 1;
    }
    updateCarousel();
}

// Función para actualizar la posición del carrusel
function updateCarousel() {
    const itemWidth = carouselItems[currentIndex].clientWidth;
    carousel.style.transform = `translateX(${-itemWidth * currentIndex}px)`;
}

// Event listeners para los botones de navegación
prevButton.addEventListener('click', () => {
    movePrev();
    clearInterval(slideInterval);
    startCarousel();
});

nextButton.addEventListener('click', () => {
    moveNext();
    clearInterval(slideInterval);
    startCarousel();
});

// Iniciar el carrusel al cargar la página
startCarousel();
