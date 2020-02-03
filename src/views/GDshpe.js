import React, { Component } from 'react';
// Route view imports
import PrintGallery from "../components/graphicDesign/SHPE_SCU/printGallery"
import DigitalGallery from "../components/graphicDesign/SHPE_SCU/digitalGallery"
import BrandingDetail from "../components/graphicDesign/SHPE_SCU/brandingDetail"
import MotionGraphicsGallery from "../components/graphicDesign/SHPE_SCU/motionGraphicsGallery"
// Lottie
import * as lottie from 'lottie-web/build/player/lottie.js'
import animationData from '../lotties/shpe_logo_animation/shpe_logo_animation_data.json'

class GDshpe extends Component {

  constructor (props) {
    super(props)
    this.state = {
      // Transform
      transform: 'none'
    }
  }

  anim;
  elem;

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);

    this.elem = document.getElementById('bodymovin')

    this.anim = lottie.loadAnimation({
        container: this.elem,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad:false,
            preserveAspectRatio: 'xMidYMid slice',
        },
        animationData: animationData
    });
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = (event) => {
      let scrollTop = event.srcElement.body.scrollTop,
          itemTranslate = Math.min(0, scrollTop/3 - 60);

      this.setState({
        transform: itemTranslate
      });


      // calculate the percentage the user has scrolled down the page
      var scrollPercent = 100 * window.pageYOffset / (window.document.body.offsetHeight - document.documentElement.clientHeight);

      var scrollPercentRounded = Math.round(scrollPercent);

      console.log(this.anim)
      console.log("Scroll % Rounded: " ,scrollPercentRounded)
      console.log( (scrollPercentRounded / 100) * this.anim.totalFrames );

      this.anim.goToAndStop( (scrollPercentRounded / 100) * 4000)
  };

  render() {
    return (
      <div className="view">
        <h1>SHPE</h1>
            <div id="bodymovin"></div>
        <div className="content">
          <div className="content--inner">
            SHPE SCU will always have a special place in my heart. From humble beginnings, SHPE SCU has maintained the values of the national organization while fostering a local community who wants the best for each other. The identity of the club has been formed to stay true to its origins while developing to include the story of the present and future of Bronco SHPE members. <br></br> The branding refresh was an effort to revitalize SHPE into something bigger than we had seen during our first 2-3 years at SCU. I was able to make prototypes of what the visual revitalization would look like and pitch it from various perspectives to the board.<br></br> The mission of SHPE was already the seal of a good club, we just needed more people to see and want to carry on the mission as well. Joining the board was a chance to create the appeal and open up the doors to a wider audience. Pitching a club in college, the main difficulty is competing for each other's attention. Between schoolwork, life planning, leisure, and other clubs, it's no wonder people join and drop off later, there simply isn't enough time to do everything one wants. Visual identities appeal to the emotion in us, and the goal of all this work in the end was to make it as easy and attractive as possible to join us. Whether the hook is being lost in a discipline where representation of people who look like you is uncommon, or you've achieved success and want to come back and help, we all have our stories that are welcome in this familia.
            <h2>The Rebrand Defined:</h2>
            <ul>
              <li>Logo</li>
              <li>Advertising</li>
              <li>Swag</li>
              <li>Social Media Presence</li>
              <li>Unified Look and Feel</li>
            </ul>
            <h2>Posts this project is mentioned</h2>
            <ul>
              <li><em>Coming soon...</em></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default GDshpe