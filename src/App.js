import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard'
import Form from './component/Form/Form'
import Header from './component/Header/Header'
import Product from './component/Product/Product'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inventory: [
        {imageInput: 'test',
        productName: 'dummy',
        price: '$22220'},

        {imageInput: 'test',
        productName: 'macbook',
        price: '$22220'},

        {imageInput: 'test',
        productName: 'shoes',
        price: '$22220'},

        {imageInput: 'test',
        productName: 'pants',
        price: '$22220'},

        {imageInput: 'test',
        productName: 'neck',
        price: '$22220'},
    ]

    }
  }
  render() {
    const {inventory} = this.state
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
