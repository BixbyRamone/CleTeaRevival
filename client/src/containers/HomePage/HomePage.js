import React, {Component} from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';
import FrontPageTile from '../../components/FrontPageTile/FrontPageTile';

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

				<div className={classes.HomePageTiles}>

					<FrontPageTile
					image={'window.jpg'}
					title={'Menu'}
					/>

					<FrontPageTile
					image={'chalksign.jpg'}
					title={'Kombucha'}
					/>

					<FrontPageTile
					image={'wreathrsz.jpeg'}
					title={'Shop'}
					/>

					<FrontPageTile
					image={'wreathrsz.jpeg'}
					title={'Wholesale'}
					/>
				</div>

			</Aux>
			)
}


export default HomePage;



