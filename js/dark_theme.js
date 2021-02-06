const switchInput = document.getElementById('switch');
const currentTheme= localStorage.getItem("data-theme")
/* const styles = document.documentElement.style; */

/* const lightTheme = {
  '--bg-color': 'hsl(0,0%,100%)',
  '--text-color': 'hsl(200,15%,8%)',
  '--moon-bg': 'hsl(0,0%,52%)',
  '--sun-bg': 'hsl(40, 67%, 58%)',
  '--card-bg': 'hsl(0,%,98%)'
};

const darkTheme = {
  '--bg-color': 'hsl(207,26%,17%)',
  '--text-color': 'hsl(0,0%,100%)',
  '--moon-bg': 'hsl(40, 67%, 58%)',
  '--sun-bg': 'hsl(0,0%,52%)',
  '--card-bg': 'hsl(209,23%,22%)'
};

const changeTheme = theme => {
  const customStyles = Object.keys(theme);
  for (const style of customStyles) {
    styles.setProperty(style, theme[style]);
  }
};
 */
if(currentTheme){
  document.documentElement.setAttribute('data-theme',currentTheme)
  if (currentTheme==="dark") {
    switchInput.checked=true

  }
}
const switchTheme = e => {
  if (e.target.previousElementSibling.checked) {
    document.documentElement.setAttribute("data-theme", "light")
    localStorage.setItem('data-theme', 'light')
  } else {
    document.documentElement.setAttribute("data-theme", "dark")
    localStorage.setItem('data-theme', 'dark')
  }

}
/* switchInput.addEventListener('change', e => {
  ? changeTheme(lightTheme)
  :changeTheme(darkTheme);
}); */
switchInput.addEventListener('click', switchTheme, false);