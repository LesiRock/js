// Función para pedir el nombre del alumno con validación usando length y toUpperCase
function pedirNombre() {
    var nombre = "";
    while (!nombre || nombre.length < 3) {  // Validamos que el nombre tenga al menos 3 caracteres
        nombre = prompt("Ingresa el nombre del alumno (mínimo 3 caracteres)");
        if (!nombre || nombre.length < 3) {
            alert("El nombre debe tener al menos 3 caracteres. Inténtalo de nuevo.");
        }
    }
    nombre = nombre.toUpperCase();  // Convertir el nombre a mayúsculas
    return nombre;
}

// Función para pedir las calificaciones de un alumno
function pedirCalificaciones() {
    var calificaciones = [];
    for (var i = 0; i < 3; i++) {
        var calificacion = parseFloat(prompt("Ingresa la calificación " + (i + 1)));
        calificaciones.push(calificacion);
    }
    return calificaciones;
}

// Función para calcular el promedio de las calificaciones
function calcularPromedio(calificaciones) {
    var suma = 0;
    for (var i = 0; i < calificaciones.length; i++) {
        suma += calificaciones[i];
    }
    var promedio = suma / calificaciones.length;
    return promedio;
}

// Función principal para capturar datos y mostrar resultados
function capturarDatos() {
    var nombres = [];
    var promedios = [];
    var captura = confirm("¿Deseas capturar un alumno?");

    while (captura) {
        var nombre = pedirNombre();
        if (nombres.includes(nombre)) {
            alert("El nombre '" + nombre + "' ya ha sido agregado. No se puede repetir.");
        } else {
            var calificaciones = pedirCalificaciones();
            var promedio = calcularPromedio(calificaciones);

            nombres.push(nombre);
            promedios.push(promedio);
            
            mostrarEnDOM(nombre,promedio)
            captura = confirm("¿Deseas capturar otro alumno?");
       }
    }

    alert("Adiós");

    // Mostrar nombres y promedios
    for (var i = 0; i < nombres.length; i++) {
        console.log("Nombre: " + nombres[i] + ", Promedio: " + promedios[i]);
    }
}

// Llamar a la función principal para iniciar el proceso
//capturarDatos(); 

// funcion para visualizar los alumnos por DOM
function mostrarEnDOM(nombre,promedio){
    var listaAlumnos = document.getElementById("lista-alumnos");
    var li = document.createElement("li");
    li.textContent = "Nombre: " + nombre + " Promedio: " + promedio.toFixed(2);
    listaAlumnos.appendChild(li);
}

//Para al hacer click que corra el programa
// document.getElementById("capturar").addEventListener("click", function(){
//     capturarDatos();
// });

// TAREA
//Modificar el programa para que pida las calificaciones de los periodos y al final en un documento los imprima todos EN EL HTML