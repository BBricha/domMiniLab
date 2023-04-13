
let myHeading = document.getElementById("my-heading");
let hideButton = document.getElementById("hide-button");
let unhideButton = document.getElementById("unhide-button");

myHeading.textContent = "Hello, my name is Bader!";

hideButton.addEventListener("click", () => {
	myHeading.style.display = "none";
});

unhideButton.addEventListener("click", () => {
	myHeading.style.display = "block";
});