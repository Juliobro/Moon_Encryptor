
//This function simply checks which option caused the change (the selected language) and redirects to the corresponding page if applicable.
function languageSwitcher(option) {
  option.id === 'english-lang'
    ? location.href = './index.html'
    : location.href = './es.html';
}