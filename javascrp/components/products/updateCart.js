function actualizarTotalesCarrito(carrito) {
  // const totalCantidad = carrito.reduce((acc, producto) => acc + producto.cantidad, 0)
  const totalCantidad = carrito.length
  const totalCompra = carrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0)

  pinratTotalesCarrito(totalCantidad, totalCompra)
}

function pinratTotalesCarrito(totalCantidad, totalCompra) {
  const contenedorCarrito = document.querySelector("#badge-cart")
  const precioTotal = document.querySelector("#precio-total-carrito")
  contenedorCarrito.innerHTML = totalCantidad
  precioTotal.innerText = "$" + totalCompra
}

export {
  actualizarTotalesCarrito
}