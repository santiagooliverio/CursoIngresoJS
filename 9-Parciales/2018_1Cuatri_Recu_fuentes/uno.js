/* Oliverio Santiago, Div H 
Realizar el algoritmo que pida el ancho y el largo de un rectángulo 
por prompt y que muestre el perímetro por alert.*/
function mostrar()
{
	let ancho;
	let largo;
	let perimetro;

	ancho = prompt("Ingrese el ancho: ");
	largo = prompt("Ingrese el largo: ");
	perimetro = (ancho + largo) * 2;

	ancho = parseInt(ancho);
	largo = parseInt(largo);
	perimetro = parseInt(perimetro);

	alert(perimetro);
}
