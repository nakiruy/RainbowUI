import React from 'react';
import { Route, Link as Router } from 'react-router-dom';

import Navigation from './Navigation';
import Home from './Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
          <div className="header">
            <Home />
          </div>
      </div>
    )
  }
}

export default App