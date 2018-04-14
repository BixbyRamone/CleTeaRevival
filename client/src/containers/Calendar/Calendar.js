import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import Aux from '../../hoc/Auxiliary/Auxiliary';

import classes from './Calendar.css';
import style from '../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css';

import myEventsList from './events';

BigCalendar.momentLocalizer(moment);

const MyCalendar = (props) => {
	console.log(style);

	return (
			<div>
    <BigCalendar className={classes.Calendar}
      events={myEventsList}
      startAccessor='startDate'
      endAccessor='endDate'
      style={style}
    />
  </div>
		)
}

export default MyCalendar;
