// Parallax header
$(window).scroll(function(){
  var scrollvar = $(this).scrollTop();

  // Parallax sur le titre
  $("#title").css("transform",'translate(0px,'+scrollvar/1.75+'%)');

//     // Ancres qui permettent de de déclancher le fixed
    var $anchor = $(".scroller-anchor");
    var $anchorB = $(".scroller-anchorB");
//     // Les images qui vont se fixer
    var $scroller = $('.scroller');
    var $off = $('.off'); //L'image qui commence opacité 0
//
//
    var scrollTop = $(this).scrollTop();
    var $hasClass = $('.scroller').hasClass("off"); //Vérifie si l'image a classe off
//
//
//
// // FIXED---------------------------------------------------------------
//
var st = $(window).scrollTop();
var at = $anchor.offset().top;
var ab = $anchor.offset().top;
var fixed = false;

    // Fixe Scroller en haut de la page
    var stick = function() {
        // Si position fenetre supérieur à ancre
        if(st > at) {
          var fixed = true;
            $scroller.css({
              // Fixer l'image
                position: "fixed",
                top: "0px"
            });
        }else { //Sinon mettre scroller en absolute et visible
          $scroller.css({
            position: "absolute",
            top: ""
          });
        };

    };



// OPACITE------------------------------------------------------

    // Baisser l'opacité de Scroller au scroll
    if(fixed) {
      $scroller.css({
        opacity : function() {
          var elementHeight = $(this).height(),
          opacity = ((elementHeight - scrollTop) / elementHeight);
          return opacity;
        }
      });
    }

    // Augmente opacité de Scroller si il a classe "off"
      // Si pos fenetre sup à ancre2
      if(st> at && $hasClass) {
          $off.css ({// %Trouver pour ne pas avoir à mettre off mais scroller%
            //Augmenter opacité
            opacity : function() {
              var elementHeight = $(this).height();
              return 1 - (elementHeight*3.7 - scrollTop) / elementHeight;// %Trouver une constante pour retirer 3.7%
                      //   petitN         -grandN
            }
          });
          $scroller.css({
            ocpacity:0
          })
      }
    $(window).scroll(stick);
    stick();
    // $(window).scroll(unlock);
    // unlock();

});

window.onload = function() {
	lax.setup() // init

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)
}
