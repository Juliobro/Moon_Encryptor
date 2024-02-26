/* Language section variables */
const langBtn = document.getElementById('language');
const langMenu = document.querySelector('.language-options');

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
    radios[i].addEventListener('change', function() {  //Add listener to each input radio

      //This section doesn't run until the 'change' event is triggered (until there is a change in the group of radios)
      for (let j = 0; j < radios.length; j++) {
        let li = radios[j].parentNode;
        li.classList.remove('selected-radio');
      }
      
      let liSelected = this.parentNode;    //"this" points to the input radio that triggered the change in the radio group
      liSelected.classList.add('selected-radio');
    });
  }
}

//Pick up the label vinculed to the selected radio and insert its text to the main label
function updateLabelText(label, radio) {
  if (radio.checked) {
    label.textContent = radio.nextElementSibling.textContent;
  }
}


dropDownMenu(langBtn, langMenu); 
dropDownMenu(cipherModeBtn, cipherMenu);
optionSelector(cipherRadios);