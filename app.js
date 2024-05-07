

// ....MENU....

const navMenu = document.getElementById("nav-menu");
const navHamburger = document.getElementById("nav-hamburger");
const navCloseBtn = document.getElementById("nav-closeBtn");
 
 //...openinig mobile menu...

 navHamburger.addEventListener("click", () => {
 	navMenu.classList.add("nav__menu--show");
 })

 //closing mobile menu

 navCloseBtn.addEventListener("click", () => {
 	navMenu.classList.remove("nav__menu--show");
 })

//closing menu when one of the links was clicked

const navLink = document.querySelectorAll(".nav__link");

navLink.forEach((n) => n.addEventListener("click", () => {
	navMenu.classList.remove("nav__menu--show");
}))



// ....SLIDER....

const slides = document.querySelectorAll(".slider__slides .slider__slide");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);


function initializeSlider() {
	if(slides.length > 0) {

		slides[slideIndex].classList.add("slider__slide--display");
		intervalId = setInterval(nextSlide, 5000);
		console.log(intervalId);
	}

}

function showSlide(index) {

	if(index>=slides.length) {
		slideIndex = 0;
	}
	else if(index < 0) {
		slideIndex = slides.length - 1;
	}

	slides.forEach((slide) => {
		slide.classList.remove("slider__slide--display");
	});
	slides[slideIndex].classList.add("slider__slide--display");

}

function prevSlide() {
	clearInterval(intervalId) //stops the slider if someone hits the previous button
	slideIndex--;
	showSlide(slideIndex);
}

function nextSlide() {
	slideIndex++;
	showSlide(slideIndex);
}

