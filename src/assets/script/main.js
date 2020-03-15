var anchors, anchor, anchor2;

//Checks for anchors
var checkAnchor = function() {

  var anchor = document.getElementById('anchor');
  var anchor2 = document.getElementById('anchor2');

  console.log('checking for anchors')
  if(anchor || anchor2) {
    anchors = true;
  }else {
    anchors = false;
  }
  console.log('There are anchors: ' + anchors);
}

//Change Menu color when scroll
var changeColor = function() {
  $(window).scroll(function () {
    if(anchors == false || anchors === undefined){
      return;
    }else if ($(this).scrollTop() > $('#anchor').position().top - 150 && $(this).scrollTop() < $('#anchor2').position().top){
        $('#mainNav').addClass('changeColor');
        return;
     }else {
       $('#mainNav').removeClass('changeColor')
     }
  });
}

//Reload SCript function
  var reload = function() {
    $.getScript('src/assets/script/aos.js', function() { //Inclue fontion AOS

      var output = document.getElementById('app');
      var links = output.getElementsByClassName('routes');

      for(var i = 0;i < links.length-1;i++){
        links[i].addEventListener("click", function() {

          console.log('changed Page');

          checkAnchor();
          aos();

          if(!anchors) {
            $('#mainNav').removeClass('changeColor')
          }

        })
      }
    });
  }

  //Alert for EN page
  var en = function () {
    'use strict';

    var lang = document.getElementById('en');

    lang.addEventListener('click', function () {
      alert('Page in construction ...');
    })
  };

var main = function() {
  'use strict';

  reload();

  checkAnchor();
  changeColor();

  en();
}
main();
