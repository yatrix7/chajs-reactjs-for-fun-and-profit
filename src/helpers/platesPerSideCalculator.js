const reverse = function(x, y) {
	return y - x
}

const calculator = function(plates, weight) {
	if (plates.length === 0) return {}

	// always make sure the plates are sorted so we don't add on nine 5's in stead of a single 45
	const sortedPlates = plates.sort(reverse)
	const plateWeight = sortedPlates[0]
	const count = Math.floor(weight / plateWeight)
	const totals = { [plateWeight.toString()]: count }
	const remaingPlates = sortedPlates.slice(1)
	const remainingWeight = weight - count * plateWeight

	return Object.assign({}, calculator(remaingPlates, remainingWeight), totals)
}

const platesPerSideCalculator = function(plates, weight, barWeight = 45) {
	return calculator(plates, (weight - barWeight) / 2)
}
export default platesPerSideCalculator
// console.log(
// 	`\n\nPlates per side for ${totalWeight}lbs with a bar that weights ${barWeight}lbs:\n`
// )
// const totals = platePerSideCalculator(plates, (totalWeight - barWeight) / 2)
// Object.keys(totals).forEach(key =>
// 	console.log(`${key}: ${totals[key]} plates per side`)
// )
