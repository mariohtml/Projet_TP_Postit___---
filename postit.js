class Postit {
	id;
    x;
    y;
    largeur;
	hauteur;
	couleurFond;
	monTitre;
	couleurTexte;
	changerTaille;
	texte;
	
	//colorText;
	
	
	
	
	/*actionsPostit;
	modifierTexte;
	changerTaille;*/
	
//function
//constructor(id, x, y, largeur, hauteur, monTitre, changerTaille, couleurFond, couleurTexte, texte)
    constructor(id, x, y, largeur, hauteur, couleurFond, couleurTexte, texte) {
        this.id = id;
		this.x = x;
        this.y = y;
        this.largeur = largeur;
        this.hauteur = hauteur;
        this.couleurFond = couleurFond;
		this.couleurTexte = couleurTexte;
		//this.changerTaille = changerTaille;
		//this.monTitre = monTitre;
		this.texte = texte;	
		
		//this.modifierTexte = modifierTexte;
		
		
		//this.colorText = colorText;
				
		//this.deplacerPostit = deplacerPostit;
				
		//this.actionsPostit = actionsPostit;
		//this.id = id;this.actionsPostit = actionsPostit;		
    }

//    AffichPostit() 
//		{				
						/*var supprimer = document.getElementsByClassName("supprimer");
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
					  */
					  
					  
		//let monElem = document.getElementById(this.id)
		//if(monElem === null)
		//{
		//	monElem = document.createElement('div');
		//	monElem.id = this.id;
		//}	
		
AffichPostit() 
{
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
		//monElem.style.cursor = 'zoom-in';
		//monElem.style.draggable = "true";
		monElem.innerHTML = this.texte;
		//monElem.innerHTML = this.monTitre;
        document.getElementById('postit').appendChild(monElem);
		//monElem.innerHTML = ' ';
					
    }
	
	/*Titre()
	{
	 let monElem = document.createElement('h3');
	 monElem.style.color = this.couleurTexte;
	 monElem.style.fontsize = this.changerTaille + 'px';
	 monElem.innerHTML = this.monTitre;
	 monElem.appendChild(monElem);
	}*/
		deplacerPostit(newx, newy)
		{
		this.x = newx
		this.y = newy
		}
		

		/*monTitle(){
		let monElem = document.createElement('h3');
					monElem.style.color = this.couleurTexte;
					monElem.style.fontsize = this.changerTaille + 'px';
					monElem.innerHTML = this.monTitre;
					monElem.appendChild(monElem);
		}*/

}
		


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

					/*var element = document.getElementById('grid-snap')
					var x = 0; var y = 0

					interact(element)
					  .draggable({
						modifiers: [
						  interact.modifiers.snap({
							targets: [
							  interact.createSnapGrid({ x: 300, y: 300 })
							],
							range: Infinity,
							relativePoints: [ { x: 0, y: 0 } ]
						  }),
						  interact.modifiers.restrict({
							restriction: element.parentNode,
							elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
							endOnly: true
						  })
						],
						inertia: true
					  })
					  .on('dragmove', function (event) {
						x += event.dx
						y += event.dy

						event.target.style.webkitTransform =
						event.target.style.transform =
							'translate(' + x + 'px, ' + y + 'px)'
					  })
*/
///////////////////////////////////////////////////////////////////////////





//let monPost_it = new Postit('postit1', 230, 20, 200, 200, 'Exo', 10, 'red', 'black', 'Salut test POSTIT 1 !!!');
let monPost_it = new Postit('postit1', 230, 20, 200, 200, 'red', 'black', 'Salut test POSTIT 1 !!!');

monPost_it.AffichPostit();
monPost_it.deplacerPostit(450,250);
monPost_it.AffichPostit();

let monPost_it2 = new Postit('postit2', 450, 20, 200, 200, 'yellow', 'black', 'Salut test POSTIT 2 !!!' );
monPost_it2.AffichPostit();

let monPost_it3 = new Postit('postit3', 670, 20, 200, 200,'green', 'black','Salut test POSTIT 3 !!!' );
monPost_it3.AffichPostit();
//monPost_it.deplacerPostit(700,500);

let monPost_it4 = new Postit('postit4', 890, 20, 200, 200,'white', 'black','Salut test POSTIT 4 !!!' );
monPost_it4.AffichPostit();
monPost_it4.deplacerPostit(500,700);
monPost_it4.AffichPostit();











//------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////
//Deplacer une div dans une div avec les boutons
var chrono;
function stopChrono()
{
        clearInterval(chrono);
}
 
function gauche()
{
        document.getElementById("grid-snap").style.left = (parseInt(document.getElementById("grid-snap").offsetLeft,10) - 10) + "px";
        chrono = setTimeout("gauche()",1000);
}
 
function droite()
{
        document.getElementById("grid-snap").style.left = (parseInt(document.getElementById("grid-snap").offsetLeft,10) + 10) + "px";
        chrono = setTimeout("droite()",1000);
}
///////////////////////////////////////////////////////////////////////







//////////////////////////////////////////////////////////////////////////////////
				//relever la position de la souris
				var monDiv = document.getElementById("postit");

				var xMousePos = 0;
				var yMousePos = 0;
				document.onmousemove = function(e)
				{
				  xMousePos = e.clientX + window.pageXOffset;
				  yMousePos = e.clientY + window.pageYOffset;
				};
				
				function update(e)
				{
				  var x = xMousePos - monDiv.offsetLeft;
				  var y = yMousePos - monDiv.offsetTop;
				 //Fenetre alert position   alert("x=" + x + 'px' + " y=" + y + 'px');
				}

				monDiv.onclick = update;

				monDiv.onmousemove = function()
				{
				  var x = xMousePos - monDiv.offsetLeft;
				  var y = yMousePos - monDiv.offsetTop;
					monDiv.style.cursor='default';
				  if(x > monDiv.offsetWidth - 4)
					monDiv.style.cursor='e-resize';
				  if(y > monDiv.offsetHeight - 4)
					monDiv.style.cursor='n-resize';
					document.getElementById("message").innerHTML = "Pos x = " + x + 'px' + "/"  +
					monDiv.offsetWidth + 'px' + ' '+ '</br>' +  "Pos y = " + y + 'px' + 
					"/" +monDiv.offsetHeight + 'px';
				}
//////////////////////////////////////////////////////////////////////////////////
 