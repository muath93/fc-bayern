import React from 'react';

import { TeamLogo } from '../Utilites/icons';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bck_blue">
      <div className="footer_logo">
        <TeamLogo width="4rem" height="4rem" link={true} linkTo="/" />
      </div>
      <div className="footer_discl">
        <p> Manchester City {year}.All right reseved </p>
      </div>
    </footer>
  );
};

export default Footer;
