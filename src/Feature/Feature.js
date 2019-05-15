import React, { Component } from 'react';
import './Feature.css';

class Feature extends Component {
    //this was an experiment to break the components down further
    // it was working as a static app 


    // updateFeature(feature, newValue) {
    //     const selected = Object.assign({}, this.prop.selected);
    //     selected[feature] = newValue;
    //     this.setState({
    //       selected
    //     });
    //   }
    render() {
        const options = this.props.features.map((item, index) => {
            const selectedClass = item.name === this.state.selected[key].name ? 'feature__selected' : '';
            const featureClass = 'feature__option ' + selectedClass;
            return <li key={index} className="feature__item">
             <div className={featureClass}
                  
                  onClick={e => this.updateFeature(item)}>
                    { item.name }

                  </div>
                  
               
            </li>
          });

    
      
        return(
        <ul className="feature__list">
                {options}
            
        </ul>

     
        )        
    }
}

export default Feature;
