import "./master.css";
import "../node_modules/@fortawesome/fontawesome-free/js/all.min";

let dotOne = document.getElementById("one");
let dotTwo = document.getElementById("two");

let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("myslides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

dotOne.addEventListener("click", () => showSlides(slideIndex = 1));
dotTwo.addEventListener("click", () => showSlides(slideIndex = 2));
