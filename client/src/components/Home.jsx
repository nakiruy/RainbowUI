import React from 'react';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="home">

       <img src="../../public/assets/logo.png"
            srcSet="../../public/assets/logo@2x.png 2x, ../../public/assets/logo@3x.png 3x"
            className="logo" />

        <img src="../../public/assets/gradient.png"
             srcSet="../../public/assets/gradient@2x.png, ../../public/assets/gradient@3x.png"
             className="Gradient" />

        <img src="../../public/assets/model.png"
             srcSet="../../public/assets/model@2x.png, ../../public/assets/model@3x.png"
             className="Model" />

        <img src="../../public/assets/f-a-s-h-i-o-n.png"
             srcSet="../../public/assets/f-a-s-h-i-o-n@2x.png 2x, ../../public/assets/f-a-s-h-i-o-n@3x.png 3x"
             className="F-A-S-H-I-O-N" />

        <h2 id="new">New Arrivals</h2>

        <img src="../../public/assets/highlight-bar.png"
             srcSet="../../public/assets/highlight-bar@2x.png 2x, ../../public/assets/highlight-bar@3x.png 3x"
             className="highlight-bar" />

        <h2 id="browse">Browse Collection</h2>
        <img src="../../public/assets/btn-gradient.png"
             srcSet="../../public/assets/btn-gradient@2x.png 2x, ../../public/assets/btn-gradient@3x.png 3x"
             className="btn-gradient" />

        <img src="../../public/assets/shapes.png"
             srcset="../../public/assets/shapes@2x.png 2x, ../../public/assets/shapes@3x.png 3x"
             className="shapes" />
      </div>
    )
  }
}

export default Home