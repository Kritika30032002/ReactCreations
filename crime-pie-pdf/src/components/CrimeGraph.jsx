import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const CrimeGraph = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Robbery',
        data: [],
        backgroundColor: [ // Rainbow colors
          'red',
          'orange',
          'yellow',
          'green',
          'blue',
          'purple',
          // Add more colors as needed
        ],
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.usa.gov/crime/fbi/cde/arrest/state/AK/all?from=2015&to=2020&API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv'
        );

        const { data } = response;

        if (data && Array.isArray(data.data)) {
          const labels = data.data.map((crime) => crime.data_year);
          const robberyData = data.data.map((crime) => crime.Robbery);

          setChartData({
            labels: labels,
            datasets: [
              {
                ...chartData.datasets[0],
                data: robberyData,
              },
            ],
          });
        } else {
          console.error('Invalid data format received from the API.');
        }
      } catch (error) {
        console.error('Error fetching the data:', error);
      }
    };

    fetchData();
  }, [chartData]);

  // Define a callback function to display percentages in tooltips
  const tooltipCallback = (context) => {
    const label = context.label || '';
    const value = context.parsed;
    const total = context.dataset.data.reduce((a, b) => a + b, 0);
    const percentage = ((value / total) * 100).toFixed(2) + '%';
    return `${label}: ${percentage}`;
  };

  return (
    <div className='flex justify-center font-bold mx-6 mt-1'>
      <Pie
        data={chartData}
        height={350}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: 'top',
            },
            tooltip: {
              callbacks: {
                label: tooltipCallback,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default CrimeGraph;
