import React, { Component } from 'react';

import MenuItem from '../MenuItem/MenuItem';

import Aux from '../../hoc/Auxiliary/Auxiliary';

class category extends Component {
	state = {
		teasToShow: []
	}
	
	render() {
		let teas2Show = [];
		for (var i = this.props.teas.length - 1; i >= 0; i--) {
			if (this.props.teas[i].category === this.props.category) {
				teas2Show.push(this.props.teas[i]);
			}
		}


		return(
			<Aux>
			<h3>{this.props.category}</h3>

			<div>
				{teas2Show.map(tea => {
					return <MenuItem 
					teaInfo={tea}
					key={tea.key}
					/>
				})}
			</div>

			</Aux>
			)
	}
}


export default category;