import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Toolbar from '../../Navigation/Toolbar/Toolbar';

const newEntry = (props) => {
	console.log(props)
	return(
		<form>
			<Switch>
				<Route
				path={props.match.url + '/tea/inpt'}
				exact
				component={Toolbar} // enter tea input item
				/>

				<Route
				path='/food/inpt'
				component // enter food input item
				 />

				 <Route
				 path='/matcha/inpt'
				 component // enter match input item
				 /> 
				}
			</Switch>
		</form>
		)
}

export default newEntry;