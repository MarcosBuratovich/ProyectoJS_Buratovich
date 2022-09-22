// El tema que tome de eleccion es un e-comerce de venta de muebles fabricado a mano

const PRODUCTOS = [{
    id: 1,
    nombre: "BANQUITO",
    precio: 5700,
  },
  {
    id: 2,
    nombre: "CANDELABRO",
    precio: 13000,
  },
  {
    id: 3,
    nombre: "BANDEJAHEX",
    precio: 8900,
  },
  {
    id: 4,
    nombre: "BANDEJAOCTO",
    precio: 11000,
  },
  {
    id: 5,
    nombre: "ESPEJO",
    precio: 19000,
  },
  {
    id: 6,
    nombre: "MESAOCTO",
    precio: 25000,
  },
  {
    id: 7,
    nombre: "ESTANTE",
    precio: 16000,
  },
]
console.log(JSON.stringify(PRODUCTOS))
let carrito = []
let cantDeArticulos = 0
let cantDescuento = 0
let nombreUsuario = pedirNombreYApe()
alertaIncial(carrito)
alertaFinal(carrito)

function alertaIncial(car) {
  let numeroIngresado
  const msjI = "1. Comenzar/Continuar compra\n 2. Ordenar productos\n 3. Aplicar descuento\n 4. Mostrar carrito\n 5. Finalizar\n"
  do {
    numeroIngresado = parseInt(prompt(msjI))
    verificarIngreso(numeroIngresado, 1, 5, msjI)
    switch (numeroIngresado) {
      case 1:
        crearCarrito(cantDeArticulos, car, PRODUCTOS)
        break
      case 2:
        ordenarProductos(PRODUCTOS)
        break

      case 3:
        if (car.length === 0 || cantDescuento === 1) {
          alert("No se puede aplicar descuento")
        } else {
          carrito = descuentoProductos(car)
          cantDescuento += 1
          alert("Se aplico un 20% de decuento!!!!")
        }
        break
      case 4:
        mostrarCarrito(car)
        break
      default:
        break
    }
  } while (numeroIngresado !== 5)
}

function pedirNombreYApe() {
  let nombreIngresado = prompt("Ingrese su Nombre").toUpperCase()
  while (nombreIngresado === "") {
    nombreIngresado = prompt("Error, Ingrese su Nombre").toUpperCase()
  }
  let apellidoIngresado = prompt("Ingrese su Apellido").toUpperCase()
  while (apellidoIngresado === "") {
    apellidoIngresado = prompt("Error, Ingrese su Apellido").toUpperCase()
  }
  let nombreCompleto = nombreIngresado + " " + apellidoIngresado
  return nombreCompleto
}

function crearCarrito(cant, car, P) {
  const msjPI = 'Ingrese un producto que desea comprar.\n 1. Banquito\n 2. Candelabro\n 3. Bandeja Hexagonal\n 4. Bandeja Octogonal\n 5. Espejo\n 6. Mesa Octogonal\n 7.Estante\n Ingrese 0 para terminar con la seleccion'
  let productoIngresado = parseInt(prompt(msjPI))
  while (productoIngresado !== 0) {
    cant += 1
    verificarIngreso(productoIngresado, 0, 7, msjPI)
    car.push(P.find((p) => p.id === productoIngresado))
    productoIngresado = parseInt(prompt("Productos seleccionados: " + cant + '\n' + msjPI))
  }
  console.log(JSON.stringify(car))
}

function ordenarProductos(prod) {
  const msjMI = "1. Ordenar por producto\n 2. Ordenar por precio\n 3. Buscar por nombre"
  let metodoIngresado = parseInt(prompt(msjMI))
  verificarIngreso(metodoIngresado, 1, 3, msjMI)
  switch (metodoIngresado) {
    case 1:
      const msjMIP = "1. Ascendente\n 2. Decendente"
      let metodoIngresadoProducto = parseInt(prompt('PRODUCTOS\n' + msjMIP))
      verificarIngreso(metodoIngresadoProducto, 1, 2, msjMIP)
      sortArrayNombre(prod, metodoIngresadoProducto)
      break
    case 2:
      let metodoIngresadoPrecio = parseInt(prompt("PRECIO\n" + msjMIP))
      verificarIngreso(metodoIngresadoPrecio, 1, 2, msjMIP)
      sortArrayPrecio(prod, metodoIngresadoPrecio)
      break;
    case 3:
      let filtro = prompt("Ingrese la busqueda").toUpperCase()
      const busqueda = prod.filter((a) => a.nombre.includes(filtro))
      mostrarCarrito(busqueda)
      break;
    default:
      break
  }
}

function sortArrayNombre(array, x) {
  switch (x) {
    case 1:
      array.sort((a, b) => {
        if (a.nombre > b.nombre) {
          return 1
        }
        if (a.nombre < b.nombre) {
          return -1
        }
        return 0
      })
      mostrarCarrito(array)
      break
    case 2:
      array.sort((a, b) => {
        if (a.nombre < b.nombre) {
          return 1
        }
        if (a.nombre > b.nombre) {
          return -1
        }
        return 0
      })
      mostrarCarrito(array)
      break

    default:
      break
  }
}

function sortArrayPrecio(array, x) {
  switch (x) {
    case 1:
      array.sort((a, b) => {
        if (a.precio > b.precio) {
          return -1
        }
        if (a.precio < b.precio) {
          return 1
        }
        return 0
      })
      mostrarCarrito(array)
      break
    case 2:
      array.sort((a, b) => {
        if (a.precio < b.precio) {
          return -1
        }
        if (a.precio > b.precio) {
          return 1
        }
        return 0
      })
      mostrarCarrito(array)
      break

    default:
      break
  }
}

function descuentoProductos(actualizado) {
  actualizado.map((p) => {
    p.precio = p.precio * 0.8
  })
  return actualizado
}

function mostrarCarrito(car) {
  alert(JSON.stringify(car))
}

function sumaCarrito(prod) {
  let sumaCarrito = 0
  prod.forEach((p) => {
    sumaCarrito += p.precio
  })
  return sumaCarrito
}

function alertaFinal() {
  let totalPagar = 0
  totalPagar = sumaCarrito(carrito)
  alert("El total a abonar es: " + totalPagar)
}

function verificarIngreso(ingre, a, b, msj) {
  while (ingre < a || ingre > b || isNaN(ingre)) {
    ingre = parseInt(prompt('Error!!\n' + msj))
  }
  return ingre


  // if (ingre < a || ingre > b || isNaN(ingre)) {
  //   return false
  // } else {
  //   return true
  // }
}