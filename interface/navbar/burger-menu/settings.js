document.getElementsByClassName('navbar__burger')[0].onclick = function() {
   document.getElementsByClassName('navbar__list')[0].classList.toggle('navbar__list--active');
   document.getElementsByClassName('navbar__burger')[0].classList.toggle('navbar__burger--active');
   document.body.classList.toggle('lock');
}