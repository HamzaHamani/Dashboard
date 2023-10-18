import { Bar } from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto";
import revenueData from "./data/revenueData.json";

function BarBitch() {
  return (
    <div>
      <Bar
        data={{
          labels: revenueData.map((data) => data.label),
          datasets: [
            {
              label: "Revenue",
              data: revenueData.map((data) => data.revenue),
              backgroundColor: "#429e67",

              borderColor: "#111",
            },
            {
              label: "Cost",
              data: revenueData.map((data) => data.cost),
              backgroundColor: " #419b92",
              borderColor: "#111",
            },
          ],
        }}
      />
    </div>
  );
}

export default BarBitch;
