import React from 'react';

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="subscribe">

        <img src="../../public/assets/avatar.png"
             srcSet="../../public/assets/avatar@2x.png 2x, ../../public/assets/avatar@3x.png 3x"
             className="avatar" />

        <img src="../../public/assets/avatar_2.png"
             srcSet="../../public/assets/avatar_2@2x.png 2x, ../../public/assets/avatar_2@3x.png 3x"
             className="avatar_2" />

        <img src="../../public/assets/avatar_3.png"
             srcSet="../../public/assets/avatar_3@2x.png 2x, ../../public/assets/avatar_3@3x.png 3x"
             className="avatar_3" />

        <img src="../../public/assets/picture.png"
             srcSet="../../public/assets/picture@2x.png 2x, ../../public/assets/picture@3x.png 3x"
             className="picture" />

        <img src="../../public/assets/play-btn.png"
             srcSet="../../public/assets/play-btn@2x.png 2x, ../../public/assets/play-btn@3x.png 3x"
             className="play-btn" />

        <h4>We encourage creativity</h4>
        <h5>
          Large businesses require a lot of IT infastructure and a department to look after it.
          Small businesses often can't afford to have that sort of internal support in place, yet they need fully operational IT systems in order for the businesses to run properly.
          For businesses like these, external IT support can be a cost-effective yet vital resource.
        </h5>
      </div>
    )
  }
}

export default Video