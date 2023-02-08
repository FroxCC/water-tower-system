import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const Temperture = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('http://IP_ADDRESS/temperature')
      .then(response => response.json())
      .then(jsonData => {
        setData({
          labels: jsonData.labels,
          datasets: [
            {
              label: "Temperatura",
              backgroundColor: "rgb(158,208,230)",
              borderColor: "rgb(158,208,230)",
              data: jsonData.temperatures,
            },
          ],
        });
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {data.labels ? <Line data={data} /> : <div>Loading...</div>}
    </div>
  );
};

export default Temperture;