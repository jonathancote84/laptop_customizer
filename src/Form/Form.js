import React, { Component } from 'react';
import './Form.css';
import Feature from '../Feature/Feature';
// import Feature from '../Feature/Feature';





class Form extends Component {

    
    render() {
      const features = Object.keys(this.props.features)
      .map(key => {


        return <div className="feature" key={key}>
          <div className="feature__name">{key}</div>
             <Feature features={this.props.features[key]}/>
          </div>
   
      });      


        return(
            <section className="main__form">
                <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                {features}
                
               
            </section>
        )
    }
}

export default Form; 