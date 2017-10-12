import React from 'react';
import { Route, Link as Router } from 'react-router-dom';
import '../../css/style.scss'

import Navigation from './Navigation';
import Home from './Home';
import Description from './Description';
import SellingPoints from './SellingPoints';
import Video from './Video';
import Stats from './Stats';
import Feedback from './Feedback';
import SocialMedia from './SocialMedia';
import Subscribe from './Subscribe';
import Footer from './Footer';

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
            <Navigation />
          </div>
          {/* <div className="content">
            <Description />
            <SellingPoints />
            <Video />
            <Stats />
            <Feedback />
            <Footer />
            <Subscribe />
            <SocialMedia />
          </div> */}
      </div>
    )
  }
}

export default App