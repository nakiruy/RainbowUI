import React from 'react';

class SocialMedia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>

       <img src="../../public/assets/facebook.png"
            srcSet="../../public/assets/facebook@2x.png 2x, ../../public/assets/facebook@3x.png 3x"
            className="Facebook" />
      
      <img src="../../public/assets/google-plus.png"
            srcSet="../../public/assets/google-plus@2x.png 2x, ../../public/assets/google-plus@3x.png 3x"
            className="GooglePlus" />

      <img src="../../public/assets/twitter.png"
            srcset="../../public/assets/twitter@2x.png 2x, ../../public/assets/twitter@3x.png 3x"
            className="Twitter" />

      <img src="../../public/assets/instagram.png"
            srcset="../../public/assets/instagram@2x.png 2x, ../../public/assets/instagram@3x.png 3x"
            className="Instagram" />

      </div>
    )
  }
}

export default SocialMedia
