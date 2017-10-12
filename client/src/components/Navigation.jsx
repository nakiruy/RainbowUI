import React from 'react';
import { Route, Link as Router } from 'react-router-dom';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
          <div className="navigation">
            <nav>
              <ul>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Shipping</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </nav>
          </div>
      </div>
    )
  }
}

export default Navigation