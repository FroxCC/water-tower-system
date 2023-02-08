import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const Humidity = () => {
  const labels = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Humedad",
        backgroundColor: "rgb(158,208,230)",
        borderColor: "rgb(158,208,230)",
        data: [12, 30, 5, 2, 20, 30, 45],
      },
    ],
  };
  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default Humidity;