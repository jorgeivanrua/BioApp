// CLIENT/src/components/MyChart.js

import React from 'react';
import { Chart, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';

Chart.register(CategoryScale, LinearScale, BarElement, Title);

// Registrar todos los componentes de Chart.js, incluidas las escalas
Chart.register(...registerables);

const MyChart = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April'],
        datasets: [
            {
                label: 'My Dataset',
                data: [65, 59, 80, 81],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                type: 'category', // Usa 'category' como tipo de escala
                title: {
                    display: true,
                    text: 'Months',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Values',
                },
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default MyChart;
