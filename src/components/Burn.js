import React from 'react';
import soon from '../images/coming_soon_aceathens.jpg'

class ScrollToTopOnMount extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return null
  }
}

const Burn = () => (
  <div className="sub_page">
  <ScrollToTopOnMount/>
  <h1> ΕΓΚΑΥΜΑ </h1>
    <div className="sub_flex">
      <div className="flexitem_a">
        <img src={soon} alt="" className="flexitem_text_w_picture_wide" />
     </div>
    </div>
  </div>
)

export default Burn
