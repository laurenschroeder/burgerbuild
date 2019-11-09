import React from 'react';

const person = (props) => {
return ( 
	<div>
		<p>Im {props.name} WHO IS {props.age} YEARS OLD</p>
		<p>{props.children}</p>
	</div>
	)
}

export default person;