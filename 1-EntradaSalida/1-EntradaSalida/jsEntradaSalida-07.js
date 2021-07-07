/* Oliverio Santiago, Div H
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let num_1 = txtIdNumeroUno.value; 
	let num_2 = txtIdNumeroDos.value;   

	num_1 = parseInt(num_1);
	num_2 = parseInt(num_2);

	let suma;

	suma = num_1 + num_2;

    alert("La suma es: " + suma);	
}

function restar()
{
    let num_1 = txtIdNumeroUno.value; 
	let num_2 = txtIdNumeroDos.value;   

	num_1 = parseInt(num_1);
	num_2 = parseInt(num_2);

	let resta;

	resta = num_1 - num_2;

	alert("La resta es: " + resta);	
}

function multiplicar()
{ 
	let num_1 = txtIdNumeroUno.value; 
	let num_2 = txtIdNumeroDos.value;   

	num_1 = parseInt(num_1);
	num_2 = parseInt(num_2);

	let mult;

	mult = num_1 * num_2;

	alert("La multiplicación es: " + mult);	
}

function dividir()
{
	let num_1 = txtIdNumeroUno.value; 
	let num_2 = txtIdNumeroDos.value;   

	num_1 = parseInt(num_1);
	num_2 = parseInt(num_2);

	let div;

	div = num_1 / num_2;

	alert("La división es: " + div);	
}

// txtIdNumeroUno
// txtIdNumeroDos