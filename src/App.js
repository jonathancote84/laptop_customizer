import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Form from './Form/Form';
import Summary from './Summary/Summary';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
        <main>
          <Form features={this.props.features}/>
       
          <Summary />  
        </main>
      </div>
    );
  }
}

export default App;  
