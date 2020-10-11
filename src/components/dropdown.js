import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import onClickOutside from 'react-onclickoutside';
import FontAwesome from 'react-fontawesome';



class Dropdown extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
      faceon: false,
    };
  }
  render() {
    const {listItems, listname, category} = this.props;
    const style = {
      line: {
        textDecorationStyle: "solid",
      },
      no: {
        textDecorationLine: "none",
      }
    };
    const selected = (this.state.clicked) ? 'line' : 'no';
    return (this.state.clicked) ? (
      <div className="dropdown-container" >
        <button className="dropdown-title" style={style[selected]} onClick={this.dropdownitem.bind(this)} > {listname}   <FontAwesome className='phone' name='angle-down' size='lg'/>  </button>
              <div className="dropdown-content">
                <br/>
                <ul>
                  <li className="dropdown-category" onClick={this.openface.bind(this)}> <p>{category} <FontAwesome className='phone' name='angle-right' /></p>
                    <ul className={this.state.faceon ? 'submenu' : 'hideface'}>
                      <Link className='dropdown-catlink' to={`/non-invasive-therapies`} onClick={this.dropdownitem.bind(this)}><li>{listItems[0]}</li></Link>
                      <Link className='dropdown-catlink' to={`/slightly-invasive-therapies`} onClick={this.dropdownitem.bind(this)}><li>{listItems[1]}</li></Link>
                      <Link className='dropdown-catlink' to={`/face-surgery`} onClick={this.dropdownitem.bind(this)}><li>{listItems[2]}</li></Link>
                    </ul>
                  </li>
                  <Link className='dropdown-link' to={`/torso`} onClick={this.dropdownitem.bind(this)}><li> {listItems[3]} </li></Link>
                  <Link className='dropdown-link' to={`/limbs`} onClick={this.dropdownitem.bind(this)}><li> {listItems[4]} </li></Link>
                  <Link className='dropdown-link' to={`/hifu`} onClick={this.dropdownitem.bind(this)}><li> {listItems[5]} </li></Link>
                  <Link className='dropdown-link' to={`/innovative-therapies`} onClick={this.dropdownitem.bind(this)}><li> {listItems[7]} </li></Link>
                </ul>
              </div>
          </div> ) : (
        <div className="dropdown-container"  >
          <button className="dropdown-title" style={style[selected]} onClick={this.dropdownitem.bind(this)} > {listname} <FontAwesome className='phone' name='angle-down' size='lg'/> </button>
        </div> )
    }
    dropdownitem() {
      this.setState({clicked: !this.state.clicked});
      console.log("clicked is: " + this.state.clicked);
    }
    openface() {
      this.setState({faceon: !this.state.faceon});
      console.log("face submenu is: " + this.state.faceon);
    }
    handleClickOutside = () => {
      this.setState({clicked: false})
    }
}
const UpdDropdown = onClickOutside(Dropdown)

export {UpdDropdown}
