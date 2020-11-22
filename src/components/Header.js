import React from 'react';
// import FontAwesome from 'react-fontawesome';
// import Sticky from 'react-stickynode';
// import scrollToComponent from 'react-scroll-to-component';
import {Link} from 'react-router-dom';
import { slide as Menu} from 'react-burger-menu';

import logo from '../images/logo-ace-athens.png';

import { UpdDropdown } from './dropdown';
import { UpdRecondropdown } from './dropdown_b';

import { HashLink } from 'react-router-hash-link';

// import { Switch, Route } from 'react-router-dom';
//
// import Home from './Home';
// import Laser from './Laser';
// import Limbs from './Limbs';
const reconstuct = ["ΑΠΟΚΑΤΑΣΤΑΣΗ ΜΑΣΤΟΥ", "ΣΠΙΛΟΙ & ΜΕΛΑΝΩΜΑΤΑ", "ΕΓΚΑΥΜΑ", "ΤΡΑΥΜΑ & ΕΛΛΕΙΜΑΤΑ ΜΑΛΑΚΩΝ ΜΟΡΙΩΝ", "ΚΑΡΚΙΝΟΣ ΔΕΡΜΑΤΟΣ", "ΟΥΛΕΣ", "ΣΥΓΓΕΝΕΙΣ ΑΝΩΜΑΛΙΕΣ"];
const aesthetics = ["Mη επεμβατικές θεραπείες", "Ελάχιστα επεμβατικές θεραπείες", "Χειρουργικές επεμβάσεις", "ΚΟΡΜΟΣ", "ΑΚΡΑ", "HIFU", "LASER", "ΠΡΩΤΟΠΟΡΙΑΚΕΣ ΘΕΡΑΠΕΙΕΣ", "AΝΝΑΓΕΝΗΤΙΚΗ ΙΑΤΡΙΚΗ"];

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }
  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})
  }
  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu () {
    this.setState({menuOpen: false})
  }
  render () {
    return (
      <div>
        <div className="burger-menu">
          <img src={logo} alt="header-logo" className="mini-logo" />
          <Menu right isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>
            <a className="menu-item main" href="/" onClick={() => this.closeMenu()} >Home</a>
            <HashLink className="menu-item main" to="/#About_Us" id="about" onClick={() => this.closeMenu()}>H ACE Athens</HashLink>
            <HashLink className="menu-item main" to="/#mastos" onClick={() => this.closeMenu()}>Μαστός</HashLink>
            <HashLink className="menu-item main" to="#contact" onClick={() => this.closeMenu()}>Επικοινωνία</HashLink>
            <p className="menu-mega-cat"> ΑΙΣΘΗΤΙΚΗ </p>
            <a className="menu-item" href="/innovative-therapies" onClick={() => this.closeMenu()}>Πρωτοποριακές Θεραπείες </a>
            <p className="menu-cat">ΠΡΟΣΩΠΟ</p>
            <a className="menu-item--small" href="/non-invasive-therapies" onClick={() => this.closeMenu()}> Μη επεμβατικές θεραπείες</a>
            <a className="menu-item--small" href="/slightly-invasive-therapies" onClick={() => this.closeMenu()}> Ελάχιστα επεμβατικές θεραπείες</a>
            <a className="menu-item--small" href="/face-surgery" onClick={() => this.closeMenu()}> Χειρουργικές επεμβάσεις</a>
            <a className="menu-item" href="/torso" onClick={() => this.closeMenu()}> ΚΟΡΜΟΣ</a>
            <a className="menu-item" href="/limbs" onClick={() => this.closeMenu()}>ΑΚΡΑ</a>
            <a className="menu-item" href="/hifu" onClick={() => this.closeMenu()}>HIFU</a>
            <a className="menu-item" href="/regererative-med" onClick={() => this.closeMenu()}>Αναγεννητική Ιατρική</a>
            <p className="menu-mega-cat" onClick={() => this.closeMenu()}> ΕΠΑΝΟΡΘΩΤΙΚΗ </p>
            <a className="menu-item" href="/breast-restoration" onClick={() => this.closeMenu()}>Αποκατάσταση Μαστού</a>
            <a className="menu-item" href='/nevi&melanomas' onClick={() => this.closeMenu()}> Σπίλοι & Μελανώματα</a>
            <a className="menu-item" href='/burn' onClick={() => this.closeMenu()}> Έγκαυμα</a>
            <a className="menu-item" href='/trauma' onClick={() => this.closeMenu()}> Τραύμα & <br/> Ελλείματα Μαλακών μορίων</a>
            <a className="menu-item" href='/skin-cancer' onClick={() => this.closeMenu()}>Καρκίνος Δέρματος</a>
            <a className="menu-item" href='/scars' onClick={() => this.closeMenu()}> Ουλές</a>
            <a className="menu-item" href='/congenital-anomalies' onClick={() => this.closeMenu()}> Συγγενείς Ανωμαλίες</a>
          </Menu>
        </div>
        <header className="App-header">
          <div className="mainlogo">
            <Link to='/'>
              <img src={logo} alt="header-logo" className="header-logo" />
            </Link>
          </div>
          <div className="menu">
            <ul>
              <li> <HashLink to='/#About_Us'>Σχετικά με την ACE Athens</HashLink> </li>
              <li> <UpdDropdown listname={`ΑΙΣΘΗΤΙΚΗ`} listItems={aesthetics} category={"ΠΡΟΣΩΠΟ"} /> </li>
              <li> <UpdRecondropdown listname="ΕΠΑΝΟΡΘΩΤΙΚΗ" listItems={reconstuct} /> </li>
              <li> <HashLink to='/#Services'>Εφαρμογές</HashLink> </li>
              <li> <HashLink to='#contact'>Επικοινωνία</HashLink> </li>
            </ul>
          </div>
        </header>
      </div>
    )
  }
}

// const Header = () => (
//   <div>
//     <div className="burger-menu">
//       <img src={logo} alt="header-logo" className="mini-logo" />
//       <Menu right>
//         <a className="menu-item main" href="/" >Home</a>
//         <HashLink className="menu-item main" to="/#About_Us" id="about">H ACE Athens</HashLink>
//         <HashLink className="menu-item main" to="/#mastos">Μαστός</HashLink>
//         <HashLink className="menu-item main" to="#contact">Επικοινωνία</HashLink>
//         <p className="menu-mega-cat"> ΑΙΣΘΗΤΙΚΗ </p>
//         <a className="menu-item" href="/#/innovative-therapies">Πρωτοποριακές Θεραπείες </a>
//         <p className="menu-cat">ΠΡΟΣΩΠΟ</p>
//         <a className="menu-item--small" href="/#/non-invasive-therapies"> Μη επεμβατικές θεραπείες</a>
//         <a className="menu-item--small" href="/#/slightly-invasive-therapies"> Ελάχιστα επεμβατικές θεραπείες</a>
//         <a className="menu-item--small" href="/#/face-surgery"> Χειρουργικές επεμβάσεις</a>
//         <a className="menu-item" href="/#/torso"> ΚΟΡΜΟΣ</a>
//         <a className="menu-item" href="/#/limbs">ΑΚΡΑ</a>
//         <a className="menu-item" href="/#/hifu">HIFU</a>
//         <p className="menu-mega-cat"> ΕΠΑΝΟΡΘΩΤΙΚΗ </p>
//         <a className="menu-item" href="/#/breast-restoration">Αποκατάσταση Μαστού</a>
//         <a className="menu-item" href='/#/nevi&melanomas'> Σπίλοι & Μελανώματα</a>
//         <a className="menu-item" href='/#/burn'> Έγκαυμα</a>
//         <a className="menu-item" href='/#/trauma'> Τραύμα & <br/> Ελλείματα Μαλακών μορίων</a>
//         <a className="menu-item" href='/#/skin-cancer'>Καρκίνος Δέρματος</a>
//         <a className="menu-item" href='/#/scars'> Ουλές</a>
//         <a className="menu-item" href='/#/congenital-anomalies'> Συγγενείς Ανωμαλίες</a>
//       </Menu>
//     </div>
//     <header className="App-header">
//       <div className="mainlogo">
//         <Link to='/'>
//           <img src={logo} alt="header-logo" className="header-logo" />
//         </Link>
//       </div>
//       <div className="menu">
//         <ul>
//           <li> <HashLink to='/#About_Us'>Σχετικά με την ACE Athens</HashLink> </li>
//           <li> <UpdDropdown listname={`ΑΙΣΘΗΤΙΚΗ`} listItems={aesthetics} category={"ΠΡΟΣΩΠΟ"} /> </li>
//           <li> <UpdRecondropdown listname="ΕΠΑΝΟΡΘΩΤΙΚΗ" listItems={reconstuct} /> </li>
//           <li> <HashLink to='/#Services'>Εφαρμογές</HashLink> </li>
//           <li> <HashLink to='#contact'>Επικοινωνία</HashLink> </li>
//         </ul>
//       </div>
//     </header>
//   </div>
// )


export  {Header}
