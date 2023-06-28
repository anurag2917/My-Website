
$.fn.jQuerySimpleCounter = function( options ) {
  var settings = $.extend({
      start:  856,
      end:    100,
      easing: 'swing',
      duration: 400,
      complete: ''
  }, options );

  var thisElement = $(this);

  $({count: settings.start}).animate({count: settings.end}, {
  duration: settings.duration,
  easing: settings.easing,
  step: function() {
    var mathCount = Math.ceil(this.count);
    thisElement.text(mathCount);
  },
  complete: settings.complete
});
};


$('#number1').jQuerySimpleCounter({end: 4,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 404,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 59,duration: 2000});
$('#number4').jQuerySimpleCounter({end: 126,duration: 2500});



/* AUTHOR LINK */
 $('.about-me-img').hover(function(){
        $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
    }, function(){
        $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
    });


    // Get the collapsible button and content
var collapsibleBtn = document.querySelector('.collapsible');
var content = document.querySelector('.content');

// Add event listener to the button
collapsibleBtn.addEventListener('click', function() {
  // Toggle the visibility of the content
  content.style.display = content.style.display === 'block' ? 'none' : 'block';
});

function toggleDropdown1() {
  var dropdownContent1 = document.getElementById("dropdown-content1");
  dropdownContent1.classList.toggle("show");
}

function toggleDropdown2() {
  var dropdownContent2 = document.getElementById("dropdown-content2");
  dropdownContent2.classList.toggle("show");
}

function toggleDropdown3() {
  var dropdownContent3 = document.getElementById("dropdown-content3");
  dropdownContent3.classList.toggle("show");
}

function toggleDropdown4() {
  var dropdownContent4 = document.getElementById("dropdown-content4");
  dropdownContent4.classList.toggle("show");

}







document.addEventListener("DOMContentLoaded", function() {
  // Set the interval duration in milliseconds
  var intervalDuration = 3000;

  // Select the slider element
  var slider = document.querySelector(".slider");

  // Select the prev and next buttons
  var prevButton = slider.querySelector(".prev-button");
  var nextButton = slider.querySelector(".next-button");

  // Function to automatically slide the slider to the next item
  function autoSlide() {
    // Select the currently active radio button
    var currentRadio = slider.querySelector('input[name="toggle"]:checked');

    // Check if there is a next radio button
    var nextRadio = currentRadio.nextElementSibling;
    if (!nextRadio) {
      // If there is no next radio button, select the first radio button
      nextRadio = slider.querySelector('input[name="toggle"]:first-of-type');
    }

    // Trigger a click event on the next radio button to slide the slider
    nextRadio.click();
  }

  // Start the auto-slide animation
  var intervalId = setInterval(autoSlide, intervalDuration);

  // Pause the auto-slide animation when the mouse is over the slider
  slider.addEventListener("mouseenter", function() {
    clearInterval(intervalId);
  });

  // Resume the auto-slide animation when the mouse leaves the slider
  slider.addEventListener("mouseleave", function() {
    intervalId = setInterval(autoSlide, intervalDuration);
  });

  // Event listeners for previous and next buttons
  prevButton.addEventListener("click", function() {
    // Trigger a click event on the previous radio button to slide the slider backwards
    var currentRadio = slider.querySelector('input[name="toggle"]:checked');
    var prevRadio = currentRadio.previousElementSibling;
    if (!prevRadio) {
      prevRadio = slider.querySelector('input[name="toggle"]:last-of-type');
    }
    prevRadio.click();
  });

  nextButton.addEventListener("click", function() {
    // Trigger a click event on the next radio button to slide the slider forwards
    var currentRadio = slider.querySelector('input[name="toggle"]:checked');
    var nextRadio = currentRadio.nextElementSibling;
    if (!nextRadio) {
      nextRadio = slider.querySelector('input[name="toggle"]:first-of-type');
    }
    nextRadio.click();
  });
});





document.querySelector('#contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.elements.name.value = '';
  e.target.elements.email.value = '';
  e.target.elements.message.value = '';
});


