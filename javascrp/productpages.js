import {
  validarProductoRepetido
} from "./components/products/cartActions.js"

const prod = JSON.parse(localStorage.getItem("productosJSON"))
const contador = document.querySelector(".count")
let cont = 1
const suma = document.querySelector(".plus")
const resta = document.querySelector(".minus")
contador.innerHTML = cont
suma.addEventListener("click", () => {
  if (cont >= 10) {
    contador.innerHTML = "10"
  } else {
    cont++
    contador.innerHTML = cont
  }
})
resta.addEventListener("click", () => {
  if (cont <= 1) {
    contador.innerHTML = 1
  } else {
    cont--
    contador.innerHTML = cont
  }
})

const seleccionProducto = document.querySelector(".button_carrito")
const title = document.querySelector("#titlePages").innerHTML
seleccionProducto.addEventListener("click", () => {
  const busqueda = prod.find((a) => a.nombre === title)
  validarProductoRepetido(busqueda, cont)
})