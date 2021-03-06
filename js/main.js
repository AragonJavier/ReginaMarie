const close = document.querySelectorAll(".close")[0];
const open = document.querySelectorAll(".btn_modal")[0];
const modal = document.querySelectorAll(".modal")[0];
const modal_container = document.querySelectorAll(".modal_container")[0];

open.addEventListener("click", e => {
    e.preventDefault();
    modal_container.style.opacity = "1"
    modal_container.style.visibility = "visible";
    modal.classList.toggle("modal_close")
});

close.addEventListener("click", e => {
    modal.classList.toggle("modal_close");
    modal_container.style.opacity = "0"
    modal_container.style.visibility = "hidden";
});
