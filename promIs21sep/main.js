document.getElementById("formulario").addEventListener("submit",function(){
    event.preventDefault(); //para evitar que se recargue la pagina
    var nombre = document.getElementById("nombre").value.toUpperCase();
    var cal1 = parseFloat(document.getElementById("cal1").value);
    var cal2 = parseFloat(document.getElementById("cal2").value);
    var cal3 = parseFloat(document.getElementById("cal3").value);

    var calificaciones = [cal1,cal2,cal3];

    var promedio = calcularPromedio(calificaciones);
    mostrarEnDom(nombre,promedio);

    document.getElementById("formulario").reset(); //para que se resetee 
});

function calcularPromedio(calificaciones){
    var suma = 0; //se empieza en 0 para que cada que corra se regrese a 0 y no pongan lo que quedo
    for(var i = 0; i < calificaciones.length;i++){
         suma = suma + calificaciones[i];
    }
    return suma / calificaciones.length;
}

function mostrarEnDom(nombre,promedio){
    var lista = document.getElementById("lista");
    var li = document.createElement("li"); // para crear un elemento se usa createElement
    li.textContent = "Nombre: " + nombre + " Promedio: " + promedio; //textContent agrega elementos planos, si lo quiero con estilo es Inner
    lista.appendChild(li); // en el elemento lista mete los li, para eso es appendChild
}