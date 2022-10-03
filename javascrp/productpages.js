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
console.log(seleccionProducto.id)
