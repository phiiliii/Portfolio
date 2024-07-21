import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Background.css';

const Background = () => {
  return (
    <div className="background">
      <Tilt className="tilt" tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} scale={1.05} transitionSpeed={1500}>
        <div className="inner-element">
          <div className="light"></div>
          <div className="light"></div>
          <div className="light"></div>
          <div className="light"></div>
          <div className="light"></div>
          <div className="light"></div>
        </div>
      </Tilt>
    </div>
  );
};

export default Background;
