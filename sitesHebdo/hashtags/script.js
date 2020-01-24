function sort() {

  //Récupère valeur de l'input
	var a = document.getElementById('hash').value
  //Sépare tout les mots
	var arr = a.split(" ");

    // Pour chaque mot, faire marcher fonction
    arr.forEach(insideli);

    //Mélange le tableau
    arr = shuffle(arr).slice(0, 30) ;
    console.log("j'ai mélangé");
    //Affiche le tableau dans le span
    $("span").text(arr.join(" #"));

}
// ---------------------------------------------------------------

function insideli(item){
		// console.log(item);
        //met chaque item dans un li
        document.getElementById("liste").innerHTML += "<li>" +  item + "</li> <br>";
}

//Mélange le tableau
function shuffle(array) {
console.log("Je lance la fonction mélanger");
  //trouve la ongeur du tableau
  var currentIndex = array.length, temporaryValue, randomIndex;

  // Tant qu'il reste des éléments à mélanger...
  while (0 !== currentIndex) {

  // Prend un des éléments restant...
  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex -= 1;

  // Et échange le avec un des éléments restant.
  temporaryValue = array[currentIndex];
  array[currentIndex] = array[randomIndex];
  array[randomIndex] = temporaryValue;
  }
  return array;
}

function checkFieldLength(elem){
    if (elem.value.length > 300) {
        elem.value = elem.value.slice(0,300);
    }
}
