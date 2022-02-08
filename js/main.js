var nav = document.querySelector("nav");

// window.addEventListener("scroll", function () {
//   if (window.pageYOffset > 100) {
//     nav.classList.add("bg-dark", "shadow");
//   } else {
//     nav.classList.remove("bg-dark", "shadow");
//   }
// });

window.onscroll = function() {scrollFunction()};
var headerScroll = document.querySelectorAll('.navbar-toggler')[0];
var navBlock = document.querySelector('#myDIV');
function scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
if (document.documentElement.scrollTop > 320) {
headerScroll.style.display = 'block';
navBlock.style.display = 'none';
document.querySelector('#brand-logo').classList.remove("img-fluid");
document.querySelector('#brand-logo').style.height = "80px"
document.querySelector('nav').classList.add("shadow");
} else {
  headerScroll.style.display = "none";
navBlock.style.display = 'block';
document.querySelector('#brand-logo').classList.add("img-fluid");
document.querySelector('#brand-logo').style.height = "auto"
// document.getElementById("logo").style.fontSize = "35px";
}
}
