import React,{useState} from "react";

import LineChart from "./LineChart";
import MapChart from "./MapChart";


const DashBoard = () => {
    const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
    const [mapZoom, setMapZoom] = useState(4);




  return (
    <>
      <div className="flex flex-col gap-10 w-[75vw]">
        {/* react-leaflet */}
      <div className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        
        <LineChart />
      </div>

      <div className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        
        <MapChart center={mapCenter} zoom={mapZoom} />
      </div>
      </div>
     
    </>
  );
};

export default DashBoard;
