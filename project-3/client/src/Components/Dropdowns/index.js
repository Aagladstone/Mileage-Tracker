import React from "react";
import "./style.css";


  export default function TPList({ children }) {
    return (
      <select class="form-control" >{children}

        </select>
     
    );
  }

  export function TPItem(props) {
    return (
      <option value={props.key}>{props.children}</option>

    )
  }
  
