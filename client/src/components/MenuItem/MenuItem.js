import React from 'react';

import classes from './MenuItem.css';

const menuItem = (props)=> {

	return (
		<div className={classes.MenuItem}
			 key={props.teaInfo.id}
				>

			<ul>
				<li>
				{props.teaInfo.name}
				</li>
				<li>
				{props.teaInfo.priceCup}
				</li>
				<li>
				{props.teaInfo.pricePot}
				</li>
				<li>
				{props.teaInfo.description}
				</li>
			</ul>
		</div>
		)
}

export default menuItem;