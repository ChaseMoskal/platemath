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

const goalInput=document.querySelector(".goal-input") 
const resultElement=document.querySelector(".result")

function changeHandler() {
	console.log(goalInput.value)
	const goal = goalInput.value
	const result = calculateWeights({goal})
	const stack = result.stack
	const total = result.achievement
	resultElement.innerHTML = `Stack: ${stack.join(", ")}<br/> Total: ${total}`
}

goalInput.onchange = function () { changeHandler() }
goalInput.onkeyup = function() { changeHandler() }
goalInput.onmouseup = function() { changeHandler() }


