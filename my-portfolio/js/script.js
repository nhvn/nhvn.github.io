$(document).ready(function() {
  // Get references to DOM elements
  const body = $('body');
  const nav = $('nav');
  const socialIcons = $('.social-icons');
  const nightModeToggle = $('#nightModeToggle');
  const navLinks = $('nav a[href^="#"]');
  const footerText = $('footer p');
  const nightModeElements = [body, nav, socialIcons];

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
});
