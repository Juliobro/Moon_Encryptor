/* Image selecion */
const logo = document.getElementById('logo');
const langArrow = document.getElementById('lang-arrow');
const cipherArrow = document.getElementById('cipher-arrow');
const infoIcon = document.getElementById('info-icon');
const githubIcon = document.getElementById('github-icon');
const linkedinIcon = document.getElementById('linkedin-icon');
const aluraIcon = document.getElementById('alura-icon');
const notFoundWoman = document.getElementById('not-found-woman');

/* Modes switcher */
const switchBtn = document.querySelector('.switch');
let darkMode = false;

/* ----------------------- Event actions ----------------------- */
switchBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  switchBtn.classList.toggle('active');

  if (darkMode) {

    logo.src = '../img/logo/moon-encryptor-logotext.png';
    langArrow.src = '../img/icons/arrow-down-svgrepo-com.svg'
    cipherArrow.src = '../img/icons/arrow-down-svgrepo-com.svg'
    infoIcon.src = '../img/icons/info-circle-svgrepo-com.svg';
    githubIcon.src = '../img/icons/github-svgrepo-com.svg';
    linkedinIcon.src = '../img/icons/linkedin-svgrepo-com.svg';
    aluraIcon.src = '../img/icons/alura-icon.png';
    notFoundWoman.src = '../img/not-found.png';

    darkMode = false;

  } else {
      
    logo.src = '../img/logo/moon-encryptor-logotext-light.png';
    langArrow.src = '../img/icons/dark-mode/arrow-light.png'
    cipherArrow.src = '../img/icons/dark-mode/arrow-light.png'
    infoIcon.src = '../img/icons/dark-mode/info-icon-light.png';
    githubIcon.src = '../img/icons/dark-mode/github-icon-light.png';
    linkedinIcon.src = '../img/icons/dark-mode/linkedin-icon-light.png';
    aluraIcon.src = '../img/icons/dark-mode/alura-icon-light.png';
    notFoundWoman.src = '../img/not-found-dark.png';

    darkMode = true;
  }
});