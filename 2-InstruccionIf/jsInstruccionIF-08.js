// Oliverio Santiago, Div H
function mostrar()
{
	let edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	let estadoC;
	estadoC = estadoCivil.value;

	if (edad >= 18 && estadoC == "Soltero") 
	{
		alert("Es soltero y no es menor.")
	}


}//FIN DE LA FUNCIÓN