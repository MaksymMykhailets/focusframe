'use strict';
{
  let menuBtnOpen = document.querySelector('.menu-nav-btn-open');
  menuBtnOpen.addEventListener('click', function () {
    mobileMenuToggle();
  });

  let menuBtnClose = document.querySelector('.menu-nav-btn-close');
  menuBtnClose.addEventListener('click', function () {
    mobileMenuToggle();
  });

  let menu = document.querySelector('.menu-nav');
  function mobileMenuToggle() {
    menu.classList.toggle('active');
  }
}
