import React from "react";
import { Pie, Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

const state = {
  labels: ["January", "February"],
  datasets: [
    {
      label: "Rainfall",
      backgroundColor: ["#fac960", "#E1DBE6"],
      hoverBackgroundColor: ["#fac960", "#E1DBE6"],
      data: [65, 59],
    },
  ],
};

const Analytics = () => {
  return (
    <>
      <div className="max-w-[95%] bg-violet text-white  rounded-lg  py-3 mx-auto">
        <Doughnut
          data={state}
          width={1500}
          height={1500}
          autoPadding={true}
          options={{ maintainAspectRatio: false }}
          options={{
            title: {
              display: false,
              text: "Average Rainfall per month",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
    </>
  );
};

export default Analytics;
