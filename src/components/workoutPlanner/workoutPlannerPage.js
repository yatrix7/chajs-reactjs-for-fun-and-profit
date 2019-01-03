import React, { useState, useEffect } from 'react'
import liftFactory from '../../helpers/liftFactory'
import WorkoutPlannerForm from './workoutPlannerForm'
import { getLifts, getSets, getReps } from '../../api/liftApi'

function WorkoutPlannerPage() {
	const [lifts, setLifts] = useState([liftFactory.of()]),
		[liftOptions, setLiftOptions] = useState([]),
		[setOptions, setsStOptions] = useState([]),
		[repOptions, setRepOptions] = useState([])

	// make the hella fake api calls to get our selects' options
	// useEffect allows sideeffects in the component
	useEffect(() => {
		Promise.all([getLifts(), getSets(), getReps()]).then(function(results) {
			// destructure the array of arrays from the promise resolution
			const [liftOptions, setOptions, repOptions] = results

			setLiftOptions(liftOptions)
			setsStOptions(setOptions)
			setRepOptions(repOptions)
		})
	}, [])

	function onAdd() {
		setLifts([...lifts, liftFactory.of()])
	}

	function onChange(e) {
		// each element has the lift's unique id in its id
		const idParts = e.target.id.split('-'),
			// destructure the id out of the array
			[, id] = idParts,
			// spread lifts array form state into a new array
			updatedLifts = [...lifts],
			// find the lift the onChange event is modifying
			index = updatedLifts.findIndex(l => l.id === id)

		// spread the props from the lift and overwrite
		// the new prop that's being changed via onChange
		updatedLifts[index] = {
			...updatedLifts[index],
			[e.target.name]: parseInt(e.target.value || 0, 10)
		}

		setLifts(updatedLifts)
	}

	function onSave() {
		// nowhere to save to, so print to verify result
		console.log(lifts)
	}

	return (
		<WorkoutPlannerForm
			lifts={lifts}
			options={{ liftOptions, setOptions, repOptions }}
			actions={{
				onChange,
				onAdd,
				onSave
			}}
		/>
	)
}

export default WorkoutPlannerPage
