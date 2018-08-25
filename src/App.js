import React, { Component } from 'react';
import './App.css';
import FormBox from './component/FormBox/FormBox';
import axios from 'axios';
import DashBoard from './component/Dashboard/DashBoard';
import Header from './component/Header/Header';

class App extends Component {
  constructor() {
    super();

    this.state = {
      productData: []
    }
  }


  componentDidMount() {
    axios.get('/api/products').then((response) => {
       console.log(response)
      this.setState({ productData: response.data })
    })
  
  }

  render() {


    return (
      <div className="App">
        <Header />
        <FormBox />
        <DashBoard list={ this.state.productData }/>
      </div>
    );
  }
}

export default App;
