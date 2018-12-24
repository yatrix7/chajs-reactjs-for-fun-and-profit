import { lifts } from '../configuration/config.json'

export const getLifts = function() {
	setTimeout(function fakeGetLifts() {
		return lifts
	}, 3000)
}
