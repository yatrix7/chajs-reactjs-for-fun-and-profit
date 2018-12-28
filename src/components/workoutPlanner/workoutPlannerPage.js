import React, { Component } from 'react'
import liftFactory from '../../helpers/liftFactory'
import WorkoutPlannerForm from './workoutPlannerForm'
import { getLifts, getSets, getReps } from '../../api/liftApi'

class WorkoutPlannerPage extends Component {
	constructor(props) {
		super(props)

		this.state = {
			lifts: [liftFactory.of()],
			liftOptions: [],
			setOptions: [],
			repOptions: []
		}
		this.onAdd = this.onAdd.bind(this)
		this.onChange = this.onChange.bind(this)
		this.onSave = this.onSave.bind(this)
	}

	componentDidMount() {
		Promise.all([getLifts(), getSets(), getReps()]).then(
			function(results) {
				const [liftOptions, setOptions, repOptions] = results

				this.setState({
					liftOptions,
					setOptions,
					repOptions
				})
			}.bind(this)
		)
	}

	onAdd() {
		this.setState({
			lifts: [...this.state.lifts, liftFactory.of()]
		})
	}

	onChange(e) {
		// each element has the lift's unique id in its id
		console.log(e.target)
		const idParts = e.target.id.split('-'),
			[, id] = idParts,
			lifts = [...this.state.lifts],
			index = lifts.findIndex(l => l.id === id)

		lifts[index] = {
			...lifts[index],
			[e.target.name]: parseInt(e.target.value || 0, 10)
		}

		this.setState({
			lifts
		})
	}

	onSave() {
		console.log(this.state.lifts)
	}

	render() {
		const { lifts, ...options } = this.state
		const { onAdd, onChange, onSave } = this

		return (
			<WorkoutPlannerForm
				lifts={lifts}
				options={options}
				actions={{
					onChange,
					onAdd,
					onSave
				}}
			/>
		)
	}
}

export default WorkoutPlannerPage
