const btnPlayVsComputer = document.getElementById("btn-play-vs-computer");
const btnPlayVsPlayer = document.getElementById("btn-play-vs-player");
const btnRules = document.getElementById("btn-rules");
const btnStatistics = document.getElementById("btn-statistics");
const modalPlayVsComputer = document.getElementById("modal-play-vs-computer");
const modalPlayVsPlayer = document.getElementById("modal-play-vs-player");
const overlay = document.getElementById("overlay");
const btnCancelPlayVsComputer = document.querySelector(
	"#modal-play-vs-computer #btn-cancel"
);
const btnStartPlayVsComputer = document.querySelector(
	"#modal-play-vs-computer #btn-start"
);
const btnCancelPlayVsPlayer = document.querySelector(
	"#modal-play-vs-player #btn-cancel"
);
const btnStartPlayVsPlayer = document.querySelector(
	"#modal-play-vs-player #btn-start"
);

// Handling logic for when user click on "Play with computer" button
btnPlayVsComputer.addEventListener("click", () => {
	overlay.style.display = "block";
	modalPlayVsComputer.style.display = " block";

	btnCancelPlayVsComputer.onclick = () => {
		overlay.style.display = "none";
		modalPlayVsComputer.style.display = " none";
	};

	btnStartPlayVsComputer.onclick = handleStartVsComputer;
});

function handleStartVsComputer() {
	const difficulty = document.querySelector(
		'input[name="difficulty"]:checked'
	).value;

	const numPiles = parseInt(
		document.querySelector("#form-play-vs-computer #numPiles").value,
		10
	);

	const objPerPile = parseInt(
		document.querySelector("#form-play-vs-computer #objPerPile").value,
		10
	);

	const setupData = {
		difficulty,
		numPiles,
		objPerPile,
	};

	const query = new URLSearchParams(setupData).toString();
	window.location.href = `./pages/play-vs-computer.html?${query}`;
}

// Handling logic for when user click on "Play with player" button
btnPlayVsPlayer.addEventListener("click", () => {
	overlay.style.display = "block";
	modalPlayVsPlayer.style.display = " block";

	btnCancelPlayVsPlayer.onclick = () => {
		overlay.style.display = "none";
		modalPlayVsPlayer.style.display = " none";
	};

	btnStartPlayVsPlayer.onclick = handleStartVsPlayer;
});

function handleStartVsPlayer() {
	const difficulty = document.querySelector(
		'input[name="difficulty"]:checked'
	).value;

	const numPiles = parseInt(
		document.querySelector("#form-play-vs-player #numPiles").value,
		10
	);

	const objPerPile = parseInt(
		document.querySelector("#form-play-vs-player #objPerPile").value,
		10
	);

	const setupData = {
		difficulty,
		numPiles,
		objPerPile,
	};

	const query = new URLSearchParams(setupData).toString();
	window.location.href = `./pages/play-vs-player.html?${query}`;
}

// Handling logic for when user click on "Rules" button
btnRules.addEventListener("click", () => {
	window.location.href = "./pages/rules.html";
});

// Handling logic for when user click on "Statistics" button
btnStatistics.addEventListener("click", () => {
	window.location.href = "./pages/statistics.html";
});


////////////// REMEMBER
function handleStart(option) {
	const difficulty = document.querySelector(
		'input[name="difficulty"]:checked'
	).value;

	const numPiles = parseInt(
		document.querySelector("#form-play-vs-computer #numPiles").value,
		10
	);

	const objPerPile = parseInt(
		document.querySelector("#form-play-vs-computer #objPerPile").value,
		10
	);

	if (option === "vsComputer") {
		const setupData = {
			difficulty,
			numPiles,
			objPerPile,
		};
	}

	if (option === "vsPlayer") {
	}

	const query = new URLSearchParams(setupData).toString();
	window.location.href = `./pages/play-vs-computer.html?${query}`;
}
