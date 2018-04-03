import React, { Component } from 'react';

import classes from './Checkbox.css';


const Checkbox = (props)=> {
	// console.log(props.teas);
	// console.log(props.teas.indexOf(category) + 1);
		return (
			
			<div className={classes.Checkbox}>
				{props.teas.map(category => {
					return <div>
					<input
					id={category}
					className={props.teas.indexOf(category) + 1}
					type="checkbox"
					// checked={this.state.checked}
					onClick={props.checkClick}
					key={props.teas.indexOf(category) + 1}
					/>
						{category}
					</div>					
					
				})}
			</div>

			)
	
}



export default Checkbox;