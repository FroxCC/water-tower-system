import { useState } from "react";
import BarChart from './components/Humidity';
import BasicGrid from "./container/GridContainer";
import Navbar from './components/Navbar'


export const WaterTowerApp = () => {

  return (
    <div>
        <Navbar />
         <div>
         <BasicGrid />
         </div>       
    </div>
  )
}

export default WaterTowerApp;
