/* Oliverio Santiago, Div H
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let dividendo = txtIdNumeroDividendo.value;
	let divisor = txtIdNumeroDivisor.value;

	dividendo = parseInt(dividendo);
	divisor = parseInt(divisor);

	let resto;
	resto = dividendo % divisor;

	alert("El resto es: " + resto);
}


// txtIdNumeroDividendo
// txtIdNumeroDivisor