import React, { Component } from 'react';
import './Feature.css';

class Feature extends Component {
  
    render() {
        const options = this.props.features.map((item, index) => {
          
            return <li key={index} className="feature__item">
                  { item.name }
            </li>
          });

    console.log(this.props.features)  
      
        return(
        <ul className="feature__list">
                {options}
            
        </ul>

     
        )        
    }
}

export default Feature;
