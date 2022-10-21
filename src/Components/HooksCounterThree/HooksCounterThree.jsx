import React, { useState } from 'react'

function HooksCounterThree() {
	const [name, setName] = useState({ firstName: '', lastName: '',password:'' })
	return (
		<form>
			<input
				type="text"
				value={name.firstName}
				onChange={e => setName({ ...name, firstName: e.target.value })}
			/>
			<input
				type="text"
				value={name.lastName}
				onChange={e => setName({ ...name, lastName: e.target.value })}
			/>
			<input
			type="password"
			value={name.password}
			onChange={e=>setName({...name,password: e.target.value })}
			/>
			<h2>Your first name is - {name.firstName}</h2>
			<h2>Your last name is - {name.lastName}</h2>
			<h2>Your password   is - {name.password}</h2>
			<h2>{JSON.stringify(name)}</h2>
		</form>
	)
}

export default HooksCounterThree