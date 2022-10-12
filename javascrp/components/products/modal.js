import {
  eliminarCarrito
} from "./cartActions.js"

const deleteCarrito = document.querySelector(".modal-carrito")
deleteCarrito.addEventListener('click', (e) => {
  e.stopPropagation()
  if (e.target.classList.contains('boton-eliminar')) {
    eliminarCarrito(e.target.value)
  }

})