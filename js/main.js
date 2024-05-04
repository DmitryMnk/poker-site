import { openModal } from "./functons.js";

const headerListButton = document.getElementById('header-lists');
const blackListButton = document.querySelector('.black-list-button');
const whiteListButton = document.querySelector('.white-list-button');

blackListButton.addEventListener('click', () => {
    openModal(true);
})

whiteListButton.addEventListener('click', () => {
    openModal(false);
})

headerListButton.addEventListener('click', () => {
    openModal(true)
})