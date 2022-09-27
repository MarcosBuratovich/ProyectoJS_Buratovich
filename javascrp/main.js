// El tema que tome de eleccion es un e-comerce de venta de muebles fabricado a mano

const PRODUCTOS = [
  {
    id: 1,
    nombre: "BANQUITO",
    precio: 5700,
    imgFile: "./images/banquito_inicio.png",
    prodCar: 1,
    stock: 10,
    alt: "ProductoBanquito",
    direc: "./pages/banquito.html",
  },
  {
    id: 2,
    nombre: "CANDELABRO",
    precio: 13000,
    imgFile: "./images/candelabro_inicio.jpg",
    prodCar: 1,
    stock: 8,
    alt: "ProductoCandelabro",
    direc: "./pages/candelabro.html",
  },
  {
    id: 3,
    nombre: "BANDEJAHEX",
    precio: 8900,
    imgFile: "./images/bandeja_hex_inicio.jpg",
    prodCar: 1,
    stock: 3,
    alt: "ProductoBandejaHexagonal",
    direc: "./pages/hexagonal.html",
  },
  {
    id: 4,
    nombre: "BANDEJAOCTO",
    precio: 11000,
    imgFile: "./images/bandeja_octo_inicio.png",
    prodCar: 1,
    stock: 4,
    alt: "ProductoBandejaOctogonal",
    direc: "./pages/octogonal.html",
  },
  {
    id: 5,
    nombre: "ESTANTE",
    precio: 16000,
    imgFile: "./images/estante_inicio.png",
    prodCar: 2,
    stock: 2,
    alt: "ProductoEstante",
    direc: "./pages/estante.html",
  },
  {
    id: 6,
    nombre: "ESPEJO",
    precio: 19000,
    imgFile: "./images/render_espejo_inicio.png",
    prodCar: 1,
    stock: 6,
    alt: "ProductoEspejo",
    direc: "./pages/espejo.html",
  },
  {
    id: 7,
    nombre: "MESAOCTO",
    precio: 25000,
    imgFile: "./images/mesita_inicio.png",
    prodCar: 1,
    stock: 6,
    alt: "ProductoMesaOcotogonal",
    direc: "./pages/mesa.html",
  },
]
// console.log(PRODUCTOS.prodCar)
let cont = 1
let contClase = 0
const productosIndex = document.getElementById("productos_id_index")
for (const producto of PRODUCTOS) {
  let contClaseString = "div_padre" + contClase
  let contenedor = document.createElement("div")
  if (producto.prodCar === 1) {
    if (cont === 1) {
      contenedor.setAttribute("id", contClaseString)
      contenedor.classList.add("row", "mx-auto")
      contenedor.innerHTML = `<div class="col-sm-8 col-md-6 col-xl-6 col-10 mx-auto pb-3">
                              <article>
                              <h2>
                              <a href=${producto.direc}><img src=${producto.imgFile} alt=${producto.alt} class="rounded img-fluid shadow"></a>
                              </h2>
                              </article>
                              </div>`
      cont++
      productosIndex.appendChild(contenedor)
    } else {
      const divPadre = document.getElementById(contClaseString)
      contenedor.classList.add("col-sm-8", "col-md-6", "col-xl-6", "col-10", "mx-auto", "pb-3")
      contenedor.innerHTML = `
                              <article>
                              <h2>
                              <a href=${producto.direc}><img src=${producto.imgFile} alt=${producto.alt} class="rounded img-fluid shadow"></a>
                              </h2>
                              </article>`
      cont--
      divPadre.appendChild(contenedor)
      contClase++
    }
  } else {
    contenedor.setAttribute("id", contClaseString)
    contenedor.classList.add("row", "mx-auto")
    contenedor.innerHTML = `<div class="col-12 mx-auto pb-3">
                              <article>
                              <h2>
                              <a href=${producto.direc}><img src=${producto.imgFile} alt=${producto.alt} class="rounded img-fluid shadow"></a>
                              </h2>
                              </article>
                              </div>`
    contClase++
    productosIndex.appendChild(contenedor)
  }
}

// let carrito = []
// let cantDeArticulos = 0
// let cantDescuento = 0
// let nombreUsuario = pedirNombreYApe()
// alertaIncial(carrito)
// alertaFinal(carrito)

// function alertaIncial(car) {
//   let numeroIngresado
//   do {
//     numeroIngresado = parseInt(prompt("1. Comenzar/Continuar compra\n 2. Ordenar productos\n 3. Aplicar descuento\n 4. Mostrar carrito\n 5. Finalizar\n"))
//     while (verificarIngreso(numeroIngresado, 1, 5) === false) {
//       numeroIngresado = parseInt(prompt("ERROR!!!\n 1. Comenzar/Continuar compra\n 2. Ordenar productos\n 3. Aplicar descuento\n 4. Mostrar carrito\n 5. Finalizar\n"))
//     }
//     switch (numeroIngresado) {
//       case 1:
//         crearCarrito(cantDeArticulos, car, PRODUCTOS)
//         break
//       case 2:
//         ordenarProductos(PRODUCTOS)
//         break

//       case 3:
//         if (car.length === 0 || cantDescuento === 1) {
//           alert("No se puede aplicar descuento")
//         } else {
//           carrito = descuentoProductos(car)
//           cantDescuento += 1
//           alert("Se aplico un 20% de decuento!!!!")
//         }
//         break
//       case 4:
//         mostrarCarrito(car)
//         break
//       default:
//         break
//     }
//   } while (numeroIngresado !== 5)
// }

// function pedirNombreYApe() {
//   let nombreIngresado = prompt("Ingrese su Nombre").toUpperCase()
//   while (nombreIngresado === "") {
//     nombreIngresado = prompt("Error, Ingrese su Nombre").toUpperCase()
//   }
//   let apellidoIngresado = prompt("Ingrese su Apellido").toUpperCase()
//   while (apellidoIngresado === "") {
//     apellidoIngresado = prompt("Error, Ingrese su Apellido").toUpperCase()
//   }
//   let nombreCompleto = nombreIngresado + " " + apellidoIngresado
//   return nombreCompleto
// }

// function crearCarrito(cant, car, P) {
//   let productoIngresado = parseInt(prompt("Ingrese un producto que desea comprar.\n 1. Banquito\n 2. Candelabro\n 3. Bandeja Hexagonal\n 4. Bandeja Octogonal\n 5. Espejo\n 6. Mesa Octogonal\n 7.Estante\n Ingrese 0 para terminar con la seleccion"))
//   while (productoIngresado !== 0) {
//     cant += 1
//     while (verificarIngreso(productoIngresado, 0, 7) === false) {
//       productoIngresado = parseInt(prompt("Seleccion erronea. Por favor vuelva a intentar.\n 1. Banquito\n 2. Candelabro\n 3. Bandeja Hexagonal\n 4. Bandeja Octogonal\n 5. Espejo\n 6. Mesa Octogonal\n 7.Estante\n"))
//     }
//     car.push(P.find((p) => p.id === productoIngresado))
//     productoIngresado = parseInt(prompt("Productos seleccionados: " + cant + "\nIngrese un producto que desea comprar.\n 1. Banquito\n 2. Candelabro\n 3. Bandeja Hexagonal\n 4. Bandeja Octogonal\n 5. Espejo\n 6. Mesa Octogonal\n 7.Estante\n Ingrese 0 para terminar con la seleccion"))
//   }
//   console.log(JSON.stringify(car))
// }

// function ordenarProductos(prod) {
//   let metodoIngresado = parseInt(prompt("1. Ordenar por producto\n 2. Ordenar por precio\n 3. Buscar por nombre"))
//   while (verificarIngreso(metodoIngresado, 1, 3) === false) {
//     metodoIngresado = parseInt(prompt("ERROR!!!\n 1. Ordenar por producto\n 2. Ordenar por precio\n 3. Buscar por nombre"))
//   }
//   switch (metodoIngresado) {
//     case 1:
//       let metodoIngresadoProducto = parseInt(prompt("PRODUCTOS\n 1. Ascendente\n 2. Decendente"))
//       while (verificarIngreso(metodoIngresadoProducto, 1, 2) === false) {
//         metodoIngresadoProducto = parseInt(prompt("ERROR!!!\n 1. Ascendente\n 2. Decendente"))
//       }
//       sortArrayNombre(prod, metodoIngresadoProducto)
//       break
//     case 2:
//       let metodoIngresadoPrecio = parseInt(prompt("PRECIO\n 1. Ascendente\n 2. Decendente"))
//       while (verificarIngreso(metodoIngresadoPrecio, 1, 2) === false) {
//         metodoIngresadoPrecio = parseInt(prompt("ERROR!!!\n 1. Ascendente\n 2. Decendente"))
//       }
//       sortArrayPrecio(prod, metodoIngresadoPrecio)
//       break
//     case 3:
//       let filtro = prompt("Ingrese la busqueda").toUpperCase()
//       const busqueda = prod.filter((a) => a.nombre.includes(filtro))
//       mostrarCarrito(busqueda)
//       break
//     default:
//       break
//   }
// }

// function sortArrayNombre(array, x) {
//   switch (x) {
//     case 1:
//       array.sort((a, b) => {
//         if (a.nombre > b.nombre) {
//           return 1
//         }
//         if (a.nombre < b.nombre) {
//           return -1
//         }
//         return 0
//       })
//       mostrarCarrito(array)
//       break
//     case 2:
//       array.sort((a, b) => {
//         if (a.nombre < b.nombre) {
//           return 1
//         }
//         if (a.nombre > b.nombre) {
//           return -1
//         }
//         return 0
//       })
//       mostrarCarrito(array)
//       break

//     default:
//       break
//   }
// }

// function sortArrayPrecio(array, x) {
//   switch (x) {
//     case 1:
//       array.sort((a, b) => {
//         if (a.precio > b.precio) {
//           return -1
//         }
//         if (a.precio < b.precio) {
//           return 1
//         }
//         return 0
//       })
//       mostrarCarrito(array)
//       break
//     case 2:
//       array.sort((a, b) => {
//         if (a.precio < b.precio) {
//           return -1
//         }
//         if (a.precio > b.precio) {
//           return 1
//         }
//         return 0
//       })
//       mostrarCarrito(array)
//       break

//     default:
//       break
//   }
// }

// function descuentoProductos(actualizado) {
//   actualizado.map((p) => {
//     p.precio = p.precio * 0.8
//   })
//   return actualizado
// }

// function mostrarCarrito(car) {
//   alert(JSON.stringify(car))
// }

// function sumaCarrito(prod) {
//   let sumaCarrito = 0
//   prod.forEach((p) => {
//     sumaCarrito += p.precio
//   })
//   return sumaCarrito
// }

// function alertaFinal() {
//   let totalPagar = 0
//   totalPagar = sumaCarrito(carrito)
//   alert("El total a abonar es: " + totalPagar)
// }

// function verificarIngreso(ingre, a, b) {
//   if (ingre < a || ingre > b || isNaN(ingre)) {
//     return false
//   } else {
//     return true
//   }
// }
