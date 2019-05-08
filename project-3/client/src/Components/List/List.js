import React from "react";
import "./style.css";

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

