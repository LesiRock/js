class Alumno{
    constructor(nombre, apellido, cal1, cal2, cal3){ // esto es solo el nombre, la instancia es para unirlos
        this.nombre = nombre;
        this.apellido = apellido;
        this.cal1 = cal1;
        this.cal2 = cal2;
        this.cal3 = cal3;
        this.promedio = this.calcularPromedio(); //viene de una funcion que asi se llamara
        this.status = this.calcularStatus();
    }
    calcularPromedio(){
        return (this.cal1+this.cal2+this.cal3)/3; //Se pone This para decir que es de este alumno
    }
    calcularStatus(){
        return this.promedio >= 6 ? "Aprobado":"Reprobado"; // otra forma de poner if, sin usarlo es con el signo ? para validaciones simples de 2 opciones
    }
    mostrarDatos(){
        return `
        Nombre: ${this.nombre} <br> 
        Apelldio: ${this.apellido} <br>
        Calificacion 1: ${this.cal1} <br>
        Calificacion 2: ${this.cal2} <br>
        Calificacion 3: ${this.cal3} <br>
        Promedio: ${this.promedio} <br>
        Status: ${this.status} <hr>
        `
    }
}

document.getElementById("formulario").addEventListener("submit", function(){ // ve al docmuento html y buscate el que se llama formulario y cuando escuches el click en submit
    event.preventDefault(); //para evitar que al click se recargue la pagina, es un objeto de js
    const nombre = document.getElementById('nombre').value;//cuando vas por elementos se recomienda que sea constante para evitar que se cambie el valor, se va por el valr sino solo va pr el tag
    const apellido = document.getElementById('apellido').value;
    const cal1 = parseFloat(document.getElementById('cal1').value); // parseFloat para convertir a folante el texto ingresado
    const cal2 = parseFloat(document.getElementById('cal2').value); 
    const cal3 = parseFloat(document.getElementById('cal3').value); 

    const alumno = new Alumno(nombre, apellido, cal1, cal2, cal3);

    document.getElementById('formulario').reset(); //para borrar los datos del formulario

    var li = document.createElement('li'); //creacion de una etiqueta llamada li, porque en el html aun no exist.
    li.innerHTML = `${alumno.mostrarDatos()}`; // su contenido lo de alumno innerHTML, agrega donde hay etiquetas
    document.getElementById('salida').appendChild(li); //agrega en la lista el li

   // document.getElementById("salida").textContent = `${alumno.mostrarDatos()} `;//modifica el texto y cambialo por. Text content modifica nontenido e inner agrega a una etiqueta que ya existia
});
