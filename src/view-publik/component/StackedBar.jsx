// import React, {useEffect, useState} from 'react';
// import {Bar} from "react-chartjs-2";
// import axios from 'axios';
// import BASE_URL from '../../base/apiConfig';
// // import 'chartjs-plugin-datalabels';

// import{
//     Chart as ChartJS,
//     BarElement,
//     CategoryScale,
//     LinearScale,
//     Tooltip,
//     Legend
// } from "chart.js";

// ChartJS.register(
//     BarElement,
//     CategoryScale,
//     LinearScale,
//     Tooltip,
//     Legend
// );


// const StackedBarGender = () => {

//     const [dataReal, setDataReal] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const result = await axios.get(`${BASE_URL}/balitas/stat/stack-bar`);
//                 console.log(result.data);
//                 setDataReal(result.data);
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         };
    
//         fetchData();
//     }, []);
    
//     const dataBar = {
//         labels: ["Laki-laki", "Perempuan"],
//         datasets: [
//             {
//                 label: "Umur 0-24 Bulan",
//                 data: [dataReal.totalBalitaLakiStuntingCat1, dataReal.totalBalitaPerempuanStuntingCat1],
//                 backgroundColor: "orange",
//             },
//             {
//                 label: "Umur 24-60 Bulan",
//                 data: [dataReal.totalBalitaLakiStuntingCat2, dataReal.totalBalitaPerempuanStuntingCat2],
//                 backgroundColor: "yellow",
//             }
//         ]
//     }

//     // Label atas
//     const topLabels = {
//         id: 'topLabels',
//         afterDatasetsDraw(chart, args, pluginOptions){
//             const {ctx, scales:{x, y}} = chart;

//             chart.data.datasets[0].data.forEach((datapoint, index) => {
//                 const datasetArray = [];;

//                 chart.data.datasets.forEach((dataset) => {
//                     datasetArray.push(dataset.data[index])
//                 })

//                 // fungsi total
//                 function sumLabel (total, value){
//                     return total + value;
//                 };

//                 let sum = datasetArray.reduce(sumLabel, 0);

//                 ctx.font = "bold 12px sans-serif";
//                 ctx.fillStyle = "black";
//                 ctx.textAlign = "center";
//                 ctx.fillText(sum, x.getPixelForValue(index), chart.getDatasetMeta(1).data[index].y-10);
//             })
//         }
//     };

//     const optionBar = {
//         scales: {
//             x: {
//                 stacked: true
//             },
//             y: {
//                 stacked: true
//             }
//         },
//         plugins: [topLabels]
//     }

//     return(
//         <div className="p-2 flex-fill border border-primary" style={{width: "15vw"}}>
//             <Bar
//                 data={dataBar}
//                 options={optionBar}
//             ></Bar>
//         </div>
//     )
// }

// export default StackedBarGender;

import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Bar } from "react-chartjs-2";
import axios from 'axios';
import BASE_URL from '../../base/apiConfig';
import { ClipLoader } from 'react-spinners';

import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from "chart.js";

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);

const StackedBarGender = () => {
    const [dataReal, setDataReal] = useState([]);
    const [loading, setLoading] = useState(true);
    let reff = useRef(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(`${BASE_URL}/balitas/stat/stack-bar`);
                setDataReal(result.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const dataBar = {
        labels: ["Laki-laki", "Perempuan"],
        datasets: [
            {
                label: "Umur 0-24 Bulan",
                data: [dataReal.totalBalitaLakiStuntingCat1, dataReal.totalBalitaPerempuanStuntingCat1],
                backgroundColor: "orange",
            },
            {
                label: "Umur 24-60 Bulan",
                data: [dataReal.totalBalitaLakiStuntingCat2, dataReal.totalBalitaPerempuanStuntingCat2],
                backgroundColor: "yellow",
            }
        ]
    }

    // Label atas
    const topLabels = {
        id: 'topLabels',
        afterDatasetsDraw(chart, args, pluginOptions) {
            const { ctx, scales: { x, y } } = chart;

            chart.data.datasets[0].data.forEach((datapoint, index) => {
                const datasetArray = [];;

                chart.data.datasets.forEach((dataset) => {
                    datasetArray.push(dataset.data[index])
                })

                // fungsi total
                function sumLabel(total, value) {
                    return total + value;
                };

                let sum = datasetArray.reduce(sumLabel, 0);

                ctx.font = "bold 12px sans-serif";
                ctx.fillStyle = "black";
                ctx.textAlign = "center";
                ctx.fillText(sum, x.getPixelForValue(index), chart.getDatasetMeta(1).data[index].y - 10);
            })
        }
    };

    const optionBar = {
        scales: {
            x: {
                stacked: true
            },
            y: {
                stacked: true
            }
        },
        plugins: [topLabels]
    }

    const downloadChart = useCallback(() => {
        const link = document.createElement("a");
        link.download = "doughnut_status_tb_u.png";
        link.href = reff.current.toBase64Image();
        link.click();
      }, []);

    return (
        <div className='p-3'>
            {loading ? (
                // <div class style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                //     <ClipLoader size={150} color={"#123abc"} loading={loading} />
                // </div>
                <div className='text-center'>
                    <ClipLoader
                    loading={loading}
                    size={150}
                    />
                </div>
            ) : (
                <>
                <h4>Stunting berdasarkan Kelompok Umur dan Jenis Kelamin</h4>
                <button className="float-right" type="button" onClick={downloadChart}>
                <i class="fa-solid fa-download"></i>
                </button>
                <Bar
                    ref={reff}
                    data={dataBar}
                    options={optionBar}
                />
                </>
            )}
        </div>
    )
}

export default StackedBarGender;
