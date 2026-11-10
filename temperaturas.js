document.getElementById("btnConvertir").addEventListener("click", function() {
    // 1. Obtener valores de los elementos HTML
    let inputTemp = document.getElementById("campoTemp").value;
    let tipoConversion = document.getElementById("tipoConversion").value;
    let divResultado = document.getElementById("resultado");
    
    // 2. Validación: Verificar que el campo no esté vacío
    if (inputTemp.trim() === "") {
        alert("Por favor, ingresa una temperatura.");
        divResultado.style.display = "none"; // Ocultar cuadro de resultado si hay error
        return;
    }

    // Convertir el texto a número decimal (float) para cálculos precisos
    let temperatura = parseFloat(inputTemp);
    let resultadoCalculo = 0;
    let textoResultado = "";

    // 3. Realizar la operación correspondiente
    if (tipoConversion === "c_a_f") {
        // Fórmula: (Celsius × 9 / 5) + 32
        resultadoCalculo = (temperatura * 9 / 5) + 32;
        
        textoResultado = `
            <strong>Temperatura ingresada:</strong> ${temperatura} °C<br><br>
            <strong>Tipo de conversión:</strong> Celsius a Fahrenheit<br><br>
            <strong>Resultado:</strong> ${resultadoCalculo.toFixed(2)} °F
        `;
    } else if (tipoConversion === "f_a_c") {
        // Fórmula: (Fahrenheit - 32) × 5 / 9
        resultadoCalculo = (temperatura - 32) * 5 / 9;
        
        textoResultado = `
            <strong>Temperatura ingresada:</strong> ${temperatura} °F<br><br>
            <strong>Tipo de conversión:</strong> Fahrenheit a Celsius<br><br>
            <strong>Resultado:</strong> ${resultadoCalculo.toFixed(2)} °C
        `;
    }

    // 4. Mostrar el resultado en la página web
    divResultado.innerHTML = textoResultado;
    divResultado.style.display = "block"; // Hacer visible el recuadro gris
});