import React from 'react';

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="description">
        <h2 id="perfect">Perfect for busy people</h2>
        <h3 id="perfect-descript">With TaskTrack you will never lose track of you buys schedule. We promise :)</h3>

        /* <div className="perfect-img">

          <div className="buttons">
              <img src="../../public/assets/apple-logo.png"
                  srcSet="../../public/assets/apple-logo@2x.png 2x, ../../public/assets/apple-logo@3x.png 3x"
                  className="apple_logo" />App Store

              <img src="../../public/assets/g-play.png"
                    srcSet="../../public/assets/g-play@2x.png 2x, ../../public/assets/g-play@3x.png 3x"
                    className="g-play" />Google Store
            </div>

          <div className="phones">

            <img src="../../public/assets/mid-phone.png"
                srcSet="../../public/assets/mid-phone@2x.png 2x, ../../public/assets/mid-phone@3x.png 3x"
                className="mid-phone" />

            <img src="../../public/assets/left-phone.png"
                srcSet="../../public/assets/left-phone@2x.png 2x, ../../public/assets/left-phone@3x.png 3x"
                className="left-phone" />

            <img src="../../public/assets/right-phone.png"
                srcSet="../../public/assets/right-phone@2x.png 2x, ../../public/assets/right-phone@3x.png 3x"
                className="right-phone" />

            <img src="../../public/assets/spots-left.png"
                srcSet="../../public/assets/spots-left@2x.png 2x, ../../public/assets/spots-left@3x.png 3x"
                className="spots-left" />

            <img src="../../public/assets/spots-right.png"
                srcSet="../../public/assets/spots-right@2x.png 2x, ../../public/assets/spots-right@3x.png 3x"
                className="spots-right" />
          </div> */

        </div>

      </div>
    )
  }
}

export default Description