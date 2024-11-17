const toggleButton = document.querySelector('.header__toggle');
const navMenu = document.querySelector('.header__nav');

toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('header__nav--active');
    console.log('Menu toggled'); // 用于调试，查看按钮是否正常工作
});












  