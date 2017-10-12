import React from 'react';

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>

        <img src="../../public/assets/pie-chart.png"
             srcSet="../../public/assets/pie-chart@2x.png 2x, ../../public/assets/pie-chart@3x.png 3x"
             className="pie-chart" />

        <h3>Detailed statistics</h3>
        <h4>
          Do you want to download free song for ipod? 
          If so, reading this article could save you from getting in to a lot of trouble! 
          Downloading music to your Ipod has more than one pitfall associated with it, 
          and this article will tell you the best way to download free song for Ipod.
        </h4>
      </div>
    )
  }
}

export default Stats
