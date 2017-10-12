import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="footer">

        <h4>Product</h4>
          <ul>
              <li>Payments</li>
              <li>Pricing</li>
              <li>Subscriptions</li>
              <li>Customers</li>
          </ul>
          
        <h4>Company</h4>
          <ul>
              <li>About</li>
              <li>Blog</li>
              <li>Jobs</li>
              <li>Press</li>
          </ul>

        <h4>Resources</h4>
          <ul>
              <li>Support</li>
              <li>Contact</li>
              <li>Privacy & Terms</li>
          </ul>
      </div>
    )
  }
}

export default Footer