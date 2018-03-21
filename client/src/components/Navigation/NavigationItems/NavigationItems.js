import React from 'react';

import { NavLink } from 'react-router-dom';

import classes from './NavigationItems.css';

import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = (props) => (
		<ul className={classes.NavigationItems}>

			<NavLink to="/"><NavigationItem	link="/" >Home</NavigationItem></NavLink>

			<NavLink to="/menu"><NavigationItem link="/menu">Menu / Shop</NavigationItem></NavLink>

			<NavLink to="/"><NavigationItem link="/calendar">Calendar</NavigationItem></NavLink>

			<NavLink to="/"><NavigationItem link="/about">Blog</NavigationItem></NavLink>		
			
		</ul>
	);

	export default navigationItems;