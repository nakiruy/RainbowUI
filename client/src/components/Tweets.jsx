import React from 'react';

class Tweets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="tweets">
        Tweets goes here. Perhaps use mapArr.

        <img src="../../public/assets/twitter.png"
             srcSet="../../public/assets/twitter@2x.png 2x, ../../public/assets/twitter@3x.png 3x"
             className="Twitter" />
      </div>
    )
  }
}

export default Tweets