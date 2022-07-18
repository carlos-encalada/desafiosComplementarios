class Perfume {
  constructor(id ="Undefined" , nombre = "Undefined" , marca ="Undefined", precio = 10000, ml= 75) { 
    this.id = id;
    this.nombre = nombre;
    this.marca = marca; 
    this.precio = precio;
    this.ml = ml;
    this.iva = this.precio * 1.16
  }
}

const arrayPerfumes = []
const divPerfumes = document.getElementById('perfumes')


alert("Ingrese los datos que se piden a continuación:")

do{

    do{
      id = prompt("Ingrese el ID del perfume:").toUpperCase()
    }while(id.length <= 0)
   
    do{
      nombre = prompt("Ingrese el modelo del perfume:").toUpperCase()
      marca = prompt("Ingrese la marca del perfume:").toUpperCase()
    }while(nombre.length <= 0 || marca.length <= 0)
   
    do{  
      precio = parseFloat(prompt("Ingrese el precio del perfume:"))
      ml = parseInt(prompt("Ingrese la presentación en ml del perfume:"))
    }while(isNaN(precio) || isNaN(ml) || (precio <= 0 || ml <= 0 ))
  
  const perfume = new Perfume(id, nombre, marca, precio, ml)
    arrayPerfumes.push(perfume)

  ingresarPerfume = prompt("¿Desea ingresar un nuevo producto?").toLowerCase()

  console.log(perfume)

}while(ingresarPerfume != "no")

arrayPerfumes.forEach(perfume => {
  divPerfumes.innerHTML += `
  <div class="card perfume" id="perfume${perfume.id}" style="width: 15rem;">
  <div class="card-body">
    <h4 class="nombre">${perfume.nombre}</h5>
    <p class="marca">${perfume.marca}</p>
    <p class="presentacion">${perfume.ml}ml.</p>
    <p class="precio">Precio con IVA: $${parseInt(perfume.iva)}</p>
  </div>
  </div>`
})