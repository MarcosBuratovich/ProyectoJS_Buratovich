import { actualizarTotalesCarrito } from "./updateCart.js"

function validarProductoRepetido(productoBuscado, cantidad) {
  let carrito = JSON.parse(sessionStorage.getItem("carritoJSON"))
  const productoRepetido = carrito.find((producto) => producto.id === productoBuscado.id)
  console.log(carrito)
  console.log(productoRepetido)
  if (productoRepetido) {
    productoRepetido.cantidad = productoRepetido.cantidad + cantidad
    actualizarTotalesCarrito(carrito)
    const modificarCant = document.getElementById("cantidad-producto-carrito")
    modificarCant.innerHTML = productoRepetido.cantidad
    sessionStorage.setItem("carritoJSON", JSON.stringify(carrito))
  } else {
    agregarAlCarrito(productoBuscado, cantidad)
  }
}

function agregarAlCarrito(productoBus, cant) {
  let carrito = JSON.parse(sessionStorage.getItem("carritoJSON"))
  productoBus.cantidad = cant
  carrito.push(productoBus)
  sessionStorage.setItem("carritoJSON", JSON.stringify(carrito))
  mostrarCarrito(productoBus)
}

function mostrarCarrito(productoBus) {
  let carrito = JSON.parse(sessionStorage.getItem("carritoJSON"))
  const contenedor2 = document.getElementById("carrito-contenedor")
  const div = document.createElement("div")
  div.classList.add("productoEnCarrito")
  div.innerHTML = `
                    <div id= "producto-carrito-${productoBus.id}"class="card mb-3">
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <div class="d-flex flex-row align-items-center">
                        <div>
                          <img
                            src=${productoBus.imgFile}
                            class="img-fluid rounded-3" alt="Shopping item" style="width: 65px;">
                        </div>
                        <div class="ms-3">
                          <h5 class="d-flex mt-2">${productoBus.nombre}</h5>
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center">
                        <div style="width: 50px;">
                          <h5 id = "cantidad-producto-carrito"class="fw-normal mb-0">${productoBus.cantidad}</h5>
                        </div>
                        <div style="width: 80px;">
                          <h5 class="mb-0">$${productoBus.precio}</h5>
                        </div>
                        <button id= "button-delete-${productoBus.id}" value="${productoBus.id}" class="border-0 bg-white ms-2 boton-eliminar">X</i></button>
                      </div>
                    </div>
                  </div>
                </div>

                    `
  contenedor2.appendChild(div)
  actualizarTotalesCarrito(carrito)
}

function eliminarCarrito(productId) {
  const contenedor = document.getElementById("carrito-contenedor")
  let carrito = JSON.parse(sessionStorage.getItem("carritoJSON"))
  if (productId !== "delete") {
    const carritoActualizado = carrito.filter((e) => e.id != productId)
    if (carritoActualizado.length !== 0) {
      contenedor.innerHTML = ""
      carritoActualizado.forEach((e) => {
        mostrarCarrito(e)
      })
      actualizarTotalesCarrito(carritoActualizado)
    } else {
      contenedor.innerHTML = ""
      actualizarTotalesCarrito(carritoActualizado)
    }
    sessionStorage.setItem("carritoJSON", JSON.stringify(carritoActualizado))
  } else {
    carrito = []
    let cJSON = JSON.stringify(carrito)
    sessionStorage.setItem("carritoJSON", cJSON)
    contenedor.innerHTML = ""
    actualizarTotalesCarrito(carrito)
  }
}

export { agregarAlCarrito, validarProductoRepetido, mostrarCarrito, eliminarCarrito }
