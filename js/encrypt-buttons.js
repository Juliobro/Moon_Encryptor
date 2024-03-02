/* Text areas */
const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');
const initialInfo = document.querySelector('.output-area__initial-info');

/* Cipher modes */
const alura = document.getElementById('alura');
const caesar = document.getElementById('caesar');

/* Width controller */
const windowWidth = window.innerWidth;

/* Copy elements */
const copyBtn = document.querySelector('.output-area__copy-button');
const copyBtnMobile = document.querySelector('.output-area__copy-button-mobile')
const copyImg = document.getElementById('copy');
const copiedImg = document.getElementById('copied');

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

  showCopyButton();
  manageOutputArea();
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

  showCopyButton();
  manageOutputArea();
}


//Manage output area for a better and confortable style
function manageOutputArea() {
  initialInfo.style.display = inputText.value == '' ? 'flex' : 'none';
  outputText.style.minHeight = windowWidth <= 764 && inputText.value !== '' ? '350px' : '150px';
}

//Just returns the output area to its original state when input area is empty
inputText.addEventListener('input', function() {
  if (this.value === '') {
    initialInfo.style.display = 'flex';
    outputText.style.minHeight = '150px';
    outputText.value = '';
    copyBtn.classList.remove('copy-active');
    copyBtnMobile.style.display = 'none';
  }
});

//Show the copy button and his styles depending of the window width
function showCopyButton() {
  if (windowWidth <= 956) {
    copyBtnMobile.style.display = 'block';
  } else {
    copyBtn.classList.add('copy-active');
    copyImg.style.display = 'inline-block';
    copiedImg.style.display = 'none';
  }
}

//Just a listener to copy the output text value to the clipboard and add styles
function copy(button) {
  button.addEventListener('click', () => {
    navigator.clipboard.writeText(outputText.value)
    copyImg.style.display = 'none';
    copiedImg.style.display = 'inline-block';
  });
}

copy(copyBtn);
copy(copyBtnMobile);