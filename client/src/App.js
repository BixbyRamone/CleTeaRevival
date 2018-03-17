import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Layout from './components/Layout/Layout';

import Customers from './components/customers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
            
          <Customers />
        </Layout>
      </div>
    );
  }
}

export default App;
