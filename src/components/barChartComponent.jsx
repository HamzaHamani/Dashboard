import { Bar } from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto";
import revenueData from "./data/revenueData.json";

function BarBitch() {
  return (
    <div>
      idk
      <Bar
        data={{
          labels: ["a", "b", "c"],
          datasets: [
            {
              label: "Revenue",
              data: revenueData.map((data) => data.revenue),
              backgroundColor: "#064FF0",
              borderColor: "#064FF0",
            },
            {
              label: "Cost",
              data: revenueData.map((data) => data.cost),
              backgroundColor: "#FF3030",
              borderColor: "#FF3030",
            },
          ],
        }}
      />
    </div>
  );
}

export default BarBitch;
