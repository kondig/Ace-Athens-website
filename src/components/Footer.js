import React from 'react';
import FontAwesome from 'react-fontawesome';
import logo from '../images/logo-ace-athens.png';
import map from '../images/map.png';

const Footer = () => (
  <div className="site-footer">
    <div id="logo">
      <img src={logo} alt="footer-logo" className="footer-logo" />
    </div>
    <div id="map">
      <a className="address" href="https://goo.gl/maps/jLDkkY5QKussVJXs5" target="_blank" rel="noopener noreferrer">
        <img src={map} alt="map of Αce Αthens" className="map" />
      </a>
    </div>
    <div  id="contact" >
      <h3>
        <a className="address" href="https://goo.gl/maps/jLDkkY5QKussVJXs5" target="_blank" rel="noopener noreferrer">
          <FontAwesome className='address' name='building'spin={false}/> &nbsp; <span className="address-text"> Λεωφόρος Κηφισίας 27, Αθήνα, 11523, Αττική</span>
        </a>
        <br/><br/>
        <FontAwesome className='phone' name='phone' spin={false}/> &nbsp; <a className="phone" href="tel:+302106471066">+30 210 64 71 066</a>
        <br/><br/>
        <FontAwesome className='mobile' name='mobile' size='2x' /> &nbsp; <a className="mobile" href="tel:+306944603863">+30 694 46 03 863</a>
        <br/><br/>
        <FontAwesome className='email' name='envelope-open' spin={false} style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
        <a className="email" href="mailto:papa_kos@otenet.gr" target="_blank" rel="noopener noreferrer" >&nbsp; papa_kos@otenet.gr</a>
        <br/><br/>
        <a href='https://www.linkedin.com/in/kostas-papaioannou-036b6640/' className='linkedin' target="_blank" rel="noopener noreferrer">
          <FontAwesome className='linkedinIcon' name='linkedin-square' size='4x' spin={false} style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
        </a>
        <a href='https://www.facebook.com/kostaspapaioannouplasticsurgeon/' className='facebook' target="_blank" rel="noopener noreferrer">
          <FontAwesome className='facebookIcon' name='facebook-square' size='4x' spin={false} style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
        </a>
      </h3>
    </div>
  </div>
)


export  {Footer}
