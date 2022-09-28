const imagenes = document.getElementsByClassName('img-hidden')
indice = 0


window.setInterval(desplazarBanner, 10000)
desplazarBanner( indice )

function desplazarBanner( n = 1){
	indice += n

	if ( indice > imagenes.length - 1) indice = 0
	if ( indice < 0 ) indice = imagenes.length - 1

	
	for( imagen of imagenes ){
		imagen.style.display = 'none'
		imagen.style.opacity = '0'
	}
	imagenes[indice].style.display = 'block'
	imagenes[indice].style.opacity = '1'

	
}