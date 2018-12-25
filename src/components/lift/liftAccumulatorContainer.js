import React, { Component } from 'react'
import Lift from './lift'
import shortid from 'shortid'
import { lifts as liftData } from '../../configuration/config.json'

class LiftAccumulator extends Component {
	constructor(props) {
		super(props)

		const liftOptions = liftData.map(lift => ({
			id: lift.liftId,
			name: lift.name
		}))
		const numericOptions = Array.from({ length: 10 }, (v, k) => k + 1).map(
			x => ({
				id: x,
				name: x
			})
		)
		this.state = {
			liftOptions,
			setOptions: numericOptions,
			repOptions: numericOptions,
			//name, onChange, label, lifts, sets, reps
			lifts: [
				{
					name: shortid.generate(),
					label: 'Primary Lift',
					lifts: liftOptions,
					sets: numericOptions,
					reps: numericOptions
				}
			]
		}
	}

	addLift() {}

	onChange(e) {
		console.log(e)
	}

	componentDidMount() {
		// go get the lifts
	}

	render() {
		return ''
	}
}
export default LiftAccumulator
