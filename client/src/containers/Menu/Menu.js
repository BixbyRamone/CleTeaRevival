import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import Category from '../../components/Category/Category';
import Checkbox from '../../components/Navigation/Toolbar/Expanded/Checkbox/Checkbox';

import classes from './Menu.css';

class BurgerBuilder extends Component {

	state = {
		checked: [],
		visablecategories: "cat",
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
				description: 'tasty,  ipsum loremm foo goo',
				category: 'green',
				available: true,
				key: 3
			},

			{
				name: 'kukicha',
				priceCup: 1,
				pricePot: 2,
				priceOz: 1,
				description: 'green tea with seasame taste',
				category: 'green',
				available: true,
				key: 4
			},

			{
				name: 'kukicha',
				priceCup: 1,
				pricePot: 2,
				priceOz: 1,
				description: 'green tea with seasame taste',
				category: 'green',
				available: true,
				key: 5
			}
		]
	}


	checkClickHandler = (event)=> {
		console.log(event.target.id);
		let checked = [...this.state.checked];

		if (checked.indexOf(event.target.id) === -1) {
			// if (checked.indexOf(event.target.id) === -1)  {
				checked.push(event.target.id);
				console.log('If');
			}
		 else {
		 	console.log('Else');
		 	console.log(checked.indexOf(event.target.id));
			checked.splice(checked.indexOf(event.target.id), 1);
		}

		
		console.log(checked);
		this.setState({checked: checked})
		// console.log
	}

	render() {

		let catArray = [];

		for (var i = this.state.teas.length - 1; i >= 0; i--) {
			if (catArray.indexOf(this.state.teas[i].category) === -1) {
				catArray.push(this.state.teas[i].category);
			}
			
		}

		let test = <div>
				{catArray.map(category => {
					
						return	<Category 
						teas={this.state.teas}
						category={category}
						key={(Math.random() * 1000000) + 1 }
						checked={this.state.checked}
						checkClick={this.checkClickHandler}
						>
						</Category>
					
				
				})}
			</div>

		return (
		<Aux>

			

			<div className={classes.Menu}>
			<Checkbox 
			teas={catArray}
			checkClick={this.checkClickHandler}
			/>
				
			</div>

			{test}
		</Aux>
		)
	}
		
}

export default BurgerBuilder;