import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Layout from './components/Layout/Layout';
import Menu from './containers/Menu/Menu';
import HomePage from './containers/HomePage/HomePage';
import AdminHome from './containers/AdminHome/AdminHome';
import Calendar from './containers/Calendar/Calendar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
        	<Switch>
          		<Route
          		path="/menu"          		
          		component={Menu}
          		/>

              <Route 
              path='/calendar'
              component={Calendar}
              />
          		
          		<Route
          		path='/admin'
          		component={AdminHome}
          		/>

          		<Route
          		path="/"
          		exact
          		component={HomePage}
          		/>
          	</Switch>


        </Layout>
      </div>
    );
  }
}

export default App;

/*

              <Route 
              path="/calendar"
              component
              />


*/
