const d = document;

function hamburgerMenu(panelbtn, panel_aside) {
  d.addEventListener("click", (e) => {
    if (e.target.matches(panelbtn)||e.target.matches(`${panelbtn} *`))
      d.querySelector(panel_aside).classList.toggle("is-active")
      d.querySelector(panelbtn).classList.toggle("is-active")
    return
  })
}
d.addEventListener('DOMContentLoaded', e => {
  hamburgerMenu(".btn_menu", ".header__menu");

})
console.log(hamburgerMenu)