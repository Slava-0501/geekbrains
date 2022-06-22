let button = document.querySelector('.header__burger-icon');

let navigation = document.querySelector('.header__nav');


button.addEventListener('click', () => { 
  navigation.classList.toggle('display-block');
});