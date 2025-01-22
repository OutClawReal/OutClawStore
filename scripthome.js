// Highlight the current section in the navbar as you scroll
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar li a');

  const highlightSection = () => {
    let scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 60; // Adjust for header height
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href').substring(1) === section.id) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightSection);
});

document.getElementById('subscriptionForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;

  const response = await fetch('http://localhost:3000/subscribe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });

  const data = await response.json();
  const message = data.message || 'An error occurred';
  document.getElementById('responseMessage').innerText = message;
});

// Add hover effects to the portrait image
const portrait = document.querySelector('.portrait');
portrait.addEventListener('mouseenter', () => {
  portrait.style.transform = 'scale(1.1)';
  portrait.style.transition = 'transform 0.3s ease-in-out';
});

portrait.addEventListener('mouseleave', () => {
  portrait.style.transform = 'scale(1)';
});
