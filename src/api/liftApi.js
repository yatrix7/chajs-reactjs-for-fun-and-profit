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
		setTimeout(
			() =>
				resolve(
					data.map(lift => ({
						id: lift.liftId,
						name: lift.name
					}))
				),
			delay
		)
	)

export const getReps = async function() {
	setTimeout(function() {
		// would nomrally be an await in here, but this is fake
		return Array.from({ length: 20 }, (v, k) => k + 1).map(x => ({
			id: x,
			name: x
		}))
	}, delay)
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
