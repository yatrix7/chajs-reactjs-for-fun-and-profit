import React, { Component } from 'react'
import Lift from '../lift/lift'
// todo: make this part of the fake API
import { lifts } from '../../configuration/config.json'

class WorkoutPlannerPage extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		const numericOptions = Array.from({ length: 10 }, (v, k) => k + 1).map(
			x => ({
				id: x,
				name: x
			})
		)

		const liftOptions = lifts.map(lift => ({
			id: lift.liftId,
			name: lift.name
		}))

		return (
			<Lift
				{...{
					label: 'Primary Lift',
					name: 'primaryLift',
					onChange: () => {},
					lifts: liftOptions,
					sets: numericOptions,
					reps: numericOptions
				}}
			/>
		)
	}
}

export default WorkoutPlannerPage
