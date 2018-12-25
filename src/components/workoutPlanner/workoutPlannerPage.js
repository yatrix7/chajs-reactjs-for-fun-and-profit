import React, { Component } from 'react'
// todo: make this part of the fake API
import { getLifts, getSets, getReps } from '../../api/liftApi'
import LiftContainer from '../lift/liftContainer'

class WorkoutPlannerPage extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return <LiftContainer />
	}
}

export default WorkoutPlannerPage
