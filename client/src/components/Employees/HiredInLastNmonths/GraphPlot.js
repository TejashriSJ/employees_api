import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function GraphPlot({ hiredData, months }) {
  const data = [
    {
      employees_hired: hiredData[0].employees_hired,
      months: months,
    },
  ];
  console.log(data, "data");
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="months" name="months" />
        <YAxis type="number" dataKey="employees_hired" name="employees" />
        <ZAxis type="number" range={[100]} />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Legend />
        <Scatter
          name="Employees hired In N months"
          data={data}
          fill="#8884d8"
          line
          shape="cross"
        />
      </ScatterChart>
    </ResponsiveContainer>
  );
}

export default GraphPlot;
