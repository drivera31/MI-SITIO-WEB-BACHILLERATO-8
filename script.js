
let inputEdad = document.getElementById("campoEdad");
let btnVerificar = document.getElementById("btnVerificar");

// Escuchar el evento click en el botón
btnVerificar.addEventListener("click", function() {
  // 1. Obtener el valor ingresado
  let valorInput = inputEdad.value;

  // 2. Verificar que el campo no esté vacío
  if (valorInput.trim() === "") {
    alert("Por favor, ingresa tu edad.");
    return;
  }

  // 3. Convertir el texto recibido a un número entero
  let edad = parseInt(valorInput, 10);

  // 4. Comprobar que sea un número válido y mayor o igual a cero
  if (isNaN(edad) || edad < 0) {
    alert("Por favor, ingresa un número válido mayor o igual a cero.");
    return;
  }

  // 5. Evaluar la edad con estructuras condicionales (if / else)
  if (edad >= 18) {
    alert("Eres mayor de edad");
  } else {
    alert("Eres menor de edad");
  }
});