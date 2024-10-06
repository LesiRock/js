class Producto{
    constructor(nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.valorInventario = valorInventario();
    }

    valorInventario(){
        return(this.precio*this.cantidad);
    }

    mostrarDatos(){
        return console.log(`
        Producto: ${this.nombre}
        Precio: $ ${this.precio}
        Cantidad: ${this.cantidad}
        Total: $ ${this.valorInventario}`);
    }
}

document.getElementById("formulario").addEventListener("submit", function(){
    const nombre = document.getElementById('nombre').value;
    const precio = parseFloat(document.getElementById('precio').value);
    const cantidad = parseFloat(document.getElementById('cantidad').value);

    var producto = new Producto(nombre, precio, cantidad);

    producto.mostrarDatos();

   
});