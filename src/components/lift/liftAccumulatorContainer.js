import React, { Component } from 'react'
import liftFactory from '../../helpers/liftFactory'
import LiftAccumulator from './liftAccumulator'
import { lifts as liftData } from '../configuration/config.json'

class LiftAccumulatorContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			lifts: [liftFactory()]
		}
	}

	componentDidMount() {
		// go get the lifts
	}

	addLift() {
		this.setState({
			lifts: [...this.state.lifts, liftFactory()]
		})
	}

	updateLift() {}

	onChange(e) {
		console.log(e)
	}

	render() {
		return (
			<LiftAccumulator lifts={this.state.lifts} addLift={this.addLift} />
		)
	}
}

export default LiftAccumulatorContainer
