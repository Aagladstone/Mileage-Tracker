import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const data = [
  {
    month: "Jan-2019",
    miles: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    month: "Feb-2019",
    miles: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    month: "Mar-2019",
    miles: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    month: "Apr-2019",
    miles: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    month: "May-2019",
    miles: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    month: "Jun-2019",
    miles: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    month: "Jul-2019",
    miles: 2000,
    pv: 4300,
    amt: 2100
  },
  {
    month: "Ago-2019",
    miles: 1500,
    pv: 4300,
    amt: 2100
  },
  {
    month: "Sep-2019",
    miles: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    month: "Oct-2019",
    miles: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    month: "Nov-2019",
    miles: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    month: "Dec-2019",
    miles: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    month: "Jan-2020",
    miles: 3490,
    pv: 4300,
    amt: 2100
  },
  {
    month: "Feb-2020",
    miles: 3490,
  }
];

export default class Line extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/Lrffmzfc/";

  render() {
    return (
      <AreaChart
        width={1250}
        height={250}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="miles" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    );
  }
}
