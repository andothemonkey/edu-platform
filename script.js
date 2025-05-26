const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const total = images.length;
let index = 0;

function showSlide(i) {
  index = (i + total) % total;
  slides.style.transform = `translateX(-${index * 100}%)`;
}

document.getElementById('prev').addEventListener('click', () => showSlide(index - 1));
document.getElementById('next').addEventListener('click', () => showSlide(index + 1));

