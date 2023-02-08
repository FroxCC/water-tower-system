import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const Precipitation = () => {
  const labels = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Precipitacion",
        backgroundColor: "rgb(158,208,230)",
        borderColor: "rgb(158,208,230)",
        data: [70, 90, 40, 50, 20, 100, 80],
      },
    ],
  };
  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default Precipitation;