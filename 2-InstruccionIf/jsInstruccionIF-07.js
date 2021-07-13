// Oliverio Santiago, Div H
function mostrar()
{
	let edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	let estadoC;
	estadoC = estadoCivil.value;

	if (edad < 18 && estadoC != "Soltero") 
	{
		alert("Es muy pequeño para NO ser soltero.")
	}



}

// txtIdEdad
// estadoCivil