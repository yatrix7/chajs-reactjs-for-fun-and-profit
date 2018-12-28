import React from 'react'
import { number } from 'prop-types'
import platesCalculator from '../../helpers/platesPerSideCalculator'
import { plates } from '../../configuration/config.json'
import './plates.css'

const Plates = props => {
	const platesPerSide = platesCalculator(plates, props.weight, 45)
	const content = Object.keys(platesPerSide)
		.sort((x, y) => y - x)
		.reduce((output, key) => {
			const count = platesPerSide[key]
			const spacer = output ? ', ' : ''

			if (count > 0) {
				// 45: 2
				return `${output}${spacer}${key}: ${count}`
			}
			return output
		}, '')

	return (
		<span className={`${'plates'} ${props.className}`}>
			Plates per side: {content || 0}
		</span>
	)
}

Plates.propTypes = {
	weight: number
}

export default Plates
