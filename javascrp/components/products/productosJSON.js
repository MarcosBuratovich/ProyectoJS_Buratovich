import { mostrarCarrito } from "./cartActions.js"

let carrito = JSON.parse(sessionStorage.getItem("carritoJSON"))
if (carrito === null) {
  let carrito = []
  let cJSON = JSON.stringify(carrito)
  sessionStorage.setItem("carritoJSON", cJSON)
} else {
  if (carrito.length !== 0) {
    carrito.forEach((e) => {
      mostrarCarrito(e)
    })
  }
}
