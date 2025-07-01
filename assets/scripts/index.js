// Buttons in the menu
const btnPlayVsComputer = document.getElementById("btn-play-vs-computer");
const btnPlayVsPlayer = document.getElementById("btn-play-vs-player");
const btnRules = document.getElementById("btn-rules");
const btnStatistics = document.getElementById("btn-statistics");

//Buttons on the VS Computer modal
const btnCancelPlayVsComputer = document.querySelector(
	"#modal-play-vs-computer #btn-cancel"
);
const btnStartPlayVsComputer = document.querySelector(
	"#modal-play-vs-computer #btn-start"
);

//Buttons on the VS Player modal
const btnCancelPlayVsPlayer = document.querySelector(
	"#modal-play-vs-player #btn-cancel"
);
const btnStartPlayVsPlayer = document.querySelector(
	"#modal-play-vs-player #btn-start"
);

// The modals and overlay
const modalPlayVsComputer = document.getElementById("modal-play-vs-computer");
const modalPlayVsPlayer = document.getElementById("modal-play-vs-player");
const overlay = document.querySelector(".overlay");

// Handling logic for when user click on "Play with computer" button
btnPlayVsComputer.addEventListener("click", () => {
	overlay.style.display = "block";
	modalPlayVsComputer.style.display = " block";

	btnCancelPlayVsComputer.onclick = () => {
		overlay.style.display = "none";
		modalPlayVsComputer.style.display = " none";
	};

	btnStartPlayVsComputer.onclick = () => {
		window.location.href = "./pages/play-vs-computer.html";
	};
});

// Handling logic for when user click on "Play with player" button
btnPlayVsPlayer.addEventListener("click", () => {
	overlay.style.display = "block";
	modalPlayVsPlayer.style.display = " block";

	btnCancelPlayVsPlayer.onclick = () => {
		overlay.style.display = "none";
		modalPlayVsPlayer.style.display = " none";
	};

	btnStartPlayVsPlayer.onclick = () => {
		window.location.href = "./pages/play-vs-player.html";
	};
});

// Handling logic for when user click on "Rules" button
btnRules.addEventListener("click", () => {
	window.location.href = "./pages/rules.html";
});

// Handling logic for when user click on "Statistics" button
btnStatistics.addEventListener("click", () => {
	window.location.href = "./pages/statistics.html";
});
