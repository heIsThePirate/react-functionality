import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import 'tachyons';
import Background from './Background';

const action = {
  "particles": {
          "number": {
            "value": 150
          },
          "size": {
            "value": 3
          }
        }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className = 'particle' params={action} />
        <Background />
      </div>
    );
  }
}

export default App;
