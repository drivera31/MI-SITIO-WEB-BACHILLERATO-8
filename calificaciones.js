document.addEventListener("DOMContentLoaded", () => {
    const btnCalcular = document.getElementById("btnCalcular");
    btnCalcular.addEventListener("click", evaluarCalificaciones);
});

function evaluarCalificaciones() {
    // Obtener valores de los campos
    const nombre = document.getElementById("nombre").value.trim();
    const val1 = document.getElementById("calificacion1").value.trim();
    const val2 = document.getElementById("calificacion2").value.trim();
    const val3 = document.getElementById("calificacion3").value.trim();
    const contenedorResultado = document.getElementById("resultado");

    // A. Validación de información
    if (nombre === "") {
        alert("Por favor, ingresa el nombre del estudiante.");
        return;
    }

    if (val1 === "" || val2 === "" || val3 === "") {
        alert("Por favor, completa las tres calificaciones antes de calcular.");
        return;
    }

    const cal1 = parseFloat(val1);
    const cal2 = parseFloat(val2);
    const cal3 = parseFloat(val3);

    if (isNaN(cal1) || isNaN(cal2) || isNaN(cal3)) {
        alert("Todas las calificaciones deben ser números válidos.");
        return;
    }

    if (cal1 < 0 || cal1 > 10 || cal2 < 0 || cal2 > 10 || cal3 < 0 || cal3 > 10) {
        alert("Las calificaciones deben estar en un rango de 0 a 10.");
        return;
    }

    // B. Calcular el promedio
    const promedio = (cal1 + cal2 + cal3) / 3;

    // C. Determinar el resultado (APROBADO / REPROBADO)
    let estado = "";
    let claseEstado = "";

    if (promedio >= 6 && promedio <= 10) {
        estado = "APROBADO";
        claseEstado = "aprobado";
    } else if (promedio < 6) {
        estado = "REPROBADO";
        claseEstado = "reprobado";
    } else {
        estado = "ERROR EN RANGO";
    }

    // D. Determinar la observación según el promedio
    let observacion = "";

    if (promedio >= 9) {
        observacion = "Excelente desempeño";
    } else if (promedio >= 8) {
        observacion = "Muy buen desempeño";
    } else if (promedio >= 7) {
        observacion = "Buen desempeño";
    } else if (promedio >= 6) {
        observacion = "Desempeño suficiente";
    } else {
        observacion = "Necesita mejorar";
    }

    // 4. Presentar los resultados dentro de la página web
    contenedorResultado.style.display = "block";
    contenedorResultado.innerHTML = `
        <h2>Resultados de la evaluación</h2>
        <p><strong>Estudiante:</strong> ${nombre}</p>
        <p><strong>Calificaciones:</strong> ${cal1.toFixed(1)}, ${cal2.toFixed(1)}, ${cal3.toFixed(1)}</p>
        <p><strong>Promedio obtenido:</strong> ${promedio.toFixed(2)}</p>
        <p><strong>Estado:</strong> <span class="badge ${claseEstado}">${estado}</span></p>
        <p><strong>Observación:</strong> ${observacion}</p>
    `;
}