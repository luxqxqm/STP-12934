const buttons = document.querySelectorAll('[data-button]');

buttons.forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();

    const item = button.closest('[data-item]');
    const answer = item.querySelector('[data-answer]');
    const svg = item.querySelector('[data-svg]');

    answer.classList.toggle('active');
    button.classList.toggle('plus');

    if (svg.href.baseVal.includes('icon-plus')) {
      svg.href.baseVal = '../img/sprite.svg#icon-minus';
    } else {
      svg.href.baseVal = '../img/sprite.svg#icon-plus';
    }
  });
});
