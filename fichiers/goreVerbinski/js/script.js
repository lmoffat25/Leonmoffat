
//Anime la flèche remonte
$(document).ready(function() {
    $('#remonte').on('click', function() { // Au clic sur un élément
        document.querySelector('body').className = "";

        var page = $(this).attr('href'); // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go

        $('body').addClass("snappy");
        return false;

    });
});

