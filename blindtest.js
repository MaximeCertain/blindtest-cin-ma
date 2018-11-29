//Récupération du premier élement du 


var musique = musiques[0];
var fin = true; //lancement de la musique


jouer(fin);

function jouer(etatJeu) 
{

	 musique = musiques[0];
	//fonction lancement musique lors du clic sur lireMusique
	
	var lireMusique = document.getElementById("lireMusique");
	lireMusique.addEventListener("click", function()
	{
		player.setAttribute("src", musique.son)
		soumettre.disabled = false;
		player.play();

});
};


//lors du clic sur soumission réponse
soumettre.addEventListener("click",function()
{
		
		var reponseMusique = document.getElementById("reponseMusique").value.toUpperCase(); //on récupère la saisie de l'utilisateur en Majuscule
		var zonerep = document.getElementById("zonerep");
		var imageReponse = document.getElementById("imageReponse");

		if (reponseMusique == musique.nom)
		{	
			document.getElementById("zonerep").getElementsByTagName("p")[1].textContent = musique.phraseReponse; 
			zonerep.style.visibility = "visible";
			imageReponse.setAttribute("src", musique.image);
			musiques.splice(0,1); //on supprime le premier élement du tableau
			soumettre.disabled=true;
			suivant.disabled=false;
		}
		else
		{
			alert("Non, essaie encore :)");
		}
	
})


suivant.addEventListener("click", function()
{	
if(musiques.length != 0)
	{
		
	zonerep.style.visibility = "hidden";
	soumettre.disabled =true;
	jouer(fin);
	suivant.disabled = true;
}
else
{
	var formulaireReponse = document.getElementById("formReponse");
	formulaireReponse.style.visibility ="hidden";
	document.getElementById("zonerep").style.visibility = "hidden";
	player.setAttribute("src", "musiques/bryan.mp3");
	player.play();
	var imgVictoire = document.createElement("img");
	imgVictoire.setAttribute("src", "img/bryan.png");
	document.getElementById("victory").appendChild(imgVictoire);

}

})




