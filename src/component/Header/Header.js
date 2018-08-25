import React, { Component } from 'react';
import css from './Header.css';
import Logo  from './circle.svg';

class Header extends Component {

  render() { 

    return ( 
      <div className='header'>
        <img src={ Logo }  className="header-logo" alt='Logo' ></img>

        <h3 className='header_h3'>HEADER COMPONENT</h3>
      </div>
     );
  }
}
 
export default Header;