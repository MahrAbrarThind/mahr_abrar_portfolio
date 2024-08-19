import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import Typewriter from './Typewriter.jsx';

const Home = () => {
  const helloWords = ['Hello!', 'Hola!', 'Hei!', 'Bonjour!', 'Hallo!', 'Ciao!'];
  const skillWords = ['A Frontend Developer', 'A Web Designer', 'A Web Developer', 'A CS Student'];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'Abrar Hussain CV.pdf';
    link.download = 'Abrar_Hussain_CV.pdf';
    link.click();
  };

  const handleView = () => {
    window.open('Abrar Hussain CV.pdf', '_blank');
  };

  return (
    <>
      <div id='home' className="homeContainer">
        <div class="card">
          <ul>
            <li class="iso-pro">
              <span></span>
              <span></span>
              <span></span>
              <a href="https://www.linkedin.com/in/abrar-hussain-aa3099293/" target='_blank'>
                <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" class="svg">
                  <path d="M100.28 448H7.4V148.9h92.88zm-46.14-341C24.29 107 0 82.74 0 54.77a53.74 53.74 0 11107.48 0c0 27.97-24.29 52.23-53.34 52.23zM447.86 448h-92.68V302.4c0-34.69-.69-79.3-48.33-79.3-48.41 0-55.82 37.83-55.82 76.96V448h-92.68V148.9h89V188h1.27c12.42-23.54 42.75-48.33 87.91-48.33 94 0 111.29 61.92 111.29 142.3V448z" />
                </svg>
              </a>
              <div class="text">LinkedIn</div>
            </li>
            <li class="iso-pro">
              <span></span>
              <span></span>
              <span></span>
              <a href="https://github.com/MahrAbrarThind" target='_blank'>
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="svg">
                  <path d="M256 32C114.62 32 0 146.63 0 288c0 113.3 73.31 209.25 175.1 243.1 12.8 2.4 17.5-5.6 17.5-12.4v-44.7c-71.4 15.6-86.6-34.7-86.6-34.7-11.6-29.4-28.4-37.2-28.4-37.2-23.2-15.9 1.8-15.6 1.8-15.6 25.7 1.8 39.2 26.4 39.2 26.4 22.8 39.1 59.7 27.8 74.3 21.3 2.4-16.5 8.9-27.8 16.1-34.2-57-6.5-117-28.6-117-127.2 0-28.1 10-51 26.4-69 -2.6-6.5-11.4-32.7 2.5-68.1 0 0 21.5-6.9 70.5 26.2 20.4-5.6 42.3-8.4 64.1-8.5 21.8 .1 43.8 2.9 64.2 8.5 49-33.1 70.4-26.2 70.4-26.2 13.9 35.4 5.1 61.6 2.5 68.1 16.5 18 26.4 40.9 26.4 69 0 98.9-60.1 120.7-117.2 127 9.2 7.9 17.5 23.7 17.5 47.9v71c0 6.8 4.6 14.8 17.6 12.4C438.7 497.2 512 401.3 512 288c0-141.37-114.62-256-256-256z" />
                </svg>
              </a>
              <div class="text">GitHub</div>
            </li>
            <li class="iso-pro">
              <span></span>
              <span></span>
              <span></span>
              <a href="https://www.youtube.com/@abrarhussain3150" target='_blank'>
                <svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg" class="svg">
                  <path d="M549.65 124.08c-6.16-23.26-24.3-41.4-47.56-47.56C451.36 64 288 64 288 64S124.65 64 73.91 76.52C50.65 82.68 32.51 100.82 26.35 124.08 14 176.32 14 256 14 256s0 79.68 12.35 131.92c6.16 23.26 24.3 41.4 47.56 47.56C124.65 448 288 448 288 448s163.35 0 214.09-12.52c23.26-6.16 41.4-24.3 47.56-47.56C562 335.68 562 256 562 256s0-79.68-12.35-131.92zM232 338.28V173.72L374.84 256 232 338.28z" />
                </svg>
              </a>
              <div class="text">YouTube</div>
            </li>

            <li class="iso-pro">
              <span></span>
              <span></span>
              <span></span>
              <a href="mailto:abrar33020@gmail.com">
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="svg">
                  <path d="M502.3 190.8L327.4 303.4 255.7 352 184.6 303.3 9.7 190.8C3.6 187.2 0 181.2 0 174.6V73.9c0-9.6 10.5-15.4 18.7-10.7L255.7 211.8 493.3 63.2c8.2-4.8 18.7 1.1 18.7 10.7v100.7c0 6.7-3.6 12.6-9.7 16.2zM499.4 71.8C499.4 55.8 486.6 43 470.6 43H41.4C25.4 43 12.6 55.8 12.6 71.8V440.2C12.6 456.2 25.4 469 41.4 469H470.6C486.6 469 499.4 456.2 499.4 440.2V71.8zM256 338.7L115.6 242.6v-30.7L256 305.1 396.4 211.9v30.7L256 338.7z" />
                </svg>
              </a>
              <div class="text">Mail</div>
            </li>
          </ul>
        </div>






        {/* 
        <div className="socialMediaBar">
        <a href="https://www.linkedin.com/in/abrar-hussain-aa3099293/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/MahrAbrarThind" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-github"></i>
          </a>
          
          <a href="https://www.youtube.com/@abrarhussain3150" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-youtube"></i>
          </a>
          <a href="mailto:abrar33020@gmail.com">
            <i className="fa fa-envelope"></i>
          </a>
        </div> */}

        <div className="textContainer">
          <Typewriter words={helloWords} className="hello" />
          <p className='name'>I'm Abrar Hussain</p>
          {/* <Typewriter words={skillWords} className="skill" /> */}
          <p className="skill">A Web Developer</p>

          <div className="buttons">
            <button className="download-button button" onClick={handleDownload}>
              <span>
                <i className="fa-solid fa-download"></i> CV
              </span>
            </button>

            <button className="eye-button button" onClick={handleView}>
              <span>
                <i className="fa-solid fa-eye"></i> CV
              </span>
            </button>
          </div>
        </div>

        <img src="ai generated 1.png" alt="Image" />

        <div className="scroll-button">
          <Link to="about" spy={true} smooth={true} duration={500}>
            <span className="arrow arrow1"></span>
            <span className="arrow arrow2"></span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
