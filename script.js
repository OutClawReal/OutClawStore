// JavaScript for the carousel with autoplay and interactivity

// DOM Elements
const images = document.querySelectorAll('.carousel-images img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const caption = document.getElementById('carouselCaption');

let currentIndex = 0;
let autoplayInterval;

// Function to show the current image
function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

// Show the first image initially
showImage(currentIndex);

// Click event for "Next" button
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

// Click event for "Previous" button
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

// Hover event to show image captions
images.forEach((img, i) => {
  img.addEventListener('mouseenter', () => {
    caption.textContent = `This is Image ${i + 1}`;
  });
  img.addEventListener('mouseleave', () => {
    caption.textContent = 'Hover over an image to see its caption.';
  });
});

// Keypress events for navigation
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  } else if (event.key === 'ArrowLeft') {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }
});

// Autoplay feature
function startAutoplay() {
  autoplayInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }, 6000); // 6 seconds
}

function stopAutoplay() {
  clearInterval(autoplayInterval);
}

// Start autoplay on page load
startAutoplay();

// Stop autoplay on hover and resume when hover ends
document.querySelector('.carousel-container').addEventListener('mouseenter', stopAutoplay);
document.querySelector('.carousel-container').addEventListener('mouseleave', startAutoplay);
