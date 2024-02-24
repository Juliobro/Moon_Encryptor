/* Language section variables */
const langBtn = document.getElementById('language');
const langMenu = document.querySelector('.language-options');
const langRadios = document.querySelectorAll('[name="languages"]');
const langLabel = document.getElementById('language-selection');

/* Cipher Mode section variables */
const cipherModeBtn = document.getElementById('cipher-selector-button');
const cipherMenu = document.querySelector('.modes-mobile__cipher-options');
const cipherRadios = document.querySelectorAll('[name="cipher-modes-mobile"]');
const cipherLabel = document.getElementById('modes-selector-label');


/* ------------------------------ Functions zone ------------------------------ */
function dropDownMenu(checkbox, menu) {
  document.addEventListener('click', (event) => {
    if (event.target !== checkbox) {
      checkbox.checked = false;
    }
    menu.style.display = checkbox.checked ? 'block' : 'none';
  });
}

function optionSelector(radios) {
  for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('change', function() {  //for each input radio

      for (let j = 0; j < radios.length; j++) {
        let li = radios[j].parentNode;
        li.classList.remove('selected-radio');
      }
        let liSelected = this.parentNode;    //"this" points to the input radio that triggered the change in the radio group
        liSelected.classList.add('selected-radio');
    });
  }
}

function updateLabelText(label, radio) {
  if (radio.checked) {
    label.textContent = radio.nextElementSibling.textContent;
  }
}


dropDownMenu(langBtn, langMenu); dropDownMenu(cipherModeBtn, cipherMenu);
optionSelector(langRadios); optionSelector(cipherRadios);