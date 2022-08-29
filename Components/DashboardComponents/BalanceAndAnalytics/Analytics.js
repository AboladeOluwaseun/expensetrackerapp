import React from "react";
import { Pie, Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
Chart.register(ArcElement, Tooltip, Legend);

const state = {
  labels: ["Income", "Expense"],
  datasets: [
    {
      label: "Rainfall",
      backgroundColor: ["#fac960", "#fff"],
      hoverBackgroundColor: ["#fac960", "#fff"],
      data: [80, 59],
    },
  ],
};

const Analytics = () => {
  return (
    <>
      <div className="max-w-[95%] xxsm:min-w-[100%] lmd:max-w-[100%] h-[100%] px-5 py-3  bg-violet text-white  rounded-lg   lmd:py-2 lmd:px-1 mx-auto">
        <Doughnut
          data={state}
          options={{
            title: {
              display: false,
              text: "Average Rainfall per month",
              fontSize: 20,
            },
            plugins: {
              legend: {
                labels: {
                  color: "white",
                },

                display: true,
                position: "top",
              },
            },
            maintainAspectRatio: false,
            responsive: true,
          }}
        />
      </div>
    </>
  );
};

export default Analytics;
