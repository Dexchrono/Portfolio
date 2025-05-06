// swiper

const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
  });

// tabs 

document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn) {
  tabsBtn.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.tabs-nav__btn').forEach(function(btn) {
      btn.classList.remove('tabs-nav__btn--active')});
      e.currentTarget.classList.add('tabs-nav__btn--active');
      document.querySelectorAll('.tabs-item').forEach(function(tabsBtn) {
      tabsBtn.classList.remove('tabs-item--active')});

    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

// accordion

new Accordion('.faq__list')

// burger

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header__nav-list-item-link');

burger.addEventListener('click',

    function () {
        burger.classList.toggle('burger--active');

        menu.classList.toggle('header__nav--active');

        document.body.classList.toggle('stop-scroll');
    })

menuLinks.forEach(function (el) {
    el.addEventListener('click', function () {

        burger.classList.remove('burger--active');
        
        menu.classList.remove('header__nav--active');

        document.body.classList.remove('stop-scroll');
    })
})

// search input

let search = document.querySelector('.header__search');
let searchOpen = document.querySelector('.header__search-btn');

searchOpen.addEventListener('click', 
  
  function () {
    search.classList.toggle('header-search--active');
  }
)

