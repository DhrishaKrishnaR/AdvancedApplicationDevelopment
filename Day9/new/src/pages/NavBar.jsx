import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function ElevateAppBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar style={{ background: 'white', boxShadow: 'none',color:'black' }}>
        <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} style={{ fontWeight: 'bold', fontStyle: 'italic' }}>
            <Link to="/" style={{ color: 'inherit',fontSize:'20px' }}>EventEuphoria.</Link>
            </Typography>
          <Button href="/user/*" color="inherit" style={{ fontSize: '15px' }}>Login</Button>
          <Button href="/register" color="inherit" style={{ fontSize: '15px' }}>SignUp</Button>
          <Button href="/about" color="inherit" style={{ fontSize: '15px' }}>What we do</Button>
        </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container>
       
      </Container>
    </React.Fragment>
  );
}
