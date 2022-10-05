const footer = document.getElementById("footerPages")
footer.innerHTML = `<div class="container">
<div class="row justify-content-around">
    <div class="col-3 footer__nav__col">
        <nav class="footer__nav">
            <ul class="indice_footer">
                <li class="titulo_footer_li">Categorias</li>
                <li><a href="./banquito.html">Banquito</a></li>
                <li><a href="./candelabro.html">Candelabro</a></li>
                <li><a href="./hexagonal.html">Bandeja Hexagonal</a></li>
                <li><a href="./octogonal.html">Bandeja Octogonal</a></li>
                <li><a href="./espejo.html">Espejo</a></li>
                <li><a href="./mesa.html">Mesa Octogonal</a></li>
                <li><a href="./estante.html">Estante</a></li>
            </ul>
        </nav>
    </div>
    <div class="col-4 footer__div__contacto__col">
        <div class="footer__div__contacto">
            <div class="contacto__escrito">
                <h3>Contactános</h3>
                <p><img src="../images/mini_mail.png" alt="Signo Mail" class="mini_mail_footer" /> estudiovikanhd@gmail.com</p>
                <p><img src="../images/mini_tel.png" alt="Signo Telefono" class="mini_tel_footer" /> +5491131348073</p>
            </div>
            <div class="boton__telefono__contacto">
                <h3>Contactános</h3>
                <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <img src="../images/mini_tel.png" alt="Signo Telefono" class="mini_tel_footer" />
                </button>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Telefono</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body text-center">+5491131348073</div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="boton__mail__contacto">
                <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                    <img src="../images/mini_mail.png" alt="Signo Mail" class="mini_mail_footer" />
                </button>
                <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Mail</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body text-center">estudiovikanhd@gmail.com</div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-3 footer__div__link__col">
        <div class="footer__div__link">
            <h3>Sigamos Contectados</h3>
            <p>
                <a href="http://www.instagram.com/vikan.hd/" target="”_blank”"><img src="../images/pixel instagram.png" alt="Icono Instagram" class="footer_instagram rounded-circle shadow" /></a>
            </p>
            <p>
                <a href="https://wa.me/5491131348073?text=Hola%20quiero%20hacer%20una%20consulta" target="”_blank”"><img src="../images/pixel whatsapp.png" alt="Icono Whatsapp" class="footer_whatsapp rounded-circle shadow" /></a>
            </p>
            <p>&copy Marcos Buratovich</p>
        </div>
    </div>
</div>
</div>`