import { openModal } from "./functons.js";
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const headerListButton = document.getElementById('header-lists');
const blackListButton = document.querySelector('.black-list-button');
const whiteListButton = document.querySelector('.white-list-button');
const swiperBlock = document.querySelector('.swiper__swiper');

blackListButton.addEventListener('click', () => {
    openModal(true);
})

whiteListButton.addEventListener('click', () => {
    openModal(false);
})

headerListButton.addEventListener('click', () => {
    openModal(true)
})

var swiper = new Swiper(swiperBlock, {
    spaceBetween: 10,
    slidesPerView: 6,
    loop: true,
    freeMode: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });