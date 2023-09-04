import React from 'react';
import variables from "./LineChart.scss";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
    Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
    Legend,
  Filler
);

function dateFormatting(date: Date | any): string {
    let formattedDate: string;
    let dateToFormat: Date;
    
    if (date instanceof Date) {
      dateToFormat = date;
    } else {
      dateToFormat = date.toDate();
    }
    const year: number = dateToFormat.getFullYear();
    const month: number | string = dateToFormat.getMonth() < 10 ? `0${dateToFormat.getMonth()}` : dateToFormat.getMonth();
    const day: number | string = dateToFormat.getDate() < 10 ? `0${dateToFormat.getDate()}` : dateToFormat.getDate();

    formattedDate = `${day}.${month}.${year}`
    return formattedDate;
  }

export function LineChart({ chartData } : {chartData: any}) {
const options = {
  responsive: true,
  plugins: {
    legend: {
        position: 'top' as const,
        display: false,
    },
    title: {
      display: true,
      text: 'Wyniki SCORAD',
      font: {
        family: "Montserrat",
      }
    },
  },
    scales: {
      y: {
        min: 0,
        title: {
          text: "Wynik SCORAD",
          display: true,
        }
      },
    },
};

const data = {
  labels: chartData.map((result: any) => dateFormatting(result.date)),
  datasets: [
    {
      label: 'scorad',
      data: chartData.map((result: any) => result.result),
      borderColor: variables.darkNude,
      backgroundColor: variables.nude + 60,
      fill: true,
    },
  ],
};

  return <Line options={options} data={data} />;
}