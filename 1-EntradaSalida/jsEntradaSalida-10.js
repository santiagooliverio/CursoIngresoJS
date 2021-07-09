/* Oliverio Santiago, Div H | Ej 10 BIS
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del XX %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;				 
	importe = txtIdImporte.value;	
	importe = parseFloat(importe);

	let descuento;
	descuento = parseInt(descuento);
	descuento = prompt("Ingrese su descuento: ");

	let resultado;
	resultado = parseFloat(resultado);
	resultado = importe - (importe * (descuento/100));

	txtIdResultado.value = resultado;
}

// txtIdImporte
// txtIdResultado