document.getElementById("commencer"); // Fonction d'affichage du jeu lors du clic sur le bouton COMMENCER
commencer.addEventListener("click", function(){

	commencer.style.visibility="hidden";
	var formulaireReponse = document.getElementById("formReponse");
	formulaireReponse.style.visibility = "visible";

});
var player = document.querySelector('#audioPlayer');

var soumettre = document.getElementById("soumettre");
var suivant = document.getElementById("suivant");

function valider()
{

	soumettre.className ="btn btn-info";
	soumettre.textContent = "Valider"
}