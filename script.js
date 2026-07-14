let menu = document.querySelector('#menu-icon');
let navigation = document.querySelector('.navigation');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navigation.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navigation.classList.remove('open');
}