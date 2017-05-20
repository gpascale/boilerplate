import React from 'react';
import { connect } from 'react-redux';
const guy = require('assets/images/guy-fieri.jpg');

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="app">
        Hello world!
        <img src={guy} />
      </div>
    );
  }
}

export default App;