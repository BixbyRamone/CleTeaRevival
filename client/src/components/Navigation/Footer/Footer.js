import React from 'react';

import FooterTile from './FooterTile/FooterTile';

import classes from './Footer.css';


const footer = () => {
	return(
		<footer className={classes.Footer}> 
			<FooterTile/>
			<FooterTile/>
			<FooterTile/>
			<div>
			WORDS
			</div>
		</footer>


		)
}

export default footer;