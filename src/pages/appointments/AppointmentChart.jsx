import React from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const AppointmentChart = ({ appointedDoctors }) => {
  const data = appointedDoctors.map((doctor) => {
    const doctorData = {
      name: doctor.name,
      fee: doctor.fee,
    };
    return doctorData;
  });
  console.log(data);
  return (
    <div>
      <BarChart
        style={{
          width: "100%",
          maxHeight: "500px",
          aspectRatio: 1.618,
        }}
        responsive
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          interval={0}
          angle={-30}
          textAnchor="end"
          height={80}
        />
        <YAxis width="auto" />
        <Bar
          dataKey="fee"
          fill="#8884d8"
          shape={TriangleBar}
          label={{ position: "top" }}
        >
          {data.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default AppointmentChart;
