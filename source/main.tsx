
import {h, render} from "preact"

import App, {AppStore} from "./components/app"

const store = new AppStore()
const app = <App {...{store}}/>
const container = document.querySelector("#app")

render(app, container)

//////////

interface CalculateWeightsParams {
	goal: number
	weightPairs?: number[]
	barWeight?: number
}

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

function calculateWeights({goal, weightPairs = standardGymWeightPairs, barWeight = 45}: CalculateWeightsParams): {stack: number[], achievement: number} {
	let stack: number[] = []

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

(window as any).calculateWeights = calculateWeights
