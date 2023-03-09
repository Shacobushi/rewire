import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className='footer'>
      <div>
        <p>Thank you so much for this opportunity!!</p>
        <h4>Claudio Canevello</h4>
        <div className='icons-container'>
          <a
            href='https://www.linkedin.com/in/claudio-canevello-5b0447174/'
            target='_blank'
            rel='noreferrer'
          >
            <AiFillLinkedin />
          </a>
          <a
            href='https://github.com/Shacobushi'
            target='_blank'
            rel='noreferrer'
          >
            <AiFillGithub />
          </a>
          <a
            href='https://www.instagram.com/lost_in_the_clauds/'
            target='_blank'
            rel='noreferrer'
          >
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
