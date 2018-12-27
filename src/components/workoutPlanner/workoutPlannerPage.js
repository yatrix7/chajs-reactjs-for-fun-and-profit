import React, { Component } from 'react'
// todo: make this part of the fake API
import { getLifts, getSets, getReps } from '../../api/liftApi'
import LiftContainer from '../lift/liftContainer'

class WorkoutPlannerPage extends Component {
	constructor(props) {
		super(props)

		this.state = { liftOptions: [], setOptions: [], repOptions: [] }
	}

	componentDidMount() {
		Promise.all(getLifts(), getSets(), getReps()).then(function(results) {
			console.log(results)

			this.setState({
				liftOptions: results[0],
				setOptions: results[1],
				repOptions: results[2]
			})
		})
	}

	render() {
		return (
			<LiftContainer
				lifts={this.state.liftOptions}
				sets={this.state.setOptions}
				reps={this.state.repOptions}
			/>
		)
	}
}

export default WorkoutPlannerPage
