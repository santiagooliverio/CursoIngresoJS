/*2.	Para el departamento de Construcción:
A.	mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	let largoRect;
	let anchoRect;
	let perimetroRect;

	largoRect = txtIdLargo.value;
	anchoRect = txtIdAncho.value;
	perimetroRect = (largoRect * 2) + (anchoRect * 2);

	largoRect = parseFloat(largoRect);
	anchoRect = parseFloat(anchoRect);
	perimetroRect = parseFloat(perimetroRect);

    alert("Se necesitan " + (perimetroRect * 3) + " metros de alambre.")
}

function Circulo () 
{
	let radioCirc;
	let diametroCirc;
	let perimetroCirc;

	radioCirc = txtIdRadio.value;
	diametroCirc = radioCirc * 2;
	perimetroCirc = 3.14 * diametroCirc;

	radioCirc = parseFloat(radioCirc);

	alert("Se necesitan " + (perimetroCirc * 3) + " metros de alambre.");
}

function Materiales () 
{
	
}

// txtIdLargo
// txtIdAncho
// txtIdRadio
