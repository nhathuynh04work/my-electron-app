const player1 = document.getElementById("player-1");
const player2 = document.getElementById("player-2");
const btnRemove = document.getElementById("btn-remove");
const modalNotifyWinner = document.getElementById("modal-notify-winner");
const overlay = document.getElementById("overlay");
const piles = Array.from(document.querySelectorAll(".pile"));

let activePlayer = "player-1";
setActivePlayer();

btnRemove.addEventListener("click", () => {
	const count = countRemainingObjects();

	if (count === 0) {
		document.getElementById("winner").innerText = activePlayer;
		overlay.style.display = "block";
		modalNotifyWinner.style.display = "block";
	} else {
		activePlayer = activePlayer === "player-1" ? "player-2" : "player-1";

		player1.classList.remove("active-player");
		player2.classList.remove("active-player");

		setActivePlayer();
	}
});

function countRemainingObjects() {
	let count = 0;

	piles.forEach((pile) => {
		count += pile.children.length;
	});

	return count;
}

function setActivePlayer() {
	if (activePlayer === "player-1") {
		player1.classList.add("active-player");
	} else {
		player2.classList.add("active-player");
	}
}
