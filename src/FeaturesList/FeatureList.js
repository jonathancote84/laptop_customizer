import React, { Component } from 'react';
import './FeaturesList.css';
import Feature from '../Feature/Feature';

// what data is needed here 
class FeatureList extends Component {
    render() {
        return(
            <div>
                <Feature/>
            </div>
        )
    }
}

export default FeaturesList;