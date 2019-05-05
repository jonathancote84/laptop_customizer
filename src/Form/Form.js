import React, { Component } from 'react';
import './Form.css';
import FeaturesList from '../FeaturesList/FeatureList';


class Form extends Component {
    render() {
        return(
            <section className="main__form">
                <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                <FeaturesList/> 
            </section>
        )
    }
}

export default Form;