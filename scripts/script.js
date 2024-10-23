document.addEventListener("DOMContentLoaded", () => {
    const prevButton = document.querySelector(".button-prev");
    const nextButton = document.querySelector(".button-next");
    const testimonials = document.querySelectorAll(".testimonial-item");
    let currentIndex = 0;
  
    function showTestimonial(index) {
      testimonials.forEach((testimonial, i) => {
        testimonial.classList.toggle("active", i === index);
      });
    }
  
    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      showTestimonial(currentIndex);
    });
  
    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(currentIndex);
    });
  
    showTestimonial(currentIndex);
  });
  
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');
  });
  