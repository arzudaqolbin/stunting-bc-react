import React, {useState, useEffect} from 'react';
import balita from "../../aset/balita.png";
import axios from 'axios';
import BASE_URL from '../../base/apiConfig';

const BayiStat= () => {

    const [dataReal, setDataReal] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(`${BASE_URL}/balitas/stat/doughnut`);
                setDataReal(result.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
    
        fetchData();
    }, []);

    const persen = parseFloat(((dataReal.totalStunting/dataReal.total_balita)*100).toFixed(2));

    return(
        <div className="p-2 flex-fill border border-primary">
            <div className="row align-items-center">
                <div className="col-auto">
                <div className="square-div">
                    <img src={balita} alt="" style={{width: "100px"}} />
                </div>
                </div>
                <div className="col">
                    <h4>{persen}%</h4>
                    <p>Dari {dataReal.total_balita} balita, terdapat {dataReal.totalStunting} kasus</p>
                </div>
            </div>
        </div>
    )
}

export default BayiStat;