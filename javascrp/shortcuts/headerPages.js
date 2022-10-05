const header = document.getElementById("inicio1")
header.innerHTML = `<div class="container-fluid">
<div class="row">
    <nav class="navbar bg-light">
        <div class="container-fluid">
            <div class="col-3 col-sm-4 col-md-2 col-xl-2">
                <a href="../index.html"><img src="../images/logo vikan.png" alt="Logo Vikan" class="logo-img" /></a>
            </div>
            <div class="col-sm-8 col-md-8 col-xl-8 nav__pestanias">
                <div class="row">
                    <div class="col-12 text-end">
                        <a href="./contacto.html" class="lista-header">Contacto</a>
                    </div>
                </div>
            </div>
            <div class="col-3 col-sm-2 col-md-2 col-xl-2 boton_nav_carrito">
                <button class="navbar-toggler shadow" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
                    <span id= "badge-cart" class="badge text-bg-secondary">0</span>
                </button>

                <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">VIKAN - SHOP</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div id= "carrito-contenedor"  class="offcanvas-body">
                    <div id= "cantidad-total-carrito"></div>
                    </div>
                    <hr class="mb-4" style="height: 2px; background-color: #1266f1; opacity: 1;">
                    <div class="d-flex justify-content-between p-2 mb-2" style="background-color: #e1f5fe;">
                    <h5 class="fw-bold mb-0">Total:</h5>
                    <h5 id="precio-total-carrito" class="fw-bold mb-0">$0</h5>
                </div>
                </div>
            </div>
            <div class="col-2 boton_nav_inicio">
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">VIKAN</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 barra-nav">
                            <li class="nav-item ms-2 mb-4">
                                <a href="./contacto.html">Contacto</a>
                            </li>
                            <li class="nav-item dropdown ms-2">
                                <button class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</button>
                                <ul class="dropdown-menu p-3">
                                    <li><a class="dropdown-item" href="./banquito.html">Banquito</a></li>
                                    <li><a class="dropdown-item" href="./candelabro.html">Candelabro</a></li>
                                    <li><a class="dropdown-item" href="./hexagonal.html">Bandeja Hexagonal</a></li>
                                    <li><a class="dropdown-item" href="./octogonal.html">Bandeja Octogonal</a></li>
                                    <li><a class="dropdown-item" href="./espejo.html">Espejo</a></li>
                                    <li><a class="dropdown-item" href="./mesa.html">Mesa Octogonal</a></li>
                                    <li><a class="dropdown-item" href="./estante.html">Estante</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</div>
</div>`