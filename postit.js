class Postit {
    x;
    y;
    largeur;
    hauteur;
    couleurFond;
    couleurTexte;

	deplacerPostit;
	texte;
	actionsPostit;
	modifierTexte;
	changerTaille;
	

    constructor(x, y, largeur, hauteur, couleurFond, couleurTexte, texte) {
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
					  var suppresion = document.getElementsByTagName("div");
					  var i;
					  for (i = 1; i < suppresion.length; i++) {
					  var span = document.createElement("SPAN");
					  var txt = document.createTextNode("\u00D7:Supp");
					  span.className = "supprimer";
					  span.appendChild(txt);
					  suppresion[i].appendChild(span);}
		  
        let monElem = document.createElement('div');
        monElem.style.width = this.largeur + 'px';
        monElem.style.height = this.hauteur + 'px';
        monElem.style.position = 'fixed';
        //monElem.style.display = 'flex';
        monElem.style.margin = '10px';
        monElem.style.left = this.x + 'px';
        monElem.style.top = this.y + 'px';
        monElem.style.backgroundColor = this.couleurFond;
		monElem.innerHTML = this.texte;
        document.getElementById('postit').appendChild(monElem);

    }
	
	/*deplacerPostit(newX, newY ){
		this.x = newX;
		this.y = newY;
		}*/

}


/*deplacerPostit(newX, newY )
		this.x = newX
		this.y = newY*/
		


//#########################################################################
																		//#
						let elem = document.getElementById('postit');   //#
						elem.onclick = Postit1;							//#
						function Postit1() {							//#
							alert("Tu as clique sur le Postit");		//#
						}												//#
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
																		//#																		
//#########################################################################


let monPost_it = new Postit(10, 100, 200, 200, 'red', 'black','Salut test POSTIT 1 !!!');

monPost_it.AffichPostit();
//monPost_it.deplacerPostit(700,500);
monPost_it.AffichPostit();

let monPost_it2 = new Postit(50, 200, 200, 200, 'yellow', 'black','Salut test POSTIT 2 !!!');
monPost_it2.AffichPostit();

let monPost_it3 = new Postit(300, 200, 200, 200,'green', 'black','Salut test POSTIT 3 !!!');
monPost_it3.AffichPostit();

/*let monpostit = new Postit(10, 100, 200, 200, 'red', 'black');
monpostit.affiche();
monpostit.deplace(500,500);
*/