import React from 'react';

let slidePic = require('./sanitarium1.JPG');

const SlideOne = (props) => {
  let background = {
    backgroundImage: "url(" + slidePic + ")",
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '600px'
  }
  // let text = {
  //   height: '600px',
  //   backgroundColor: '#AFBDC5',
  // }
  return (
    <div className="slide">
      <div className="slide-picture" style={background} ></div>
    </div>

  )
}

export {SlideOne} ;
