let current = 0;
const images = document.querySelectorAll('.carousel-image');
const total = images.length;

document.querySelector('.next').addEventListener('click', () => {
  images[current].classList.remove('active');
  current = (current + 1) % total;
  images[current].classList.add('active');
});

document.querySelector('.prev').addEventListener('click', () => {
  images[current].classList.remove('active');
  current = (current - 1 + total) % total;
  images[current].classList.add('active');
});
