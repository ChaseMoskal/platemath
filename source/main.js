const standardGymWeightPairs = [
	45,
	45,
	45,
	45,
	45,

	35,
	35,
	35,
	35,
	35,

	25,
	25,
	25,
	25,
	25,
	25,

	10,
	10,
	10,
	10,
	10,

	5,
	5,
	5,
	5,
	5,

	2.5
]

function calculateWeights({goal, weightPairs = standardGymWeightPairs, barWeight = 45} ) {
	let stack = []

	for (const weight of weightPairs) {
		const alreadyStackedWeight = stack.reduce((a, b) => a + b, 0) * 2
		const proposedWeightToAdd = weight * 2

		if ((barWeight + alreadyStackedWeight + proposedWeightToAdd) <= goal) {
			stack = [...stack, weight]
		}
	}

	const achievement = barWeight + (stack.reduce((a, b) => a + b, 0) * 2)
	return {stack, achievement}
}

(window).calculateWeights = calculateWeights
