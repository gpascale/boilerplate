import React from 'react';
const guy = require('assets/images/guy-fieri.jpg');

var App = React.createClass({
  render: () => {
    return (
      <div className="app">
        Hello world!
        <img src={guy} />
      </div>
    );
  }
});

export default App;