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


const air_change = 15000;
const battery_change = 50000;
const brakes_change = 50000;
const oil_change = 10000;
const tires_change = 40000;



const data = [
  {
    name: "Air",
    Remaining: air_change - 2400,
    Current: 2400
  },
  {
    name: "Battery",
    Remaining: battery_change - 27098,
    Current: 27098
  },
  {
    name: "Brakes",
    Remaining: brakes_change - 5800,
    Current: 5800
  },
  {
    name: "Oil",
    Remaining: oil_change - 5500,
    Current: 5500
  },
  {
    name: "Tires",
    Remaining: tires_change - 4800,
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
