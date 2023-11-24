document.addEventListener("DOMContentLoaded", function() {
    var toggler = document.querySelector(".navbar-toggler");
    var collapse = document.querySelector(".collapse");

    toggler.addEventListener("click", function() {
        if (collapse.style.display === "none" || collapse.style.display === "") {
            collapse.style.display = "block";
        } else {
            collapse.style.display = "none";
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.getElementById('prevSlide');
    const nextButton = document.getElementById('nextSlide');
    const slides = document.querySelectorAll('.testimonial-slider .slide');

    let currentSlide = 0;

    function showSlide(slideIndex) {
        slides[currentSlide].classList.remove('active');
        slides[slideIndex].classList.add('active');
        currentSlide = slideIndex;
    }

    prevButton.addEventListener('click', function() {
        const newSlideIndex = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(newSlideIndex);
    });

    nextButton.addEventListener('click', function() {
        const newSlideIndex = (currentSlide + 1) % slides.length;
        showSlide(newSlideIndex);
    });
});
