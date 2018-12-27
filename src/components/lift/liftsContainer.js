import React, { Component } from 'react'
import liftFactory from '../../helpers/liftFactory'
import Lifts from './lifts'

class LiftsContainer extends Component {
	constructor(props) {
		super(props)

		this.state = {
			lifts: [],
			liftOptions: [],
			setOptions: [],
			repOptions: []
		}
	}

	componentDidMount() {}

	addLift() {
		this.setState({
			lifts: [...this.state.lifts, liftFactory()]
		})
	}

	onUpdate(lift) {
		const lifts = [...this.state.lifts]
		const index = lifts.findIndex(x => x.id === lift.id)

		lifts[index] = lift

		this.setState({
			lifts
		})
	}

	onChange(e) {
		console.log(e)
	}

	render() {
		// lifts: arrayOf(object).isRequired,
		// liftOptions: arrayOf(object).isRequired,
		// setOptions: arrayOf(object).isRequired,
		// repOptions: arrayOf(object).isRequired,
		// onChange: func.isRequired,
		// onUpdate: func.isRequired
		return <Lifts lifts={this.state.lifts} addLift={this.addLift} />
	}
}

export default LiftsContainer
