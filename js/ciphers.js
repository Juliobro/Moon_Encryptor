/* ------------------ Alura Encryption ------------------ */
const aluraCoders = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"]
];

function aluraEncrypt(text) {
  for (let [original, encrypted] of aluraCoders) {
    text = text.replaceAll(original, encrypted);
  }
  return text;
}

function aluraDecrypt(text) {
  const aluraCodersReversed = [...aluraCoders].reverse(); //It's used to avoid certain bugs

  for (let [original, encrypted] of aluraCodersReversed) {
    text = text.replaceAll(encrypted, original);
  }
  return text;
}


/* -------------------- Caesar Cipher -------------------- */
const ABC = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", 
  "j", "k", "l", "m", "n", "ñ", "o", "p", "q", 
  "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

function caesarEncrypt(text) {
  let encryptedText = '';

  for (let char of text) {
    let position = ABC.indexOf(char);  //Take each char of the text and determine at which index that char is within the ABC

    if (position !== -1) {                   //If the char retrieved exists in the ABC
      let newPosition = (position + 3) % ABC.length;  //It will be moved 3 positions forward in ABC, and it will be checked whether it exceeds the array limit. In case it exceeds the limit, it will be assigned as the new position the remainder of dividing (position + 3) by 27
      encryptedText += ABC[newPosition];    //And finally will be added to the end of encryptedText string

    } else {
      encryptedText += char;  //This was primarily made for the spaces within the "text" string
    }
  }
  return encryptedText;
}

function caesarDecrypt(text) {
  let decryptedText = '';

  for (let char of text) {
    let position = ABC.indexOf(char);

    if (position !== -1) {
      let newPosition = (position - 3 + ABC.length) % ABC.length;
      decryptedText += ABC[newPosition];

    } else {
      decryptedText += char;
    }
  }
  return decryptedText;
}


/* -------------------- Vigenere Cipher -------------------- */
const key = "moon";

function vigenereEncrypt(text) { //It is similar to the previous function in the sense that it takes the alphabet as an environment to navigate and the position of each character in it matters. However, the new position of the character also depends on the position of our key ("moon") in the alphabet. Therefore, before adding it to the new text string, we must select the corresponding "key" character to the "text" character, find its position in the ABC, and then verify where both characters converge in the ABC to find the new character and finally add it. I think it is better understood by reading the code; I don't want to go too far with explanations.
  let encryptedText = '';
  let keyIndex = 0;

  for (let char of text) {
    let position = ABC.indexOf(char);

    if (position !== -1) {
      let keyChar = key[keyIndex % key.length];
      let keyPosition = ABC.indexOf(keyChar);

      let newPosition = (position + keyPosition) % ABC.length;
      encryptedText += ABC[newPosition];

      keyIndex++;
    } else {
      encryptedText += char;
    }
  }
  
  return encryptedText;
}

function vigenereDecrypt(text) {
  let decryptedText = '';
  let keyIndex = 0;

  for (let char of text) {
    let position = ABC.indexOf(char);

    if (position !== -1) {
      let keyChar = key[keyIndex % key.length];
      let keyPosition = ABC.indexOf(keyChar);

      let newPosition = (position - keyPosition + ABC.length) % ABC.length;
      decryptedText += ABC[newPosition];

      keyIndex++;
    } else {
      decryptedText += char;
    }
  }

  return decryptedText;
}


/* ----------------- Text format to encrypt ----------------- */
const ruleZone = document.querySelector('.input-area__info')

const originalVowel= [
  ["á", "a"],
  ["é", "e"],
  ["í", "i"],
  ["ó", "o"],
  ["ú", "u"],
  ["ü", "u"],
]

//This function convert uppercase letters to lowercase, then remove accents from the letters, and finally, delete any char that is not a standard letter, space or line break. If there is no changes to do, the function just returns the original text.
function formatText(text) {
  let cleanText = text.replaceAll(/\s/g, ''); //Exclude every space in the text before performing the check with charsInABC
  let charsInABC = cleanText.split('').every(char => ABC.includes(char));  //Convert the text without spaces into an array where each character is an element. Then check if each one is in the ABC
  //In the affirmative case the function will simply return the text it received as a parameter. If at least one character is not in the ABC, the function will proceed with the rest of the process until returning finalText.
  if (charsInABC) {
    return text;
  }
  
  text = text.toLowerCase()

  for (let [accent, standard] of originalVowel) {
    text = text.replaceAll(accent, standard);
  }

  let finalText = '';
  for (let char of text) {
    finalText += ABC.includes(char) || char === ' ' || char === '\n' ? char : '';
  }
  
  //This part of the function is simply a small manual animation that highlights the rules to the user when wanting to write the message.
  ruleZone.style.backgroundColor = 'var(--area-info-advice)';

  setTimeout(() => {
    ruleZone.style.transition = 'background-color 1s ease';
    ruleZone.style.backgroundColor = 'var(--primary)';
    setTimeout(() => {
      ruleZone.style.transition = 'none';
      ruleZone.style.backgroundColor = 'none';
    }, 800)
  }, 500);
  
  return finalText;
}