import React from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Toolbar, Button } from '@material-ui/core';

import { TeamLogo } from '../Utilites/icons';

const Header = () => {
  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: '#98c5e9',
        boxShadow: 'none',
        padding: '0.8rem 0',
        borderBottom: '2px solid #00285e'
      }}
    >
      <Toolbar style={{ display: 'flex' }}>
        <div style={{ flexGrow: 1 }}>
          <div className="header_logo">
            <TeamLogo link={true} linkTo="/" width="4rem" height="4rem" />
          </div>
        </div>

        <Link to="/team">
          <Button color="inherit"> The team </Button>
        </Link>
        <Link to="/matches">
          <Button color="inherit"> Matches </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
