import React ,{useState} from 'react'
import numeral from 'numeral'
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Chart from 'chart.js/auto'; 
 import { Line } from "react-chartjs-2";
 import {CategoryScale} from 'chart.js'; 
 Chart.register(CategoryScale);
const options:any = {
  legend: {
    display: true,
  },
  
  elements: {
    point: {
      radius: 0,
    },
  },

  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem:any, data:any) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: true,
        },
        ticks: {
       
          callback: function (value:any, index:any, values:any) {
            return numeral(value).format("0");
          },
        },
      },
    ],
  },

};
const buildChartData = (data:any, casesType='cases') => {

    let chartData = [];
    let lastDataPoint;
    for (let date in data.cases) {
      if (lastDataPoint) {
        let newDataPoint = {
          x: date,
          y: data[casesType][date] - lastDataPoint,
        };
        chartData.push(newDataPoint);
      }
      lastDataPoint = data[casesType][date];
    }
    return chartData;
  };
  



const LineChart = () => {

    const [ldata,setLData] = useState<any>()
    const { data ,isLoading} = useQuery(["covidCountry"], async () => {
        const data = await axios.get(`https://disease.sh/v3/covid-19/historical/all?lastdays=all`);
       const chartData= buildChartData(data.data)
        setLData(chartData)
        return data.data;
        
      });
      

  if(isLoading){
    return (
        <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Loading...</span
        >
      </div>
    )
   
  }
    
    
  return (
    <div>
            {ldata?.length > 0 && (
        <Line className='h-[300px]'
          data={{
            datasets: [
              {
                backgroundColor: "rgba(204, 16, 52, 0.5)",
                borderColor: "#CC1034",
                data: ldata,
                label:"cases"
              },
            ],
          }}
          options={options}
        />
      )}
    </div>
    
  )
}

export default LineChart