/*  Oliverio Santiago, Div H
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precio1;
	let precio2;
	let precio3;
	let sumaPrecios;

	precio1 = txtIdPrecioUno.value;
	precio2 = txtIdPrecioDos.value;
    precio3 = txtIdPrecioTres.value;

	precio1 = parseFloat(precio1);
	precio2 = parseFloat(precio2);
	precio3 = parseFloat(precio3);
	sumaPrecios = parseFloat(sumaPrecios);

	sumaPrecios = precio1 + precio2 + precio3;

	alert("La suma de los precios es de: " + sumaPrecios);
}

function Promedio () 
{
	let precio1;
	let precio2;
	let precio3;
	let promedioPrecios;

	precio1 = txtIdPrecioUno.value;
	precio2 = txtIdPrecioDos.value;
    precio3 = txtIdPrecioTres.value;

	precio1 = parseFloat(precio1);
	precio2 = parseFloat(precio2);
	precio3 = parseFloat(precio3);
	promedioPrecios = parseFloat(promedioPrecios);

    promedioPrecios = (precio1 + precio2 + precio3) / 3;

	alert("El promedio de los precios es de: " + promedioPrecios);
}

function PrecioFinal () 
{
	let precio1;
	let precio2;
	let precio3;
	let finalPrecio;
	let precioIva;

	precio1 = txtIdPrecioUno.value;
	precio2 = txtIdPrecioDos.value;
    precio3 = txtIdPrecioTres.value;

	precio1 = parseFloat(precio1);
	precio2 = parseFloat(precio2);
	precio3 = parseFloat(precio3);
	finalPrecio = parseFloat(finalPrecio);
	precioIva = parseFloat(precioIva);

	finalPrecio = precio1 + precio2 + precio3;
	precioIva = finalPrecio + (finalPrecio * 0.21);

	alert("La suma de los precios más IVA es de: " + precioIva);
}

// txtIdPrecioUno
// txtIdPrecioDos
// txtIdPrecioTres