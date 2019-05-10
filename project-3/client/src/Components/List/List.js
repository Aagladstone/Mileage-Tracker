import React from "react";
import "./style.css";
import Typography from '@material-ui/core/Typography';


// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="pure-menu pure-menu-horizontal">
         <ul className="pure-menu-list">{children}</ul>

    </div>
  );
}

export function ListItem(props) {
  return <li className="list-group-item"value={props.key}><a href="#" className="pure-menu-link">{props.children}</a></li>;
}

export function TabContainer(props) {
  return (
    <Typography component="div"  style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

export function Tab(props) {

  return (
    <span key={props.value}> {props.car.plate} </span>
  );
}