import React, { Component } from 'react';

class Popout extends Component {
  componentWillUnmount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div className='popout'>

          <h1> {this.props.title} </h1>
          <div> {this.props.text} </div>
          <button className='close-button' onClick={this.props.closePopout}> Κλείσιμο </button>

      </div>
    )
  }
}


class HostPopout extends Component {
  constructor(props) {
    super(props);
    // this.popout = this.popout.bind(this);
    // this.popoutClosed = this.popoutClosed.bind(this);
    this.state = { isPoppedOut: false};
}

  togglePopout() {
    this.setState({
      isPoppedOut: !this.state.isPoppedOut
    });
  }
  render() {
    const {title, text, buttonname } = this.props;
    return (
    <div className='popout-container'>

      <button className='popout-button' onClick={this.togglePopout.bind(this)}>{buttonname} ↓↓</button>

      {this.state.isPoppedOut ?
          <Popout
            title={title}
            text={text}
            closePopout={this.togglePopout.bind(this)}
          />
          : null
        }

    </div>
    );
  }
}

  export {HostPopout};
