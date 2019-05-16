import React, { Component } from 'react';
import './Summary.css';

export default class Summary extends Component {
    render() {
        console.log(this.props.selected)
        //here the state is passed to summary 
        const summary = Object.keys(this.props.selected)
            .map(key => <div className="summary__option" key={key}>
            <div className="summary__option__label">{key}  </div>
            <div className="summary__option__value">{this.props.selected[key].name}</div>
            <div className="summary__option__cost">
                { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(this.props.selected[key].cost) }
            </div>
        </div>)
        //here's the state is sent to summary total 
        const total = Object.keys(this.props.selected)
        .reduce((acc, curr) => acc + this.props.selected[curr].cost, 0);   
        return (
            <section className="main__summary">
                <h3>NEW GREENLEAF 2018</h3>
                {/* reanders summary based on state  */}
                {summary}
                <div className="summary__total">
                <div className="summary__total__label">Your Price: </div>
                <div className="summary__total__value">
                {/* renders total here  */}
                { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(total) }
                </div>
                </div>
            </section>            
        )
    }
}
