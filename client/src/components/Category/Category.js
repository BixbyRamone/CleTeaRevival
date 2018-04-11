import React, { Component } from 'react';

import MenuItem from '../MenuItem/MenuItem';

// import Aux from '../../hoc/Auxiliary/Auxiliary';

import classes from './Category.css';

class Category extends Component {
	
	render() {
		let teas2Show = [];
		for (var i = this.props.teas.length - 1; i >= 0; i--) {
			if (this.props.teas[i].category === this.props.category) {
				teas2Show.push(this.props.teas[i]);
			}
		}

		console.log(this.props.checked);
		console.log(this.props.category);

		let teasVis;
		if (this.props.checked.indexOf(this.props.category) !== -1) {
			teasVis = <div>
					{teas2Show.map(tea => {
						return <MenuItem 
						teaInfo={tea}
						key={tea.key}
						/>
					})}
				</div>
				console.log('HERE');
				console.log(teasVis);
		}

		console.log(teasVis);

		return(
			<div id={this.props.category}
			className={classes.Category}
			onClick={this.props.checkClick}>

				<h3
				id={this.props.category}
				>{this.props.category}
				</h3>

				{teasVis}

			</div>
			)
	}
}


export default Category;

/*



<div>
					{teas2Show.map(tea => {
						return <MenuItem 
						teaInfo={tea}
						key={tea.key}
						/>
					})}
				</div>

				*/