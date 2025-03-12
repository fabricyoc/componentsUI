let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll(".carousel img");
    const totalSlides = slides.length;
    currentIndex = (currentIndex + step + totalSlides) % totalSlides;
    document.querySelector(".carousel").style.transform = `translateX(${-currentIndex * 100}%)`;
}

// Mudança automática de slides a cada 3 segundos
setInterval(() => moveSlide(1), 3000);