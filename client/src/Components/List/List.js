import React from "react";
import "./style.css";
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';


export function TabContainer(props) {
  return (
    <Typography component="div"  style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export function Tab(props) {

  return (
    <span key={props.value}>  </span>
  );
}