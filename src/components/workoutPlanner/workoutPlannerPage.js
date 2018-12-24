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
		return (
			<Lift
				{...{
					label: 'Primary Lift',
					name: 'primaryLift',
					onChange: () => {},
					lifts
				}}
			/>
		)
	}
}

export default WorkoutPlannerPage
