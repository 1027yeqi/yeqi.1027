const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
const search = document.querySelector('.search');
const iconSearch = document.querySelector('.icon-search');

menu.addEventListener('click', () => {
  menu.classList.toggle('icon-menu');
  menu.classList.toggle('icon-cross');
  nav.classList.toggle('down');
  document.querySelectorAll('nav li a').forEach(link => link.classList.remove('down'));
  search.classList.remove('down');
  iconSearch.classList.remove('icon-cross');
});

// 确保菜单打开时图标状态正确
document.querySelectorAll('nav li a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.add('icon-menu');
    menu.classList.remove('icon-cross');
    nav.classList.toggle('down');
  });
});

// 显示或隐藏搜索栏，确保如果菜单已打开则隐藏菜单，并确保菜单图标状态正确
iconSearch.addEventListener('click', () => {
  iconSearch.classList.toggle('icon-cross');
  menu.classList.add('icon-menu');
  menu.classList.remove('icon-cross');
  search.classList.toggle('down');
  nav.classList.remove('down');
});