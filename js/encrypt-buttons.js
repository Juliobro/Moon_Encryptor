/* Text areas */
const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');
const initialInfo = document.querySelector('.output-area__initial-info');

/* Cipher modes */
const alura = document.getElementById('alura');
const caesar = document.getElementById('caesar');

/* Width controller */
const windowWidth = window.innerWidth;

/* ------------------------------ Functions zone ------------------------------ */
function encrypt() {
  inputText.value = formatText(inputText.value);

  if (alura.checked) {
    outputText.value = aluraEncrypt(inputText.value);
  } else if (caesar.checked) {
    outputText.value = caesarEncrypt(inputText.value);
  } else {
    outputText.value = vigenereEncrypt(inputText.value);
  }

  manageOutputArea()
}

function decrypt() {
  inputText.value = formatText(inputText.value);

  if (alura.checked) {
    outputText.value = aluraDecrypt(inputText.value);
  } else if (caesar.checked) {
    outputText.value = caesarDecrypt(inputText.value);
  } else {
    outputText.value = vigenereDecrypt(inputText.value);
  }

  manageOutputArea()
}


//Manage output area for a better and confortable style
function manageOutputArea() {
  initialInfo.style.display = inputText.value == '' ? 'flex' : 'none';
  outputText.style.minHeight = windowWidth <= 764 && inputText.value !== '' ? '350px' : '150px';
}

//Just returns the output area to its original state
inputText.addEventListener('input', function() {
  if (this.value === '') {
    initialInfo.style.display = 'flex';
    outputText.style.minHeight = '150px';
    outputText.value = '';
  }
});