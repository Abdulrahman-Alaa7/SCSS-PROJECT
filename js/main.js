let toggler = document.querySelector(".the-toggler");
let nav = document.querySelector(".navbar");

toggler.onclick = function () {
  nav.classList.toggle("open");
};
