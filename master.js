let btnSlideRight = document.getElementById("btn-slide-right")
let btnSlideLeft = document.getElementById("btn-slide-left")
let contenedorBaner =  document.getElementById("contenedor-banner")

btnSlideLeft.addEventListener( "click", () => {
	contenedorBaner.style.transform = "rotate(7deg)";

})
