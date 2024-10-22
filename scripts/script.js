const testimonials = document.querySelectorAll('.testimonial'); // todos los testimonios
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.toggle('active', i === index); 
    });
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length; 
    showTestimonial(currentIndex); 
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length; 
    showTestimonial(currentIndex); 
});

showTestimonial(currentIndex);
