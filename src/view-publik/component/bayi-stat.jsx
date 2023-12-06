import React, {useState, useEffect} from 'react';
import balita from "../../aset/balita.png";
import axios from 'axios';
import BASE_URL from '../../base/apiConfig';
import { ClipLoader } from 'react-spinners';

const BayiStat= () => {

    const [dataReal, setDataReal] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(`${BASE_URL}/balitas/stat/doughnut`);
                setDataReal(result.data);
                setLoading(false)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
    
        fetchData();
    }, []);

    const persen = parseFloat(((dataReal.totalStunting/dataReal.total_balita)*100).toFixed(2));

    return(
        <>
        {loading ? (
            <div className='text-center'>
            <ClipLoader
                loading={loading}
                size={150}
            />
        </div>
        )
        :
        (
        <div className='p-3'>
            <div className="d-flex align-items-center">
                {/* <div className="col-auto"> */}
                <div className="col-8">
                    <img src={balita} alt="" className='img-fluid' />
                </div>
                <div className="col-4">
                    <h4>{persen}%</h4>
                    <p>Dari {dataReal.total_balita} balita, terdapat {dataReal.totalStunting} kasus balita yang mengidap stunting</p>
                </div>
            </div>
        </div>
        )}
        </>
    )
}

export default BayiStat;