import React from "react";
import "./style.css";


export default function TPList(props) {
  const { children, onChange } = props
  return (
    <select class="form-control" onChange={(e) => onChange(e)} >{children}</select>
  );
}

export function TPItem(props) {
  return (
    <option value={props.id}>{props.children}</option>
  )
}


