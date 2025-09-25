/**
 * Header
 */
const menu = document.querySelector(".menu");
const navHeader = document.querySelector(".headerNav");

menu.addEventListener('click', function () {
  // Alterna a visibilidade do menu
  navHeader.classList.toggle("active");
});

window.addEventListener('resize', function () {
  // Alterna a visibilidade do menu
  navHeader.classList.remove("active");
});