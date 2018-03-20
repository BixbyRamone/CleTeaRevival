import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Category from '../../components/Category/Category';

import classes from './Menu.css';

class BurgerBuilder extends Component {

	state = {
		teas: [
			{
				name: 'kukicha',
				priceCup: 1,
				pricePot: 2,
				priceOz: 1,
				description: 'green tea with seasame taste',
				category: 'green',
				available: true,
				key: 1
			},

			{
				name: 'dongdang',
				priceCup: 2,
				pricePot: 4,
				priceOz: 2,
				description: 'Oolong I think',
				category: 'oolong',
				available: true,
				key: 2
			},

			{
				name: 'sencha',
				priceCup: 2,
				pricePot: 4,
				priceOz: 2,
				description: 'tasty',
				category: 'green',
				available: true,
				key: 3
			}
		]
	}

	render() {

		let catArray = [];

		for (var i = this.state.teas.length - 1; i >= 0; i--) {
			if (catArray.indexOf(this.state.teas[i].category) === -1) {
				catArray.push(this.state.teas[i].category);
			}
			
		}


		return (
		<Aux>
			<div className={classes.Menu}>
				
			</div>

			<div>
				{catArray.map(category => {
				return	<Category 
						teas={this.state.teas}
						category={category}
						>
						</Category>
				})}
			</div>
		</Aux>
		)
	}
		
}

export default BurgerBuilder;