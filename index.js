const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;


document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
    }
}

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    }
    else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}



function redirectTo(url) {
    window.location.href = url;
}
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#Login').onclick = function () {
        redirectTo('login.html');
    };
   
    document.querySelector('#Admin').onclick = function () {
        redirectTo('mv.html');
    };
}); 