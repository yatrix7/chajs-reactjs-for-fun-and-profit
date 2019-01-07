import React, { Component } from 'react'
import liftFactory from '../../helpers/liftFactory'
import WorkoutPlannerForm from './workoutPlannerForm'
import { getLifts, getSets, getReps } from '../../api/liftApi'
import LoadingScreen from '../loadingScreen/loadingScreen'

class WorkoutPlannerPage extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isLoading: false,
			lifts: [liftFactory.of()],
			liftOptions: [],
			setOptions: [],
			repOptions: []
		}
		this.onAdd = this.onAdd.bind(this)
		this.onChange = this.onChange.bind(this)
		this.onSave = this.onSave.bind(this)
	}

	// on mount, make the hella fake api calls to get our selects' options
	componentDidMount() {
		this.beginAjaxCall()
		// must bind `this` or we won't have the correct context to set state inside `.then()`
		Promise.all([getLifts(), getSets(), getReps()]).then(
			function(results) {
				// destructure the array of arrays from the promise resolution
				const [liftOptions, setOptions, repOptions] = results

				this.setState({
					liftOptions,
					setOptions,
					repOptions
				})
				this.endAjaxCall()
			}.bind(this)
		)
	}

	beginAjaxCall() {
		this.setState({
			isLoading: true
		})
	}

	endAjaxCall() {
		this.setState({
			isLoading: false
		})
	}

	onAdd() {
		this.setState({
			// spread the current lifts into state
			// and add the new one via our factory
			lifts: [...this.state.lifts, liftFactory.of()]
		})
	}

	onChange(e) {
		// each element has the lift's unique id in its id
		const idParts = e.target.id.split('-'),
			// destructure the id out of the array
			[, id] = idParts,
			// spread lifts array form state into a new array
			lifts = [...this.state.lifts],
			// find the lift the onChange event is modifying
			index = lifts.findIndex(l => l.id === id)

		// spread the props from the lift
		// and overwrite the new prop that's being changed via onChange
		lifts[index] = {
			...lifts[index],
			[e.target.name]: parseInt(e.target.value || 0, 10)
		}

		this.setState({
			lifts
		})
	}

	onSave() {
		// nowhere to save to, so print to verify result
		console.log(this.state.lifts)
	}

	render() {
		const { lifts, ...options } = this.state
		const { onAdd, onChange, onSave } = this

		return !this.state.isLoading ? (
			<WorkoutPlannerForm
				lifts={lifts}
				options={options}
				actions={{
					onChange,
					onAdd,
					onSave
				}}
			/>
		) : (
			<LoadingScreen />
		)
	}
}

export default WorkoutPlannerPage
