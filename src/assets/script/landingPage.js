
var overBlock = document.getElementById('color_block');
var button = document.getElementById('button');

var overBlock_mobile = document.getElementById('color_block_mobile');

var screenW = window.innerWidth;

var newUrl = '/Home';

var landing = document.getElementById('headTitle');
var page;

if(typeof(landing) != 'undefined' && landing != null) {
  page = true;
  var mainNav = document.getElementById('mainNav').classList.add('off');
}else {
  console.log("Not on landing Page");
}

if(page == true) {
  var main = function() {

    animate();
    moveUrl();

  }
  main();
}

function animate() {
  button.addEventListener('mouseenter', function(event) { //Bouton quand on passe la souris
    if(overBlock.classList.contains('retract')) {
      overBlock.classList.add('bigger'); // Ajoute et retire les calsses css
      overBlock.classList.remove('retract');
    }else {
      overBlock.classList.add('bigger');
    }
  });
  button.addEventListener('mouseout', function(event) { //Bouton quand on enlêve la souris
    if(overBlock.classList.contains('bigger')) {
      overBlock.classList.add('retract'); // Ajoute et retire les calsses css
      overBlock.classList.remove('bigger');
    }else {
      overBlock.classList.add('retract');
    }
  });

}

function moveUrl() {
    button.addEventListener('click', function(event) {

      if(screenW < 500) {
        overBlock_mobile.classList.add('bigger_mobile');
        setTimeout(() => { document.location.href = newUrl; }, 1000);
        return;
      }else {
        overBlock.classList.add('fill');
        setTimeout(() => { document.location.href = newUrl; }, 1000);
      }

  });
}
