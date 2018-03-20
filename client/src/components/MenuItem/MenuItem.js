import React from 'react';

const menuItem = (props)=> {

	return (
		<div>

			<ul>
				<li>
				{props.teaInfo.name}
				</li>
				<li>
				{props.teaInfo.priceCup}
				</li>
				<li>
				{props.teaInfo.pricePot}
				</li>
				<li>
				{props.teaInfo.description}
				</li>
			</ul>
		</div>
		)
}

export default menuItem;