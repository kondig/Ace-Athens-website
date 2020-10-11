import React, {Component} from 'react';
import {SlideOne} from './slide_one';
import {SlideTwo} from './slide_two';
import {SlideThree} from './slide_three';
import {RightButton} from './rightButton';
import {LeftButton} from './leftButton';
import {SlideFour} from './slide_four';
import {SlideFive} from './slide_five';
import {SlideSix} from './slide_six';
import {SlideSeven} from './slide_seven';
import {SlideEight} from './slide_eight';
import {SlideNine} from './slide_nine';



class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideCounter: 1,
      translateValue: 0
     };
    this.nextPic = this.nextPic.bind(this);
    this.previousPic = this.previousPic.bind(this);
  };
  componentDidUpdate = () => {
    console.log(this.state.slideCounter);
    if (this.state.slideCounter < 1) { this.setState({ slideCounter: 9}) };
    if (this.state.slideCounter > 9) { this.setState({ slideCounter: 1}) };
  }
  renderSlides = () => {
    let sections = [];
    for (let i=0; i < 9; i++) {
      sections.push(<SlideOne key={i} />)
    return sections
    }
  }

  render() {
    const { slideCounter, translateValue } = this.state;
    console.log(translateValue);
    return (
      <div className='slider'>
        <div className='sliderContainer'
          style={{
            height: '600px',
            width: '100%'}}>
          {slideCounter === 1 ? <SlideOne /> : null }
          {slideCounter === 2 ? <SlideTwo  /> : null }
          {slideCounter === 3 ? <SlideThree  /> : null }
          {slideCounter === 4 ? <SlideFour  /> : null }
          {slideCounter === 5 ? <SlideFive  /> : null }
          {slideCounter === 6 ? <SlideSix  /> : null }
          {slideCounter === 7 ? <SlideSeven  /> : null }
          {slideCounter === 8 ? <SlideEight  /> : null }
          {slideCounter === 9 ? <SlideNine  /> : null }
        </div>

          <RightButton nextPic={ this.nextPic } />
          <LeftButton previousPic={ this.previousPic } />
      </div>
    );
  }

  nextPic() {
    this.setState({
      slideCounter: this.state.slideCounter + 1
    });
  }
  previousPic() {
    this.setState({
      slideCounter: this.state.slideCounter - 1
    });
  }

}

export {Slider}
