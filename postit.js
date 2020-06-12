class Postit {
	id;
    x;
    y;
    largeur;
    hauteur;
    couleurFond;
    couleurTexte;
	texte;
	
	deplacerPostit;
	
	actionsPostit;
	modifierTexte;
	changerTaille;
	

    constructor(id, x, y, largeur, hauteur, couleurFond, couleurTexte, texte) {
        this.id = id;
		this.x = x;
        this.y = y;
        this.largeur = largeur;
        this.hauteur = hauteur;
        this.couleurFond = couleurFond;
        this.couleurTexte = couleurTexte;
		this.texte = texte;
		//this.deplacerPostit = deplacerPostit;
		/*
		this.id = id;
		this.actionsPostit = actionsPostit;
		this.id = id;this.actionsPostit = actionsPostit;
		this.modifierTexte = modifierTexte;
		this.changerTaille = changerTaille;
		
		*/
    }

    AffichPostit() 
		{				
						var supprimer = document.getElementsByClassName("supprimer");
						var i;
						for (i = 0; i < supprimer.length; i++) {
						supprimer[i].onclick = function() {
						var div = this.parentElement;
						div.style.display = "none";
						}
						
						}
						 
			
		//////////////////////////////////////////////////////////////////////////////////////////////	
			
					  var suppresion = document.getElementsByTagName("div");
					  var i;
					  
					  for (i = 0; i < suppresion.length; i++) {
					  
					  var span = document.createElement("SPAN");
					  var txt = document.createTextNode("\u00D7");
					  span.className = "supprimer";
					  span.appendChild(txt);
					  suppresion[i].appendChild(span);}
					  
					  
		//let monElem = document.getElementById(this.id);  
        let monElem = document.createElement('div');
		monElem.id = this.id;
        monElem.style.width = this.largeur + 'px';
        monElem.style.height = this.hauteur + 'px';
        monElem.style.position = 'fixed';
        //monElem.style.display = 'flex';
        monElem.style.margin = '10px';
        monElem.style.left = this.x + 'px';
        monElem.style.top = this.y + 'px';
        monElem.style.backgroundColor = this.couleurFond;
		monElem.style.resize = 'both';
		monElem.style.overflow = 'auto';
		//monElem.style.cursor = 'grab';
		monElem.innerHTML = this.texte;
        document.getElementById('postit').appendChild(monElem);

    }
	
	/*deplacerPostit(newX, newY ){
		this.x = newX;
		this.y = newY;
		}
		
		function off() {
  document.getElementById("overlay").style.display = "none";
}
		*/

}


/*deplacerPostit(newx, newy )
		this.x = newx
		this.y = newy
		
		
		$( function() {
    $( "#resizable" ).resizable();
  } );
		
		
		*/
		


//#########################################################################
																		//#
						/*let elem = document.getElementById('postit');   //#
						elem.onclick = Postit1;							//#
						function Postit1() {							//#
							alert("Tu as clique sur le Postit");		//#
						}												//#
						*/												//#
																		//#
																		//#
																		//#
																		//#
																		//#
																		//#
																		//#
																		//#
																		//#
																		//#
																		//#
																		//#
																		//#
																		//#
																		//#
																		//#
																		//#
																		//#
																		//#
																		//#
																		//#																		
//#########################################################################
///////////////////////////////////////////////////////////////////////////





///////////////////////////////////////////////////////////////////////////






let monPost_it = new Postit('postit1', 10, 100, 200, 200, 'red', 'black','Salut test POSTIT 1 !!!', );

monPost_it.AffichPostit();
//monPost_it.deplacerPostit(700,500);
//monPost_it.AffichPostit();

let monPost_it2 = new Postit('postit2', 50, 200, 200, 200, 'yellow', 'black','Salut test POSTIT 2 !!!', );
monPost_it2.AffichPostit();

let monPost_it3 = new Postit('postit3', 300, 200, 200, 200,'green', 'black','Salut test POSTIT 3 !!!', );
monPost_it3.AffichPostit();

/*let monpostit = new Postit(10, 100, 200, 200, 'red', 'black');
monpostit.affiche();
monpostit.deplace(500,500);
*/