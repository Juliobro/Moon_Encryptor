
//Toggle between page themes and save the selected theme in local storage with each button click
switchBtn.addEventListener('click', () => {
  rootClass.toggle('light');
  rootClass.toggle('dark');
  localStorage.setItem('theme', rootClass.contains('dark') ? 'dark' : 'light');
  imgSetter();
});