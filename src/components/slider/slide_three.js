import React from 'react';

let slidePic = require('./sanitarium3.JPG');

const SlideThree = (props) => {
  let background = {
    backgroundImage: "url(" + slidePic + ")",
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '600px'
  }
  // let text = {
  //   height: '400px',
  //   backgroundColor: '#AFBDC5',
  // }
  return (
    <div className="slide">
      <div style={background} className="fadeInRight slide-picture"></div>
    </div>
  )
}

export {SlideThree};
