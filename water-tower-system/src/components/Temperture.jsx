import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["00:00","1:00", "2:00", "3:00", "4:00", "5:00", "6:00","7:00", "8:00", "9:00", "10:00", "11:00","12:00","13:00", "14:00", "15:00", "16:00", "17:00", "18:00","19:00", "20:00", "21:00", "22:00", "23:00"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Temperatura",
      backgroundColor: "rgb(158,208,230)",
      borderColor: "rgb(158,208,230)",
      data: [16, 17, 18, 15, 12, 15,16, 17, 19, 18, 20, 21,24, 23, 22, 19, 18, 18,17,17, 18, 16, 15, 15, 16],
    },
  ],
};

const Temperture = () => {
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default Temperture;