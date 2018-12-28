import React from 'react'
import { string, object, func } from 'prop-types'
import Select from '../select/select'
import './lift.css'

const Lift = ({ lift, label, options, onChange }) => {
	return (
		<section className={'lift'}>
			<div className={'row select-row'}>
				<Select
					className={'col-sm'}
					id={`lift-${lift.id}`}
					name="liftId"
					value={lift.liftId}
					label={label}
					onChange={onChange}
					options={options.lifts}
				/>
			</div>
			<div className={'row'}>
				<div className={'col-sm'}>
					<label
						htmlFor={`weight-${lift.id}`}
						className={'lift__label'}
					>
						Weight
					</label>
					<input
						type="text"
						id={`weight-${lift.id}`}
						name="weight"
						value={lift.weight}
						className={'form-control'}
						onChange={onChange}
					/>
				</div>
				<Select
					// explict setting of props
					id={`sets-${lift.id}`}
					className={'col-sm'}
					name="sets"
					label="Sets"
					value={lift.sets}
					onChange={onChange}
					options={options.sets}
				/>
				<Select
					className={'col-sm'}
					value={lift.reps}
					// using spread operator to pass props
					{...{
						id: `reps-${lift.id}`,
						name: 'reps',
						label: 'Reps',
						onChange,
						options: options.reps
					}}
				/>
			</div>
		</section>
	)
}

Lift.defaultProps = {
	label: 'Lift'
}

Lift.propTypes = {
	lift: object.isRequired,
	label: string,
	options: object,
	onChange: func
}

export default Lift
