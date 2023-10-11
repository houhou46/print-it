const slides = [
	{
		"image":"slide1.jpg",
		"src" : './assets/images/slideshow/slide1.jpg' , "alt": 'banniereprint-it',
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"src" : './assets/images/slideshow/slide2.jpg' , "alt": 'banniereprint-it',
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"src" : './assets/images/slideshow/slide3.jpg' , "alt": 'banniereprint-it',
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"src" : './assets/images/slideshow/slide4.jpg' , "alt": 'banniereprint-it',
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let position = 0
const images = document.getElementById("banners")


// Cherche et enregistre l'élément sur lequel on veut un event listener dans la variable globale (pour la flèche gauche en premier puis droite)
let arrowClickLeft = document.getElementById("left")
console.log(arrowClickLeft)

// Création de l'event listener( fonction chargé d'écouter un évenement).La fonction n'a pas de nom elle est anonyme
arrowClickLeft.addEventListener("click", () => {
	position--
	if (position < 0) {
		position = slides.length
	}
	images.src = slides[position].src
	console.log(position)
	console.log("clic gauche")
})

let arrowClickRight = document.getElementById("right")
console.log(arrowClickRight)
arrowClickRight.addEventListener("click",() => {
	console.log("clic droit")
	position++
	if (position > slides.length) {
		position = 0
	}
	images.src = slides[position].src
	console.log(position)
	console.log(slides[position]) 
})


// for (let i = 0; i < arrowClickRight.length; i++) {
	//console.log(arrowClickLeft[i])







