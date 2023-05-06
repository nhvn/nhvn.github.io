document.addEventListener("DOMContentLoaded", function() {
    // Get references to DOM elements
    const body = document.body;
    const nightModeToggle = document.getElementById("nightModeToggle");
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    const footerText = document.querySelector('footer p');
  
    // Night mode toggle
    nightModeToggle.addEventListener("click", function() {
      body.classList.toggle("night-mode");
      nightModeToggle.classList.toggle("active");
    });
  
    // Smooth scrolling
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const navHeight = document.querySelector('nav').offsetHeight;
        const scrollToPosition = target.offsetTop - navHeight;
        window.scrollTo({
          top: scrollToPosition,
          behavior: 'smooth'
        });
      });
    });
  
    // Add current year to footer
    const currentYear = new Date().getFullYear();
    footerText.textContent += ` | ${currentYear}`;
  });
  