import React from 'react';

import Tweets from './Tweets';

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="feedback">

        <img src="../../public/assets/graph.png"
             srcset="../../public/assets/graph@2x.png 2x, ../../public/assets/graph@3x.png 3x"
             className="graph" />

        <h3>What others say</h3>

        <img src="../../public/assets/f-e-e-d-b-a-c-k.png"
             srcSet="../../public/assets/f-e-e-d-b-a-c-k@2x.png 2x, ../../public/assets/f-e-e-d-b-a-c-k@3x.png 3x"
             className="F-E-E-D-B-A-C-K" />

        <Tweets />
      </div>
    )
  }
}

export default Feedback