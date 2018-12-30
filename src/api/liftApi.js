// fake api calls using functions in various flavors
// setTimeout is used to simulate a the time to go to the server and back
import { lifts as data } from '../configuration/config.json'
import { delay } from '../configuration/config.json'

// using function
export const getLifts = function() {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			const lifts = data.map(lift => ({
				id: lift.liftId,
				name: lift.name
			}))

			resolve(lifts)
		}, delay)
	})
}

// using arrow function
export const getSets = () =>
	new Promise((resolve, reject) =>
		setTimeout(() => {
			const sets = Array.from({ length: 10 }, (v, k) => k + 1).map(x => ({
				id: x,
				name: x
			}))

			resolve(sets)
		}, delay)
	)

// using async function
export const getReps = async function() {
	return await new Promise((resolve, reject) =>
		setTimeout(() => {
			const reps = Array.from({ length: 20 }, (v, k) => k + 1).map(x => ({
				id: x,
				name: x
			}))

			resolve(reps)
		}, delay)
	)
}
