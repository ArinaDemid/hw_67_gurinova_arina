import React, {Component} from 'react';
import './App.css';
import DoorPassword from './containers/DoorPassword/DoorPassword';

class App extends Component{
  render() {
    return (
      <div className="AppBox">
        <DoorPassword/>
      </div>
    );
  }
}

export default App;
