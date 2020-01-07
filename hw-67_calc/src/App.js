import React, {Component} from 'react';
import './App.css';
import CalculatorMy from './containers/CalculatorMy/CalculatorMy';

class App extends Component{
  render() {
    return (
      <div className="AppBox">
        <CalculatorMy/>
      </div>
    );
  }
}

export default App;
