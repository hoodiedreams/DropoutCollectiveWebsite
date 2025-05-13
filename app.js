
  // Smooth scroll
  document.querySelectorAll('.members-container a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
              target.scrollIntoView({
                  behavior: 'smooth'
              });
          }
      });
  });

// detect scroll
  window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    const fadeStart = 100; // start fading out at 100px scroll
    const fadeEnd = 500; // completely faded out at 500px scroll

    const opacity = 1 - Math.min(1, (scrollPosition - fadeStart) / (fadeEnd - fadeStart));

    document.querySelector('.hero-video').style.opacity = opacity;
  });





// Image Slider Logic
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

if (prev && next && slides.length > 0) {
  next.addEventListener('click', nextSlide);
  prev.addEventListener('click', prevSlide);
  showSlide(currentSlide);
}

// Newsletter form thank-you message logic
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#newsletter form');
  const newsletterThankYouMsg = document.getElementById('newsletterThankYouMsg');
  const iframe = document.getElementById('hidden_iframe');

  if (form && newsletterThankYouMsg && iframe) {
    form.addEventListener('submit', () => {
      setTimeout(() => {
        form.reset();
        newsletterThankYouMsg.style.display = 'block';
      }, 500);
    });
  }
});

// Contact form thank-you message logic (Formspree)
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('.contact-form');
  const contactThankYou = document.getElementById('contactThankYouMsg');

  if (contactForm && contactThankYou) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = new FormData(contactForm);
      const response = await fetch(contactForm.action, {
        method: contactForm.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        contactForm.reset();
        contactThankYou.style.display = "block";
      } else {
        alert("Something went wrong. Please try again.");
      }
    });
  }
});