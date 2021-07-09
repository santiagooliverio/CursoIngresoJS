/* Oliverio Santiago, Div H 
Realizar el algoritmo que pida el ancho y el largo de un 
rectángulo por prompt y que muestre el perímetro por alert. */

function mostrar()
{
	let anchoRect;
	let largoRect;
	let perimRect;

	anchoRect = prompt("Ingrese el ancho: ");
	largoRect = prompt("Ingrese el largo: ");
	perimRect = (anchoRect * 2) + (largoRect * 2);

	anchoRect = parseFloat(anchoRect);
	largoRect = parseFloat(largoRect);
	perimRect = parseFloat(perimRect);

	alert("El perímetro del rectángulo es de: " + perimRect);
}
