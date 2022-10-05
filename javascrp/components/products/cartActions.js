import {
  actualizarTotalesCarrito
} from "./updateCart.js"

let carrito = []


function validarProductoRepetido(productoBuscado, cantidad) {
  const productoRepetido = carrito.find(producto => producto.id === productoBuscado.id)
  if (productoRepetido) {
    productoRepetido.cantidad = productoRepetido.cantidad + cantidad
    actualizarTotalesCarrito(carrito)
    const modificarCant = document.getElementById("cantidad-producto-carrito")
    modificarCant.innerHTML = productoRepetido.cantidad
  } else {
    agregarAlCarrito(productoBuscado, cantidad)
  }

}

function agregarAlCarrito(productoBus, cant) {
  const contenedor = document.getElementById("carrito-contenedor")
  productoBus.cantidad = cant
  carrito.push(productoBus)
  const div = document.createElement('div')
  div.classList.add('productoEnCarrito')
  div.innerHTML = `
                    <div id= "producto-carrito-${productoBus.id}"class="card mb-3">
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <div class="d-flex flex-row align-items-center">
                        <div>
                          <img
                            src=.${productoBus.imgFile}
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
                        <button id= "button-delete-${productoBus.id}"class="border-0 bg-white ms-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                      </svg></button>
                      </div>
                    </div>
                  </div>
                </div>

                    `
  contenedor.appendChild(div)
  actualizarTotalesCarrito(carrito)
}





export {
  agregarAlCarrito,
  validarProductoRepetido
}