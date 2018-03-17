// Referenced in App.js
import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import classes from './Layout.css';

class Layout extends Component {

	state = {
		showSideDrawer: false
	}

	SideDrawerToggleHandler = ()=> {
		this.setState((prevState)=> {
			return {showSideDrawer: !prevState.showSideDrawer}
		});			
	}

	SideDrawerClosedHandler = ()=> {
		this.setState({showSideDrawer: false});
	}

	render () {
		return (
	<Aux>

		<Toolbar
		sdOpen={this.SideDrawerToggleHandler}
		/>
		<SideDrawer
		closed={this.SideDrawerClosedHandler}
		open={this.state.showSideDrawer}
		/>

		<main className={classes.Content}>
			{this.props.children}
		</main>
	</Aux>
	)
	}

} 

export default Layout;