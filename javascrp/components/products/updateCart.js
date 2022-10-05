function actualizarTotalesCarrito(carrito) {
  const totalCantidad = carrito.reduce((acc, producto) => acc + producto.cantidad, 0)
  const totalCompra = carrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0)

  pinratTotalesCarrito(totalCantidad, totalCompra)
}

function pinratTotalesCarrito(totalCantidad, totalCompra) {
  const contenedorCarrito = document.querySelector("#badge-cart")
  const precioTotal = document.querySelector("#precio-total-carrito")

  contenedorCarrito.innerHTML = totalCantidad


  //   `<div class="flex justify-content-between align-items-center mb-4">
  //   <p class="mb-1">Carrito de compras</p>
  //   <p class="mb-0">Hay un total de ${totalCantidad} producto/s en el carrito</p>
  // </div>`

  precioTotal.innerText = "$" + totalCompra
}

export {
  actualizarTotalesCarrito
}