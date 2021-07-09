/* Oliverio Santiago, Div H
Pedir por prompt el precio y el porcentaje de descuento, 
mostrar el precio final con descuento por id. */

function mostrar()
{
	let precio;
	let descuento;
	let precioDesc;

	precio = prompt("Ingrese el precio: ");
	descuento = prompt("Ingrese el porcentaje de descuento: ");
	precioDesc = precio - (precio * descuento/100);

	precio = parseInt(precio);
	descuento = parseInt(descuento);
	precioDesc = parseInt(precioDesc);

	elPrecioFinal.value = precioDesc;
}

// elPrecioFinal