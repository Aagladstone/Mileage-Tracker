import React from 'react';
import logo from './logo.png';


function Logo(props) {
  return <img src={logo} id={props.id} alt="Logo" />;
}

export default Logo;