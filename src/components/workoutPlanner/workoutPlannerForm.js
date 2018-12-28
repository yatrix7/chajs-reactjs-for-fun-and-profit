import React from 'react'
import Lift from '../lift/lift'
import { arrayOf, object } from 'prop-types'
import './workout.css'

const WorkoutPlannerForm = ({ lifts, options, actions }) => {
	return (
		<form className={'container'}>
			<h1 className={'workout-header'}>
				Workout: {new Date().toDateString()}
			</h1>
			{lifts.map((lift, index) => (
				<>
					<Lift
						key={lift.id}
						lift={lift}
						options={{
							lifts: options.liftOptions,
							sets: options.setOptions,
							reps: options.repOptions
						}}
						onChange={actions.onChange}
					/>
					{index < lifts.length - 1 && <hr />}
				</>
			))}
			<div className={'buttons'}>
				<button
					type="button"
					className={'btn btn-primary buttons__save float-right'}
					onClick={actions.onSave}
				>
					Save
				</button>
				<button
					type="button"
					className={'btn btn-secondary buttons__add float-right'}
					onClick={actions.onAdd}
				>
					Add Lift
				</button>
			</div>
		</form>
	)
}

WorkoutPlannerForm.propTypes = {
	lifts: arrayOf(object).isRequired,
	options: object.isRequired,
	actions: object.isRequired
}

export default WorkoutPlannerForm
