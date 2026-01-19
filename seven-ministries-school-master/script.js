

document.addEventListener("DOMContentLoaded", () => {

  const slides = document.querySelectorAll('.slide');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');

  if (!slides.length || !nextBtn || !prevBtn) return;

  let currentSlide = 0;
  let autoSlide = setInterval(nextSlide, 5000);

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');

    // Restart text animation
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      heroContent.style.animation = 'none';
      heroContent.offsetHeight;
      heroContent.style.animation = null;
    }
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoSlide();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoSlide();
  });

  function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 5000);
  }

    /* =========================
   FOOTER SCROLL ANIMATION
    ========================= */
  document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    reveals.forEach(el => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
 });

 /* =========================
   HAMBURGER TOGGLE
   ========================= */
   const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

   hamburger.addEventListener("click", () => {
   navMenu.classList.toggle("active");
   });

  



});
