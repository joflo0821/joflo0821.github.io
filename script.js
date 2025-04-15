let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slidesContainer = document.getElementById('slides');

// Show the slides one by one
function showNextSlide() {
    slides[currentSlideIndex].style.display = 'none'; // Hide the current slide
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides; // Cycle to the next slide
    slides[currentSlideIndex].style.display = 'block'; // Show the new slide
}

// Show the livestream
function showLivestream() {
    slidesContainer.style.display = 'none'; // Hide the slides section
    document.getElementById('livestream').style.display = 'block'; // Show the livestream
}

// Cycle through slides every 5 seconds
setInterval(showNextSlide, 5000);

// Optionally, toggle livestream when desired (e.g., on a button click)
document.getElementById('livestream').addEventListener('click', showLivestream);
