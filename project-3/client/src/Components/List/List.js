import React from "react";
// import "./style.css";

// This file exports both the List and ListItem components

export default function List({ children }) {
  return (
    <div className="pure-menu pure-menu-horizontal">
         <ul class="pure-menu-list">{children}</ul>

    </div>
  );
}

export function ListItem(props) {
  return <li className="list-group-item"{...props}></li>;
}
