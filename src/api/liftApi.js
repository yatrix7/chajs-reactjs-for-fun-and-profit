import { lifts } from '../configuration/config.json'

export const getLifts = function() {
	return lifts.map(lift => ({
		id: lift.liftId,
		name: lift.name
	}))
}

export const getSets = function() {
	return Array.from({ length: 10 }, (v, k) => k + 1).map(x => ({
		id: x,
		name: x
	}))
}

export const getReps = function() {
	return Array.from({ length: 20 }, (v, k) => k + 1).map(x => ({
		id: x,
		name: x
	}))
}
