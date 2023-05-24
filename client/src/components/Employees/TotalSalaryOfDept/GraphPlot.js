import { AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";

function GraphPlot({ deptDetails }) {
  return (
    <>
      <AreaChart width={400} height={400} data={deptDetails}>
        <Area dataKey="total_salary" />
        <XAxis dataKey="dept_name" />
        <YAxis />
        <Tooltip />
      </AreaChart>
    </>
  );
}

export default GraphPlot;
