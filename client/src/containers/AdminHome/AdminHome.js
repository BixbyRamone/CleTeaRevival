import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Menu from '../Menu/Menu';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import NewEntry from '../../components/AdminTools/NewEntry/NewEntry';

import classes from './AdminHome.css';

class AdminHome extends Component {

	render() {
		return (
			<Aux>
			<div className={classes.AdminHome}>AdminHome</div>
			<Menu />
			</Aux>
			)
	}
}

export default AdminHome;