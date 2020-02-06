//Scroll smooth crossBrowser
$(document).ready(function(){
  $('#on').on("click", function() {
    $('.select').removeClass('bold');
    $('#on').addClass('bold');

    $('.project').removeClass('off');
    $('.project').addClass('on');
  });

  $('#web').on("click", function(){
    $('.select').removeClass('bold');
    $('#web').addClass('bold');

    $('.project').addClass('off');
    $('.web').removeClass('off');
    $('.web').addClass('on');
  });

  $('#com').on("click", function() {
    $('.select').removeClass('bold');
    $('#com').addClass('bold');

    $('.project').addClass('off');
    $('.com').removeClass('off');
    $('.com').addClass('on');
  });

  $('#other').on("click", function() {
    $('.select').removeClass('bold');
    $('#other').addClass('bold');

    $('.project').addClass('off');
    $('.oth').removeClass('off');
    $('.oth').addClass('on');
  });



  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      var affiche = " ";

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;

      });
    } // End if
  });

});

$

//Animation au scroll
  AOS.init({
    delay: 200, // values from 0 to 3000, with step 50ms
  duration: 1600, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  });


//Parallax
  // $('.bgsites').parallax({imageSrc: './media/parallax.jpg'});
