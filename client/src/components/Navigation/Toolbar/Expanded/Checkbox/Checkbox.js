import React from 'react';

import classes from './Checkbox.css';

const Checkbox = (props)=> {
	console.log(props.teas);
		return (
			
			<div className={classes.Checkbox}>
				{props.teas.map(category => {
					return <div>
					<input
					type="checkbox" />
						{category}
					</div>					
					
				})}
			</div>		

			)
	
}

export default Checkbox;