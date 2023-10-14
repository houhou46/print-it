const slides = [
	// 0
	{
		"image": "slide1.jpg",
		"src": './assets/images/slideshow/slide1.jpg', "alt": 'banniereprint-it',
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	// 1
	{
		"image": "slide2.jpg",
		"src": './assets/images/slideshow/slide2.jpg', "alt": 'banniereprint-it',
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	// 2
	{
		"image": "slide3.jpg",
		"src": './assets/images/slideshow/slide3.jpg', "alt": 'banniereprint-it',
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	// 3
	{
		"image": "slide4.png",
		"src": './assets/images/slideshow/slide4.png', "alt": 'banniereprint-it',
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
// Cherche et enregistre l'élément sur lequel on veut un event listener dans la variable globale (pour la flèche gauche en premier puis droite)
const arrowClickRight = document.getElementById("right")
const arrowClickLeft = document.getElementById("left")
const images = document.getElementById("banners")
const tagLine = document.getElementById("text")
const dots = document.getElementsByClassName('dot')
let position = 0


// Création de l'event listener( fonction chargé d'écouter un évenement).La fonction n'a pas de nom elle est anonyme
arrowClickLeft.addEventListener("click", () => {
	position--
	if (position < 0) {
		position = slides.length - 1
	}
	images.src = slides[position].src
	tagLine.innerHTML = slides[position].tagLine
})


arrowClickRight.addEventListener("click", arrowRight)

function arrowRight() {
	dots[position].classList.remove('dot_selected')
	position++
	if (position >= slides.length) {
		position = 0
	}
	images.src = slides[position].src
	tagLine.innerHTML = slides[position].tagLine
	dots[position].classList.add('dot_selected')
}

