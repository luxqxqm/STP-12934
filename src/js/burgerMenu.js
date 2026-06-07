const openBtn = document.querySelector('[data-menu-open]');
const closeBtn = document.querySelector('[data-menu-close]');
const menu = document.querySelector('[data-visible]');

openBtn.addEventListener('click', e => {
  e.preventDefault();
  menu.dataset.visible = 'open';
  document.body.classList.add('no-scroll');
});

closeBtn.addEventListener('click', e => {
  e.preventDefault();
  menu.dataset.visible = 'close';
  document.body.classList.remove('no-scroll');
});
