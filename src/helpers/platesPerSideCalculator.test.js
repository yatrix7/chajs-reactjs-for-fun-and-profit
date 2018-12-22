import sut from './platesPerSideCalculator'
import { plates } from '../configuration/config.json'

describe('platesCalculator', () => {
	// 45, 35, 25, 10, 5, 2.5, 1.25, 1, 0.5
	// function assertions(
	// 	results,
	// 	expectedFortyFive = 0,
	// 	expectedThirtyFive = 0,
	// 	expectedTwentyFive = 0,
	// 	expectedTen = 0,
	// 	expectedFive = 0,
	// 	expectedTwoAndAHalf = 0,
	// 	expectedOneAndAQtr = 0,
	// 	expectedHalf = 0
	// ) {
	// 	expect(results['45']).toEqual(expectedFortyFive)
	// 	expect(results['35']).toEqual(expectedThirtyFive)
	// 	expect(results['25']).toEqual(expectedTwentyFive)
	// 	expect(results['10']).toEqual(expectedTen)
	// 	expect(results['5']).toEqual(expectedFive)
	// 	expect(results['2.5']).toEqual(expectedTwoAndAHalf)
	// 	expect(results['1.25']).toEqual(expectedOneAndAQtr)
	// 	expect(results['.5']).toEqual(expectedHalf)
	// }

	it('test calculation for 225', () => {
		const results = sut(plates, 225)
		const keys = Object.keys(results)

		expect(
			keys.reduce((accum, cur) => {
				if (cur === '45') {
					return accum && results[cur] === 2
				}
				return accum && results[cur] === 0
			}, true)
		).toBeTruthy()
	})
})
