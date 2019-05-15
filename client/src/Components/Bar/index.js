import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Air",
    Remaining: 4000,
    Current: 2400
  },
  {
    name: "Battery",
    Remaining: 3000,
    Current: 1398
  },
  {
    name: "Brakes",
    Remaining: 2000,
    Current: 5800
  },
  {
    name: "Oil",
    Remaining: 1200,
    Current: 1800
  },
  {
    name: "Tires",
    Remaining: 1890,
    Current: 4800
  }
];

export default class Barra extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/90v76x08/";

  render() {
    return (
      <BarChart
        width={900}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Current" stackId="a" fill="#8884d8" />
        <Bar dataKey="Remaining" stackId="a" fill="#82ca9d" />
      </BarChart>
    );
  }
}
