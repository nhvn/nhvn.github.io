$(document).ready(function() {
  // Get references to DOM elements
  const body = $('body');
  const nav = $('nav');
  const headName = $('.head-name');
  const socialIcons = $('.social-icons');
  const nightModeToggle = $('#nightModeToggle');
  const navLinks = $('nav a[href^="#"]');
  const footerText = $('footer p');
  const nightModeElements = [body, nav, socialIcons];
  const nightModePrompt = document.querySelector('.night-mode-prompt');

  // Night Mode
  let nightModeButton = $('<i class="fas fa-moon night-mode-icon"></i>');
  nightModeButton.click(function() {
    toggleNightMode();
  });
  body.append(nightModeButton);

  function toggleNightMode() {
    nightModeElements.forEach(element => element.toggleClass("night-mode"));
    nightModeButton.toggleClass("active");
    localStorage.setItem("nightMode", body.hasClass("night-mode"));
  }

  if (localStorage.getItem("nightMode") === "true") {
    toggleNightMode();
  }

  // Smooth scrolling
  navLinks.on('click', function(e) {
    e.preventDefault();
    const target = $($(this).attr('href'));
    const navHeight = nav.outerHeight();
    const scrollToPosition = target.offset().top - navHeight;
    $('html, body').animate({
      scrollTop: scrollToPosition
    }, 1000);
  });

  // Add current year to footer
  const currentYear = new Date().getFullYear();
  footerText.text(footerText.text() + ` | ${currentYear}`);

  // Animate name
  headName.animate({
    fontSize: "50px",
    top: "+=50px"
  }, 300, "swing", function() {
    headName.animate({
      fontSize: "40px",
      top: "-=50px"
    }, 500, "swing");
  });

// Show the prompt when the page loads
window.addEventListener('load', () => {
  nightModePrompt.classList.add('show');
});

// Set a timeout to hide the prompt after 3 seconds
setTimeout(() => {
  nightModePrompt.classList.remove('show');
}, 100000);
});

