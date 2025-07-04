import { saveMatchResult } from "./helpers.js";
import { selectedObjects } from "./state.js";

const player = document.getElementById("player");
const computer = document.getElementById("computer");
const btnRemove = document.getElementById("btn-remove");
const modalNotifyWinner = document.getElementById("modal-notify-winner");
const overlay = document.getElementById("overlay");
const params = new URLSearchParams(window.location.search);
const difficulty = params.get("difficulty") || "easy";
const piles = Array.from(document.querySelectorAll(".pile"));
const matchState = piles.map((pile) => pile.children.length);

let activePlayer = "player";
addClassActivePlayer();

btnRemove.addEventListener("click", () => {
	// If haven't select objects, remind player
	if (selectedObjects.length === 0) {
		remindSelectObject();
		return;
	}

	// Remove objects and then remove piles if have no objects
	updateDOM();

	// Count remaining objects
	let count = piles.reduce((acc, pile) => acc + pile.children.length, 0);

	if (count === 0) {
		saveMatchResult({
			player1: "Player1",
			player2: `Computer (${difficulty === "easy" ? "Easy" : "Hard"})`,
			winner: activePlayer,
			piles: matchState,
		});
		notifyWinner();
	} else {
		switchTurn();
		if (activePlayer === "player") {
			enableClick();
		} else {
			disableClick();
			performMove();
		}
	}
});

function notifyWinner() {
	document.getElementById("winner").innerText = activePlayer;
	overlay.style.display = "block";
	modalNotifyWinner.style.display = "block";
}

function switchTurn() {
	// Change the active player
	activePlayer = activePlayer === "player" ? "computer" : "player";

	// Remove active-player class
	player.classList.remove("active-player");
	computer.classList.remove("active-player");

	// Add active-player class to active player
	addClassActivePlayer();
}

function addClassActivePlayer() {
	if (activePlayer === "player") {
		player.classList.add("active-player");
	} else {
		computer.classList.add("active-player");
	}
}

function disableClick() {
	btnRemove.classList.add("dim", "unclickable");
	piles.forEach((pile) => pile.classList.add("unclickable"));
}

function enableClick() {
	btnRemove.classList.remove("dim", "unclickable");
	piles.forEach((pile) => pile.classList.remove("unclickable"));
}

function performMove() {
	if (difficulty === "easy") performEasyMove();
	else performHardMove();
}

function performEasyMove() {
	const remainingPiles = piles.filter((pile) => pile.children.length > 0);
	const selectedPile =
		remainingPiles[Math.floor(Math.random() * remainingPiles.length)]; // DOM Element
	const pileId = selectedPile.dataset.pileIndex;
	const objectId = Math.floor(Math.random() * selectedPile.children.length); // a number

	selectAndClickBtn(pileId, objectId);
}

function performHardMove() {}

function selectAndClickBtn(pileId, objectId) {
	const object = document.querySelector(
		`.pile[data-pile-index="${pileId}"] > .object[data-object-index="${objectId}"]`
	);

	setTimeout(() => {
		object.click();

		setTimeout(() => {
			btnRemove.click();
		}, 1000);
	}, 1000);
}

function updateDOM() {
	selectedObjects.forEach((obj) => {
		console.log(obj.isConnected);
		obj.remove();
	});

	piles.forEach((pile) => {
		if (pile.children.length === 0) {
			pile.remove();
		}
	});

	selectedObjects.length = 0;
}

function remindSelectObject() {
	Toastify({
		text: "Please select an object before removing it.",
		duration: 3000,
		gravity: "bottom",
		position: "center",
		style: {
			background: "#f44336",
			borderRadius: "4px",
		},
		stopOnFocus: true,
	}).showToast();
}
