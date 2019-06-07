import React from "react";

export function Table(props) {
  const { children } = props
  return (
    <table>{children}
    </table>
  );
}

export function TableRow(props) {
  return (
    <tr>{props.children}</tr>
  )
}
