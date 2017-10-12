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
              <ul className="navBar">
                <li className="nav" id="men">Men</li>
                <li className="nav" id="women">Women</li>
                <li className="nav" id="kids">Kids</li>
                <li className="nav" id="shipping">Shipping</li>
                <li className="nav" id="blog">Blog</li>
                <li className="nav" id="contact">Contact</li>
              </ul>
            </nav>
          </div>
      </div>
    )
  }
}

export default Navigation