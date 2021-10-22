let menu = document.getElementById("menu");
let overlay = document.getElementById("overlay");
function openMenu() {
	menu.classList.remove("menu-hidden");
	menu.classList.add("menu-visible");
	overlay.style.opacity = ".5";
	overlay.style.pointerEvents = "auto";
}
function closeMenu() {
	menu.classList.remove("menu-visible");
	menu.classList.add("menu-hidden");
	overlay.style.opacity = "0";
	overlay.style.pointerEvents = "none";
}