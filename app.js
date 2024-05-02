

// ....menu toggle....

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

