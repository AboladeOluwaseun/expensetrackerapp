import React from "react";
import { Pie, Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
Chart.register(ArcElement, Tooltip, Legend);
import { useSelector } from "react-redux";

const Analytics = () => {
  const incomeTotal = useSelector(
    (state) => state.transactionslice.incomeTotal
  );
  const expenseTotal = useSelector(
    (state) => state.transactionslice.expenseTotal
  );
  const state = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: ["#fac960", "#fff"],
        hoverBackgroundColor: ["#fac960", "#fff"],
        data: [
          incomeTotal === 0 ? 1 : incomeTotal,
          expenseTotal === 0 ? 1 : expenseTotal,
        ],
      },
    ],
  };
  return (
    <>
      <div className="max-w-[95%] xxsm:min-w-[100%] lmd:max-w-[100%] h-[100%] px-5 py-3  bg-silver text-white  rounded-lg   lmd:py-2 lmd:px-1 mx-auto">
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
