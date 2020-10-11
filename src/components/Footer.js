import React from 'react';
import FontAwesome from 'react-fontawesome';
import logo from '../images/logo-ace-athens.png';
import map from '../images/map-b73450.jpg';

const Footer = () => (
  <div className="site-footer">
    <div id="logo">
      <img src={logo} alt="footer-logo" className="footer-logo" />
    </div>
    <div id="map">
      <a className="address" href="https://www.google.com/maps/place/Granikou+5,+Marousi+151+25/@38.0409353,23.8021585,17z/data=!3m1!4b1!4m5!3m4!1s0x14a198dc2305db37:0x78ce1c3af3a430f2!8m2!3d38.0409353!4d23.8043472" target="_blank" rel="noopener noreferrer">
        <img src={map} alt="map of ace athens" className="map" />
      </a>
    </div>
    <div  id="contact" >
      <h3>
        <a className="address" href="https://www.google.com/maps/place/Granikou+5,+Marousi+151+25/@38.0409353,23.8021585,17z/data=!3m1!4b1!4m5!3m4!1s0x14a198dc2305db37:0x78ce1c3af3a430f2!8m2!3d38.0409353!4d23.8043472" target="_blank" rel="noopener noreferrer">
          <FontAwesome className='address' name='building'spin={false}/> &nbsp; Γρανικού 5, Μαρούσι, Αττική, Ελλάδα
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
