let  swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
        delay: 5000,
      },
    mousewheel: true,
    keyboard: true,
  });


const modal = document.querySelector('.open__menu-style');
const openButton = document.getElementById('open');
const closeButton = document.querySelector('.close')

openButton.addEventListener('click',()=>{
    modal.classList.add('open__menu-style--active');
    openButton.classList.add('open-button-disabled');
    closeButton.classList.add('close-active')
})
closeButton.addEventListener('click',()=>{
    modal.classList.remove('open__menu-style--active');
    openButton.classList.remove('open-button-disabled');
    closeButton.classList.remove('close-active')
})