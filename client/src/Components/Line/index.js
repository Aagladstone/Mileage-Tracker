// import React, { PureComponent } from "react";
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip
// } from "recharts";


// export default class Line extends PureComponent {
//   static jsfiddleUrl = "https://jsfiddle.net/alidingling/Lrffmzfc/";

//   constructor(props){
//     super(props);
//     this.state={...props}
//   }
//   render(props) {
//     return (
//       <AreaChart
//         width={950}
//         height={250}
//         data={this.props.mileage}
//         margin={{
//           top: 20,
//           right: 30,
//           left: 0,
//           bottom: 0
//         }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="date" />
//         <YAxis />
//         <Tooltip />
//         <Area type="monotone" dataKey="totalmiles" stroke="#8884d8" fill="#8884d8" />
//       </AreaChart>
//     );
//   }
// }

import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
      <LineChart
        width={850}
        height={300}
        data={this.props.mileage}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="linear" dataKey="totalmiles" stroke="#6c68b8" activeDot={{ r: 8 }} />
      </LineChart>
    );
  }
}
