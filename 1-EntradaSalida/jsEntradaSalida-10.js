/* Oliverio Santiago, Div H
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;				 
	importe = txtIdImporte.value;	
	importe = parseInt(importe);

	let resultado;
	resultado = importe - (importe * 0.25);

	txtIdResultado.value = resultado;
}

// txtIdImporte
// txtIdResultado