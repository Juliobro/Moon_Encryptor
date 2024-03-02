/* Image selection */
const logo = document.getElementById('logo');
const langArrow = document.getElementById('lang-arrow');
const cipherArrow = document.getElementById('cipher-arrow');
const infoIcon = document.getElementById('info-icon');
const copyIcon = document.getElementById('copy-icon');
const copiedIcon = document.getElementById('copied-icon');
const githubIcon = document.getElementById('github-icon');
const linkedinIcon = document.getElementById('linkedin-icon');
const aluraIcon = document.getElementById('alura-icon');
const notFoundWoman = document.getElementById('not-found-woman');

/* Theme mode selectors */
const rootClass = document.documentElement.classList;
const switchBtn = document.querySelector('.switch');

/* ---------------------------- Image setter ---------------------------- */

//Check the page theme to add the corresponding images and set theme switch visual position
function imgSetter() {
  if (rootClass.contains('dark')) {
    switchBtn.classList.add('active');

    logo.src = "img/logo/moon-encryptor-logotext-light.png";
    langArrow.src = "img/icons/dark-mode/arrow-light.png";
    cipherArrow.src = "img/icons/dark-mode/arrow-light.png";
    infoIcon.src = "img/icons/dark-mode/info-icon-light.png";
    copyIcon.src = "img/icons/dark-mode/copy-icon-light.png"
    copiedIcon.src = "img/icons/dark-mode/check-icon-light.png"
    githubIcon.src = "img/icons/dark-mode/github-icon-light.png";
    linkedinIcon.src = "img/icons/dark-mode/linkedin-icon-light.png";
    aluraIcon.src = "img/icons/dark-mode/alura-icon-light.png";
    notFoundWoman.src = "img/not-found-dark.png";
  } else {
    switchBtn.classList.remove('active');

    logo.src = "img/logo/moon-encryptor-logotext.png";
    langArrow.src = "img/icons/arrow-down-svgrepo-com.svg";
    cipherArrow.src = "img/icons/arrow-down-svgrepo-com.svg";
    infoIcon.src = "img/icons/info-circle-svgrepo-com.svg";
    copyIcon.src = "img/icons/copy-icon.png"
    copiedIcon.src = "img/icons/check-icon.png"
    githubIcon.src = "img/icons/github-svgrepo-com.svg";
    linkedinIcon.src = "img/icons/linkedin-svgrepo-com.svg";
    aluraIcon.src = "img/icons/alura-icon.png";
    notFoundWoman.src = "img/not-found.png";
  }
}

//Set images when DOM content is loaded
document.addEventListener('DOMContentLoaded', imgSetter());