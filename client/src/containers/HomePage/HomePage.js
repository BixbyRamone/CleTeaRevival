import React, {Component} from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';

import classes from './HomePage.css';

const HomePage = ()=> {
	return(
			<Aux>
				<div className={classes.HomePage}>
				
				<a>
					<img
					src={require(`./HomePageImage/temppicrsz.jpeg`)}
					alt="tea shop"
					/>
					<h3>
						Cleveland<br/>Tea<br/>Revival
					</h3>
				</a>

				</div>

			</Aux>
			)
}

// class HomePage extends Component {
// 	render() {
// 		console.log("Main Page")
// 		return(
// 			<Aux>
// 				<div className={classes.HomePage}>
				
// 				<a>
// 					<img
// 					src={require(`./HomePageImage/temppicrsz.jpeg`)}
// 					alt="tea shop"
// 					/>
// 					<h3>
// 						Cleveland<br/>Tea<br/>Revival
// 					</h3>
// 				</a>

// 				</div>

// 			</Aux>
// 			)
// 	}
// }

export default HomePage;



