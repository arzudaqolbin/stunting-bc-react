import React, { useCallback, useRef } from 'react';

import{
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale
} from "chart.js";
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale
);


const DoughnutChart = () => {
    let reff = useRef(null);

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
    
    const downloadChart = useCallback(() => {
        const link = document.createElement("a");
        link.download = "doughnut_status_tb_u.png";
        link.href = reff.current.toBase64Image();
        link.click();
    }, []);

    return(
        <div className="p-2 flex-fill border border-primary" style={{width: "15%"}}>
            <button type='button' onClick={downloadChart}>download</button>
            <Doughnut
                ref={reff}
                data = {dataChart}
                options={optionsChart}
            ></Doughnut>
        </div>
    )
}

export default DoughnutChart;