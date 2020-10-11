import React from 'react';
import FontAwesome from 'react-fontawesome';

const LeftButton = (props) => {
  return (
    <div className='backButton' onClick={props.previousPic} style={{cursor: 'pointer'}} >
      <FontAwesome className='leftButton' name='angle-left' size='4x'/>
    </div>
  )
}

export {LeftButton};
