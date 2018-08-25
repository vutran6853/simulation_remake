import React, { Component } from 'react';
import css from './ToolTip.css';
class ToolTip extends Component {

  render() { 
    return ( 
      <div className='ToolTip animated rubberBand'>
        <p>Try out this wonderful app -> </p>
      </div>
     );
  }
}
 
export default ToolTip;