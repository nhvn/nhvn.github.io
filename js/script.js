$(document).ready(function() {
	// Get references to DOM elements
	const body = $('body');
	const overlay = $('#overlay');
	const loader = $('.loader');
	const nav = $('.nav-container');
	const headName = $('.head-name');
	const socialIcons = $('.social-icons');
	const moonIcon = $('#moonIcon');
	const sunIcon = $('#sunIcon');
	const navLinks = $('.nav-container a[href^="#"]');
	const footerText = $('footer p');
	const nightModeElements = [body, nav, socialIcons];
	const currentYear = new Date().getFullYear();
	const prompt = $('#prompt');  // get reference to the prompt
  
	// Check if night mode is enabled
	const isNightModeEnabled = localStorage.getItem("nightMode") === "true";
	if (isNightModeEnabled) {
	  toggleNightMode();
	}
  
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
	  }, 1500);
	});
	headName.delay(500).animate({
	  opacity: 1,
	  "font-size": "50px"
	}, 1000, function() {
	  // Animation complete callback
	  overlay.fadeOut(500, function() {
		// Hide the overlay after animation
		overlay.remove();
	  });
	});
  
	// Add class to trigger CSS animation
	headName.addClass("animate");
  
	// Remove the prompt after 5 seconds
	setTimeout(() => {
		prompt.fadeOut(2500);
	}, 4000);
  
	// Remove the prompt when it's clicked
	prompt.on('click', function() {
	  prompt.hide();
	});
  
  });
  