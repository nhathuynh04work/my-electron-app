import { selectedObjects } from "./state.js";

const gameCanvas = document.getElementById("game-canvas");
const btnRemove = document.getElementById("btn-remove");

// Get set up data through search params
const params = new URLSearchParams(window.location.search);
const numPiles = parseInt(params.get("numPiles"), 10);
const objPerPile = parseInt(params.get("objPerPile"), 10);

// Generating the piles and objects
gameCanvas.innerHTML = "";

for (let i = 0; i < numPiles; i++) {
	const pile = document.createElement("div");
	pile.className = "pile";
	pile.dataset.pileIndex = i;

	for (let j = 0; j < objPerPile; j++) {
		const obj = document.createElement("div");
		obj.className = "object";
		obj.dataset.objectIndex = j;

		obj.addEventListener("click", () => {
			// Remove all the selected objects
			selectedObjects.forEach((o) => o.classList.remove("selected"));
			selectedObjects.length = 0;

			// Select the clicked object and all the objects above it in the same pile
			const pile = obj.parentElement;
			const siblings = [...pile.children];
			const idx = siblings.indexOf(obj);

			for (let i = idx; i < siblings.length; i++) {
				siblings[i].classList.add("selected");
				selectedObjects.push(siblings[i]);
			}
		});

		pile.appendChild(obj);
	}

	gameCanvas.appendChild(pile);
}
