import React from 'react';

class Subscribe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="subscribe">
        <h4>Subscribe to our newsletter</h4>
        <input type="text" name="email" placeholder="Your email address"></input>
        <button>Submit</button>
      </div>
    )
  }
}

export default Subscribe