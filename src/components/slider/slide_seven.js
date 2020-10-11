import React from 'react';

let slidePic = require('./sanitarium7.JPG');

const SlideSeven = (props) => {
  let background = {
    backgroundImage: "url(" + slidePic + ")",
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '600px'
  }
  return (
    <div className="slide">
      <div style={background} className="fadeInRight slide-picture" > </div>
    </div>
  )
}

export {SlideSeven};
