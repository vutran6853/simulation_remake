import React, { Component } from 'react';
import css from './FormBox.css';
import Axios from 'axios';
import ToolTip from './ToolTip/ToolTip';

class FormBox extends Component {
  constructor() {
    super();

    this.state = {
      imgurl: '',
      products_name: '',
      products_price: 0
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.clearAllField = this.clearAllField.bind(this);
    // this.handlePriceChange = this.handlePriceChange.bind(this);
  }

  handleNameChange(value) {
    this.setState({ products_name: value })
  };


  handleInputChange(value) {
    this.setState({ imgurl: value })
  };
  
  handlePriceChange(value) {
    this.setState({ products_price: value })
  }

  clearAllField() {
    this.setState({ product_name: '', price: 0, imurl: '' })
  };

  addAllField( products_name, products_price, imgurl ) {
    Axios.post('api/products', { products_name, products_price, imgurl } = this.state )
    .then((response) => {
      console.log(response)
    })
  }

  render() {
    //  OBJECT DEST


    return (
      <div>
        <h3>FormBox Component</h3>
        <form className='form-group'>
          <div className='urlBox'>
            <p value={ this.state.imgurl } >{ this.state.imgurl }</p>
          </div>

          <h6>Image url </h6>
          <input onChange={ (e) => this.handleInputChange(e.target.value)} 
                  placeholder='Enter URL here'
                  class="form-control" >
          </input>
          <h6>Product Name </h6>
          <input onChange={ (e) => this.handleNameChange(e.target.value)} 
                  placeholder='Enter Product Name here'
                  class="form-control">
          </input>
          <h6>Price </h6>
          <input  onChange={(e) => this.handlePriceChange(e.target.value)} 
                  value={this.state.products_price}
                  type="text" class="form-control">
          </input>
          <button onClick={ () => this.clearAllField() } class="btn btn-danger" >Cancel</button>

          {/* WILL WORK ON THIS ADD FUNCTION SOON TBC */}
          <button onClick={ () => this.addAllField( ) }  
                  class="btn btn-primary" >Add</button>
          
        </form>
        <ToolTip />
      </div>
    )
  }
}

export default FormBox;