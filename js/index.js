//burger

const burger = document.querySelector('.burger')
const menu = document.querySelector('.header__nav')
const menuLinks = document.querySelectorAll('.header__link')

burger.addEventListener('click', function(){

  burger.classList.toggle('burger--active')

  menu.classList.toggle('header__nav--active')

  document.body.classList.toggle('stop-scroll')
})

menuLinks.forEach(function(link){
  link.addEventListener('click', function(){

    burger.classList.remove('burger--active')

    menu.classList.remove('header__nav--active')

    document.body.classList.remove('stop-scroll')
  })
})


// search

const searchbar = document.querySelector('.searchbar')
const searchbarButton = document.querySelector('.searchbar__button')
const searchbarClose = document.querySelector('.searchbar__image')


searchbarButton.addEventListener('click', function(){
  searchbar.classList.add('searchbar--active')
})

searchbarClose.addEventListener('click', function(){
  searchbar.classList.remove('searchbar--active')
})

//slider

const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  a11y: {
    paginationBulletMessage: 'Слайд {{index}}'
  },
})

// section work

const tabsButton = document.querySelectorAll(".work__list-button");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsButton.forEach(function (tab) {

  tab.addEventListener("click", function () {

    let tabId = tab.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    tabsButton.forEach(function (tab) {

      tab.classList.remove("active");
    });

    tabsItems.forEach(function (currentTab) {

      currentTab.classList.remove("active");
    });

    tab.classList.add("active");
    currentTab.classList.add("active");
  });
});

// section questions

$(".accordion").accordion({
  heightStyle: "content",
  collapsible: true,
  active:false,
  icons: false,
});
