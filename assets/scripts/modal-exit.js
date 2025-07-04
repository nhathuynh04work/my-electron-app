const modalReturnHome = document.getElementById("modal-return-home");
const btnExit = document.getElementById("btn-exit");
const btnExitWithoutSave = document.getElementById("btn-exit-without-save");
const btnSaveAndExit = document.getElementById("btn-save-and-exit");
const overlay = document.getElementById("overlay");
const btnHome = document.getElementById("btn-home");

// Handling logic for hen clicking on the home button
btnHome.addEventListener("click", () => {
	overlay.style.display = "block";
	modalReturnHome.style.display = "block";
});

// Handling logic for when clicking X button on the modal
btnExit.addEventListener("click", () => {
	overlay.style.display = "none";
	modalReturnHome.style.display = "none";
});

// Handling logic for when exit without save
btnExitWithoutSave.addEventListener("click", () => {
	returnHome();
});

// Handling logic for when save and exit
btnSaveAndExit.addEventListener("click", () => {
	returnHome();
});

// Helper function
const returnHome = () => {
	window.location.href = "../index.html";
};
