import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Layout from './components/Layout/Layout';
import Menu from './containers/Menu/Menu';
import HomePage from './containers/HomePage/HomePage';

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
