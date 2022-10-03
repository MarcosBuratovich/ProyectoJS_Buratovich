const productosMain = JSON.parse(localStorage.getItem("productosJSON"))
indexProductos(productosMain)
let input1 = document.getElementById("barra-de-busqueda").addEventListener("input", (e) => {
  let value = e.target.value.toUpperCase()
  console.log(value)
  if (value.length > 0) {
    mostrarBusqueda(value)
  } else {
    indexProductos(productosMain)
  }
})

function mostrarBusqueda(el) {
  const busqueda = productosMain.filter((a) => a.nombre.includes(el))
  const productoBusqueda = document.getElementById("productos_id_index")
  productoBusqueda.innerHTML = ""
  insertProducts(busqueda, productoBusqueda)
}

function indexProductos(prod) {
  const productosIndex = document.getElementById("productos_id_index")
  productosIndex.innerHTML = ""
  insertProducts(prod, productosIndex)
}

function insertProducts(prod, product) {
  let cont = 1
  let contClase = 0
  for (const producto of prod) {
    let contClaseString = "div_padre" + contClase
    let contenedor = document.createElement("div")
    if (producto.prodCar === 1) {
      if (cont === 1) {
        contenedor.setAttribute("id", contClaseString)
        contenedor.classList.add("row", "mx-auto")
        contenedor.innerHTML = `<div class="col-sm-8 col-md-6 col-xl-6 col-10 mx-auto pb-3">
                              <article>
                              <h2>
                              <a href=${producto.direc}><img src=${producto.imgFile} alt=${producto.alt} class="rounded img-fluid shadow"></a>
                              </h2>
                              </article>
                              </div>`
        cont++
        product.appendChild(contenedor)
      } else {
        const divPadre = document.getElementById(contClaseString)
        contenedor.classList.add("col-sm-8", "col-md-6", "col-xl-6", "col-10", "mx-auto", "pb-3")
        contenedor.innerHTML = `
                              <article>
                              <h2>
                              <a href=${producto.direc}><img src=${producto.imgFile} alt=${producto.alt} class="rounded img-fluid shadow"></a>
                              </h2>
                              </article>`
        cont--
        divPadre.appendChild(contenedor)
        contClase++
      }
    } else {
      contenedor.setAttribute("id", contClaseString)
      contenedor.classList.add("row", "mx-auto")
      contenedor.innerHTML = `<div class="col-12 mx-auto pb-3">
                              <article>
                              <h2>
                              <a href=${producto.direc}><img src=${producto.imgFile} alt=${producto.alt} class="rounded img-fluid shadow"></a>
                              </h2>
                              </article>
                              </div>`
      contClase++
      product.appendChild(contenedor)
    }
  }
}
