import {
  validarProductoRepetido,
  mostrarCarrito,
} from "./components/products/cartActions.js";

fetch("../productos.json")
  .then((res) => res.json())
  .then((prod) => {
    console.log(prod);
    // const prod = JSON.parse(localStorage.getItem("productosJSON"));
    const contador = document.querySelector(".count");
    let cont = 1;
    const suma = document.querySelector(".plus");
    const resta = document.querySelector(".minus");
    contador.innerHTML = cont;
    suma.addEventListener("click", () => {
      if (cont >= 10) {
        contador.innerHTML = "10";
      } else {
        cont++;
        contador.innerHTML = cont;
      }
    });
    resta.addEventListener("click", () => {
      if (cont <= 1) {
        contador.innerHTML = 1;
      } else {
        cont--;
        contador.innerHTML = cont;
      }
    });

    let carrito = JSON.parse(sessionStorage.getItem("carritoJSON"));
    if (carrito.length !== 0) {
      carrito.forEach((e) => {
        mostrarCarrito(e);
      });
    }

    const seleccionProducto = document.querySelector(".button_carrito");
    const title = document.querySelector("#titlePages").innerHTML;
    seleccionProducto.addEventListener("click", () => {
      const busqueda = prod.find((a) => a.nombre === title);
      validarProductoRepetido(busqueda, cont);

      Toastify({
        text: "Se agrego un producto al carrito",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
    });
  });
