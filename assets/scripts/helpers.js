export function saveMatchResult(result) {
	const statsKey = "nimMatchHistory";

	// Get existing data
	const history = JSON.parse(localStorage.getItem(statsKey)) || [];

	// Add new result
	history.push({
		player1: result.player1,
		player2: result.player2, // If vs computer => player2 = computer + difficulty
		winner: result.winner,
		piles: result.piles, // array like [3, 4, 5]
		timestamp: new Date().toISOString(),
	});

	// Save back
	localStorage.setItem(statsKey, JSON.stringify(history));
}

export function loadMatchHistory() {
	return JSON.parse(localStorage.getItem("nimMatchHistory")) || [];
}
