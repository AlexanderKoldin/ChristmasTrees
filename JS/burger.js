// let burgerActive = false;

// function toggleBurger() {
//   const burger = document.querySelector('.header__burger');
//   burgerActive = !burgerActive;
//   burger.classList.toggle('burger_active', burgerActive);
// }

const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');

burger.addEventListener('click', () => {
	burger.classList.toggle('burger_active');
	navigation.classList.toggle('navigation_activ');
});
