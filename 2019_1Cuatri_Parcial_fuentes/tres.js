// Oliverio Santiago, Div H

function mostrar()
{
	let precio;
	precio = prompt("Ingrese el precio: ");
	precio = parseFloat(precio);

	let descuento;
	descuento = prompt("Ingrese el porcentaje de descuento: ");
	descuento = parseInt(descuento);

	let pFinal;
	pFinal = parseFloat(pFinal);
	pFinal = precio - (precio * (descuento/100));

	document.getElementById("elPrecioFinal").value = pFinal;

}

// elPrecioFinal