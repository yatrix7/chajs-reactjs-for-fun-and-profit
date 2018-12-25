import React from 'react'
import { string, arrayOf, object, func } from 'prop-types'
import Select from '../select/select'

const Lift = ({ name, onChange, label, lifts, sets, reps }) => (
	<div className={'container'}>
		<div className={'row'}>
			<Select
				className={'col-sm'}
				{...{
					name,
					label,
					onChange,
					options: lifts
				}}
			/>
		</div>
		<div className={'row'}>
			<div className={'col-sm'}>
				<label htmlFor="weight" className={'label'}>
					Weight
				</label>
				<input
					type="text"
					id="weight"
					name="weight"
					className={'form-control'}
				/>
			</div>
			<Select
				className={'col-sm'}
				{...{
					name,
					label,
					onChange,
					options: sets
				}}
			/>
			<Select
				className={'col-sm'}
				{...{
					name,
					label,
					onChange,
					options: reps
				}}
			/>
		</div>
	</div>
)

Lift.propTypes = {
	name: string.isRequired,
	label: string,
	lifts: arrayOf(object),
	reps: arrayOf(object),
	sets: arrayOf(object),
	onChange: func
}

export default Lift
