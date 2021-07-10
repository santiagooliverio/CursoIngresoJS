/*Oliverio Santiago, Div H	
Para el departamento de Construcción:
A.	mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.*/

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
	let perimetroCirc;
	const PI = 3.14;

	radioCirc = txtIdRadio.value;
	perimetroCirc = 2 * PI * radioCirc;

	radioCirc = parseFloat(radioCirc);

	alert("Se necesitan " + (perimetroCirc * 3) + " metros de alambre.");
}

function Materiales () 
{
	let largoRect;
	let anchoRect;
	let areaRect;
	let cemento;
	let cal;
    
    largoRect = txtIdLargo.value;
	anchoRect = txtIdAncho.value;
    
    largoRect = parseFloat(largoRect);
	anchoRect = parseFloat(anchoRect);
	cemento = parseInt(cemento);
	cal = parseInt(cal);

	areaRect = largoRect * anchoRect;
	cemento = areaRect * 2;
	cal = areaRect * 3;

	alert("Para un contrapiso de " + areaRect + " metros cuadrados se necesitan " + cemento + " de semento y " + cal + " de cal.");
}

// txtIdLargo
// txtIdAncho
// txtIdRadio
