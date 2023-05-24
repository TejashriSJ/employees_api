import { AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";

function GraphPlot({ currDetails }) {
  return (
    <>
      <AreaChart width={400} height={400} data={currDetails}>
        <Area dataKey="curr_dept" />
        <XAxis dataKey="employee_name" />
        <YAxis />
        <Tooltip />
      </AreaChart>
    </>
  );
}

export default GraphPlot;
