import { lifts as data } from '../configuration/config.json'
import { delay } from '../configuration/config.json'

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

// export const getLifts = function() {
// 	return lifts.map(lift => ({
// 		id: lift.liftId,
// 		name: lift.name
// 	}))
// }

// export const getSets = function() {
// 	return Array.from({ length: 10 }, (v, k) => k + 1).map(x => ({
// 		id: x,
// 		name: x
// 	}))
// }

// export const getReps = function() {
// 	return Array.from({ length: 20 }, (v, k) => k + 1).map(x => ({
// 		id: x,
// 		name: x
// 	}))
// }
