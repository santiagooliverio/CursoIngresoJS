// Oliverio Santiago, Div H

function mostrar()
{
  let nombre1;
  let nombre2;
  nombre1 = prompt("Ingrese su nombre: ");
  nombre2 = prompt("Ingrese el nombre de su pareja: ");

  let peso1;
  let peso2;
  peso1 = prompt("Ingrese cuánto pesa: ");
  peso2 = prompt("Ingrese cuánto pesa su pareja: ");
  peso1 = parseFloat(peso1);
  peso2 = parseFloat(peso2);

  let sumaPeso;
  sumaPeso = peso1 + peso2;

  let promedioPeso;
  promedioPeso = (peso1 + peso2) / 2;
  promedioPeso = parseFloat(promedioPeso);

  alert("Ustedes se llaman " + nombre1 + " y " + nombre2 + ". Pesan " + peso1 + " y " + peso2 + " kilos, que sumados son " + sumaPeso + " kilos, y el promedio de peso " + promedioPeso + "." );
}
