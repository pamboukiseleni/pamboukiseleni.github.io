const f = document.getElementByID ("foo");
document.addEventListener(
	"click",
	(ev) => {
		f.style.transform= `translateY(${ev.clientY - 25}px)`;
		f.style.transform= `translateX(${ev.clientX - 25}px)`;
	},
	false,
	);