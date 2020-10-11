import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import onClickOutside from 'react-onclickoutside';
import FontAwesome from 'react-fontawesome';


class Recondropdown extends Component {
  constructor() {
    super();
    this.state = {
      bclicked: false
    };
  }
  render() {
    const {listItems, listname} = this.props;
    const style = {
      line: {
        textDecorationStyle: "solid",
      },
      no: {
        textDecorationLine: "none",
      }
    };
    const selected = (this.state.bclicked) ? 'line' : 'no';
    return (this.state.bclicked) ? (
      <div className="dropdown-container">
        <button className="dropdown-title" style={style[selected]} onClick={this.dropdownmenu.bind(this)} > {listname}  <FontAwesome className='phone' name='angle-down' size='lg'/> </button>
          <div className="dropdown-content">
            <br/>
            <ul>
              <Link className='dropdown-link' to={`/breast-restoration`} ><li onClick={this.dropdownmenu.bind(this)}>{listItems[0]}</li></Link>
              <Link className='dropdown-link' to={`/nevi&melanomas`} ><li onClick={this.dropdownmenu.bind(this)}>{listItems[1]}</li></Link>
              <Link className='dropdown-link' to={`/burn`} ><li onClick={this.dropdownmenu.bind(this)}>{listItems[2]}</li></Link>
              <Link className='dropdown-link' to={`/trauma`} ><li onClick={this.dropdownmenu.bind(this)}> {listItems[3]} </li></Link>
              <Link className='dropdown-link' to={`/skin-cancer`} ><li onClick={this.dropdownmenu.bind(this)}> {listItems[4]} </li></Link>
              <Link className='dropdown-link' to={`/scars`} ><li onClick={this.dropdownmenu.bind(this)}> {listItems[5]} </li></Link>
              <Link className='dropdown-link' to={`/congenital-anomalies`} ><li onClick={this.dropdownmenu.bind(this)}> {listItems[6]} </li></Link>
            </ul>
          </div>
      </div> ) : (
      <div className="dropdown-container" >
        <button className="dropdown-title" onClick={this.dropdownmenu.bind(this)} style={style[selected]} > {listname}  <FontAwesome className='phone' name='angle-down' size='lg'/> </button>
      </div> )
    }
    dropdownmenu() {
      this.setState({ bclicked: !this.state.bclicked });
      console.log("bclicked is: " + this.state.bclicked);
    }
    handleClickOutside = () => {
      this.setState({bclicked: false})
    }
}
const UpdRecondropdown = onClickOutside(Recondropdown)

export {UpdRecondropdown}
