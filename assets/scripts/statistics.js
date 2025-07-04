import { loadMatchHistory } from "./helpers.js";

const history = loadMatchHistory();

history.forEach((match, i) => {
	console.log(
		`#${i + 1}: ${match.player1} VS ${match.player2} || Winner: ${
			match.winner
		} || Piles: ${match.piles}`
	);
});
