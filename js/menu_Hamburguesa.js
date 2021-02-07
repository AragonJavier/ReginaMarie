//const d = document;
//
//function hamburgerMenu(btn, menu) {
//  d.addEventListener("click", (e) => {
//    if (e.target.matches(btn) || e.target.matches(`${btn} *`))
//      d.querySelector(menu).classList.toggle("is-active")
//    d.querySelector(btn).classList.toggle("is-active")
//    return
//  })
//}
//d.addEventListener('DOMContentLoaded', e => {
//  hamburgerMenu(".btn_menu", ".menu");
//
//});
//
((d) => {

	const $btn_menu = d.querySelector(".btn_menu"),
		$menu = d.querySelector(".menu");

	$btn_menu.addEventListener("click", (e) => {
		$btn_menu.firstElementChild.classList.toggle("none")
		$btn_menu.lastElementChild.classList.toggle("none")
		$menu.classList.toggle("is-active")
	})
})(document);