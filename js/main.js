const chk = document.getElementById("chk");

chk.addEventListener("change", () => {
	document.body.classList.toggle("light");
});

function myNav() {
	let bar = document.querySelector(".navigation__bars-menu");
	let nav = document.querySelector(".navigation__links");
	bar.onclick = () => {
		if (nav.style.left == "0%") {
			nav.style.left = "-100%";
			bar.src = "/images/menu.png";
		} else {
			nav.style.left = "0%";
			bar.src = "/images/x.png";
		}
	};
}

myNav();
