import React from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';

import classes from './FrontPageTile.css';

const frontPageTile = (props)=> {
	console.log(props);
	return (
		<section className={classes.FrontPageTile}>
		<a>
			<img
			src={require(`./FrontPageTileImage/` + props.image)}
			alt="tea shop"
			/>
			<h3>
				{props.title}
			</h3>

		</a>
		 </section>
		)
}

export default frontPageTile;