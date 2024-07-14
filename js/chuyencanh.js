let slideIndex = 0;
const slides = document.getElementsByClassName("mySlides");
const slideshowWrapper = document.querySelector(".slideshow-wrapper");
showSlides();

function showSlides() {
  slideshowWrapper.style.transform = `translateX(-${slideIndex * 100}%)`;
  slideIndex++;

  if (slideIndex === slides.length) {
    slideIndex = 0;
    slideshowWrapper.style.transform = `translateX(0%)`;
  }
  setTimeout(showSlides, 3000); // 5s vì css thầy để 5s
}
