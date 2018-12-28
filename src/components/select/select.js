import React from 'react'
import { string, arrayOf, object, func } from 'prop-types'
import './select.css'

const Select = ({ id, name, label, value, options, onChange, className }) => (
	<div className={className}>
		{label && (
			<label htmlFor={id} className={'label'}>
				{label}
			</label>
		)}
		<select
			id={id}
			name={name}
			value={value}
			className={'form-control'}
			onChange={onChange}
		>
			<option value={-1}>-</option>
			{options.map(option => (
				<option key={option.id} value={option.id}>
					{option.name}
				</option>
			))}
		</select>
	</div>
)

Select.propTypes = {
	id: string.isRequired,
	name: string.isRequired,
	label: string,
	value: string.isRequired,
	options: arrayOf(object),
	onChange: func,
	className: string
}

export default Select
