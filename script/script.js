//Scroll smooth crossBrowser
$(document).ready(function(){
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

        //Retire # des ancres
        // remove fragment as much as it can go without adding an entry in browser history:
        window.location.replace("#");

        // slice off the remaining '#' in HTML5:
        if (typeof window.history.replaceState == 'function') {
          history.replaceState({}, '', window.location.href.slice(0, -1));
        }
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
