// Refrenced by Layout.js

import React from 'react';

import classes from './Toolbar.css';

import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
	<header className={classes.Toolbar}>
		<DrawerToggle
		clicked={props.sdOpen}>
		</DrawerToggle>

		<h2>Cleveland Tea Revival</h2>
		
		<nav className={classes.DesktopOnly}>
			<NavigationItems/>
			

		</nav>
	</header>
	);

export default toolbar;

		// <nav className={classes.ToolbarTitle}>
		// 	Cleveland Tea Revival
		// </nav>