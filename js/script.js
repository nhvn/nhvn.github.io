$(document).ready(function() {
  // Get references to DOM elements
  const body = $('body');
  const nav = $('.nav-container');
  const headName = $('.head-name');
  const socialIcons = $('.social-icons');
  const moonIcon = $('#moonIcon');
  const sunIcon = $('#sunIcon');
  const navLinks = $('.nav-container a[href^="#"]');
  const footerText = $('footer p');
  const nightModeElements = [body, nav, socialIcons];
  const nightModePrompt = document.querySelector('.night-mode-prompt');
  const currentYear = new Date().getFullYear();

  // Toggle night mode
  $('.night-mode-icon').on('click', function() {
    moonIcon.toggle();
    sunIcon.toggle();
    toggleNightMode();
  });

  function toggleNightMode() {
    nightModeElements.forEach(element => element.toggleClass("night-mode"));
    if (body.hasClass("night-mode")) {
      moonIcon.addClass("active");
      sunIcon.removeClass("active");
    } else {
      moonIcon.removeClass("active");
      sunIcon.addClass("active");
    }
    localStorage.setItem("nightMode", body.hasClass("night-mode"));
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
  footerText.text(footerText.text() + ` | ${currentYear}`);

  // Animate name
  headName.css("opacity", 0).css("font-size", "50%");
  headName.children().each(function(index) {
    const letter = $(this);
    letter.css({
      opacity: 0,
      left: '-50px'
    });
    letter.delay(150 * index).animate({
      opacity: 1,
      left: 0
    }, 5000, "swing");
    headName.delay(500).animate({ opacity: 1, "font-size": "50px" }, 1000, "swing");
  });

  // Add class to trigger CSS animation
  headName.addClass("animate");
});
