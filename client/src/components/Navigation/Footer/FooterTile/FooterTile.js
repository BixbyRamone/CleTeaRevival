import React from 'react';

import classes from './FooterTile.css'; 

const footerTile = (props) => {
	return (
	<ul className={classes.FooterTile}>
	<h4>Title</h4>
	<li>link</li>
	<li>link</li>
	<li>link</li>
	<li>link</li>

	</ul>
	)
}

export default footerTile;