import {
  eliminarCarrito
} from "./cartActions.js"

const deleteCarrito = document.querySelector(".modal-carrito")
deleteCarrito.addEventListener('click', (e) => {
  e.stopPropagation()
  if (e.target.classList.contains('boton-eliminar')) {
    eliminarCarrito(e.target.value)
    Toastify({
      text: "Se elimino un producto del carrito",
      duration: 3000,
      close: true,
      gravity: "top",
      position: "center",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #E83A15, #721E0C)",
      },
    }).showToast();
  }

})