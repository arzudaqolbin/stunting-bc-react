import React from 'react';

import{
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

const DoughnutChart = () => {

    const dataChart = {
        labels: ["Pendek", "Normal"],
        datasets:[{
            label: "Total Balita",
            data: [11, 97],
            backgroundColor: ['black', 'yellow'],
            maintainAspectRatio: true
        }]
    }

    const optionsChart= {

    }

    return(
        <div className="p-2 flex-fill" style={{width: "50vw"}}>
            <Doughnut
                data = {dataChart}
                options={optionsChart}
            ></Doughnut>
        </div>
    )
}

export default DoughnutChart;