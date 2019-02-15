import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard'
import Form from './component/Form/Form'
import Header from './component/Header/Header'
import Product from './component/Product/Product'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard />
        <Header />
        <Form />
      </div>
    );
  }
}

export default App;
