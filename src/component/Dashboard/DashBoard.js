import React, { Component } from 'react';
import css from './DashBoard.css';


let list = props => {
  return props.list.map((value, index) => {
     console.log(value, index)
    return(
      <div key={value.id} className='productBox'>
        <div className='innerBox' placeholder='innerBox'>
          <p>URL: {value.imgurl}</p>
        </div>
        <div>
          <p>Product: {value.products_name} </p>
        </div>
        <div>
          <p>Price: {value.products_price}</p>
        </div>
        <button>remove</button>
      </div>
    )
  })
}
 
export default list;