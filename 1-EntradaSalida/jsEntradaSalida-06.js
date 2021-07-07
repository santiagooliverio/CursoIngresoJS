/* Oliverio Santiago, Div H
Debemos lograr tomar Los numeros por ID.value , transformarlos a enteros "parseInt()" y Sumarlos.
mostrar el resulto por medio de "alert()"	*/
function sumar()
{	
	let num_1 = txtIdNumeroUno.value;
	let num_2 = txtIdNumeroDos.value;

	num_1 = parseInt(num_1);
	num_2 = parseInt(num_2);

	let suma;

	suma = num_1 + num_2; 

	alert("La suma es " + suma);

}

// txtIdNumeroUno 
// txtIdNumeroDos