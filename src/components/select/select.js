import React from 'react'
import { string, arrayOf, object, func } from 'prop-types'
import './select.css'

const Select = ({ name, label, options, onChange, className }) => (
	<div className={className}>
		{label && (
			<label htmlFor={name} className={'label'}>
				{label}
			</label>
		)}
		<select
			id={name}
			name={name}
			className={'form-control'}
			onChange={onChange}
		>
			<option selected value={-1}>
				-
			</option>
			{options.map(option => (
				<option key={option.id} value={option.id}>
					{option.name}
				</option>
			))}
		</select>
	</div>
)

Select.propTypes = {
	name: string.isRequired,
	label: string,
	options: arrayOf(object),
	onChange: func
}

export default Select
