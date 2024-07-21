// src/App.js

import React from 'react';
import './App.css';
import whiteLogo from './assets/imgs/White.png';
import WireframeBackground from './components/WireframeBackground';
import ExpandablePhotoGallery from './components/ExpandablePhotoGallery';
import PhotoTile from './components/PhotoTile';


import instagramIcon from './assets/icons/instagram-icon.png';
import pythonIcon from './assets/icons/python-icon.png';
import cIcon from './assets/icons/c-icon.png';
import cppIcon from './assets/icons/cpp-icon.png';
import mysqlIcon from './assets/icons/mysql-icon.png';
import htmlIcon from './assets/icons/html-icon.png';
import cssIcon from './assets/icons/css-icon.png';
import reactIcon from './assets/icons/react-icon.png';
import jsIcon from './assets/icons/js-icon.png';
import photoshopIcon from './assets/icons/photoshop-icon.png';
import lightroomIcon from './assets/icons/lightroom-icon.png';
import davinciIcon from './assets/icons/davinci-icon.png';
import premiereIcon from './assets/icons/premiere-icon.png';
import vscodeIcon from './assets/icons/vscode-icon.png';
import figmaIcon from './assets/icons/figma-icon.png';


// Dynamically import all images from the 'gallery' folder
const imageContext = require.context('./assets/imgs/gallery', false, /\.(png|jpe?g|svg)$/);
const imageFiles = imageContext.keys().map(imageContext);

function App() {

  const instagramUsername = 'phiiliii';

  return (
    <div className="app-container">
      <WireframeBackground />
      <div className="content">
        <header>
          <div className="logo">
            <img src={whiteLogo} alt="Logo" />
            <div>
              <h1>Philipose Alexander</h1>
              <p>B.Tech Computer Science and Engineering</p>
            </div>
          </div>
          <div className="external-links">
            <a href="https://linkedin.com/in/philiposealexander" className="external-link">LinkedIn</a>
            <a href="https://drive.google.com/file/d/1kW_gilIT9SVM36oeaX6YlavWbTK5jGyl/view?usp=drive_link" className="external-link">Resume</a>
          </div>
        </header>

        <div className="about-section">
          
          <h1>
              Framing Life Through <span className="cursive-font">Lenses </span> and <span className="eight-bit-font">Algorithms</span>.
            </h1>
            <h2>ABOUT ME</h2>
          <div className="about-me-content">
            <PhotoTile />
            <p>
              Hello! I'm Philipose Alexander from Palakkad, Kerala, with a B.Tech in Computer Science and Engineering. I've charted my own course as a self-taught photographer, merging my tech expertise with a passion for capturing the world. Whether tackling tech challenges or snapping photos, I love blending creativity with technical skill. Welcome to my portfolio, where you'll see the intersection of my two worlds: technology and photography.
            </p>
          </div>
        </div>

        <div className="photo-gallery-section">
          <h2>PHOTOGRAPHY</h2>
          <div className="instagram-profile">
            <img src={instagramIcon} alt="Instagram" className="instagram-icon" />
            <a href="https://www.instagram.com/phiiliii" className="instagram-username">phiiliii</a>
            </div>
          <ExpandablePhotoGallery images={imageFiles} instagramUsername={instagramUsername} />
        </div>

      
        <div className="skills-section">
            <h2>SKILLS</h2>
            <div className="skills-container">
              <div className="skill">
                <img src={pythonIcon} alt="Python" className="skill-icon" />
                <div className="skill-name">Python</div>
              </div>
              <div className="skill">
                <img src={cIcon} alt="C" className="skill-icon" />
                <div className="skill-name">C</div>
              </div>
              <div className="skill">
                <img src={cppIcon} alt="C++" className="skill-icon" />
                <div className="skill-name">C++</div>
              </div>
              <div className="skill">
                <img src={mysqlIcon} alt="MySQL" className="skill-icon" />
                <div className="skill-name">MySQL</div>
              </div>
              <div className="skill">
                <img src={htmlIcon} alt="HTML" className="skill-icon" />
                <div className="skill-name">HTML</div>
              </div>
              <div className="skill">
                <img src={cssIcon} alt="CSS" className="skill-icon" />
                <div className="skill-name">CSS</div>
              </div>
              <div className="skill">
                <img src={reactIcon} alt="React" className="skill-icon" />
                <div className="skill-name">React</div>
              </div>
              <div className="skill">
                <img src={jsIcon} alt="JavaScript" className="skill-icon" />
                <div className="skill-name">JavaScript</div>
              </div>
            <div className="skill">
               <img src={photoshopIcon} alt="Photoshop" className="skill-icon" />
              <div className="skill-name">Photoshop</div>
             </div>
            <div className="skill">
              <img src={lightroomIcon} alt="Lightroom" className="skill-icon" />
              <div className="skill-name">Lightroom</div>
            </div>
            <div className="skill">
              <img src={davinciIcon} alt="DaVinci Resolve" className="skill-icon" />
              <div className="skill-name">DaVinci Resolve</div>
             </div>
            <div className="skill">
              <img src={premiereIcon} alt="Adobe Premiere Pro" className="skill-icon" />
              <div className="skill-name">Adobe Premiere Pro</div>
            </div>
            <div className="skill">
              <img src={vscodeIcon} alt="Visual Studio Code" className="skill-icon" />
              <div className="skill-name">Visual Studio Code</div>
            </div>
            <div className="skill">
              <img src={figmaIcon} alt="Figma" className="skill-icon" />
              <div className="skill-name">Figma</div>
            </div>
          </div>
        </div>

        <footer>
          <p>© 2024 Philipose Alexander. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;