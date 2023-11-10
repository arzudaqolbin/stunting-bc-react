import React, {useState, useEffect} from 'react';
import axios from 'axios';
import BASE_URL from '../../base/apiConfig';

const StatUmum = () => {

  const [dataReal, setDataReal] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(`${BASE_URL}/balitas/stat/umum`);
                console.log(result.data);
                setDataReal(result.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
    
        fetchData();
    }, []);

  return (
    <div className="container p-5 text-center">
      <div className="row">
        <div className="col-12">
          {/* Total balita */}
          <h3 className='text-center'>{dataReal.total_balita}</h3>
          <h3 className='text-center'>Total Balita</h3>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6 px-5">
          {/* Baris kedua, bagian kiri */}
          <div className="alert d-flex flex-row flex-wrap align-items-center" style={{ backgroundColor: '#7AF7FF' }}>
            <div className="flex-fill">
              <h5 className='text-center'>Balita Laki-laki</h5>
              <div className="flex-fill">
                <p className="m-0 text-center"><strong>Total: {dataReal.totalBalitaLakiLaki}</strong></p>
              </div>
            </div>
            <div className="flex-fill"><h3 className='text-center'>{parseFloat(((dataReal.totalBalitaLakiLaki/dataReal.total_balita)*100).toFixed(2))}%</h3></div>
          </div>
        </div>
        <div className="col-md-6 px-5">
          {/* Baris kedua, bagian kanan */}
          <div className="alert d-flex flex-row flex-wrap align-items-center" style={{ backgroundColor: '#BD90F5' }}>
            <div className="flex-fill">
              <h5 className='text-center'>Balita Perempuan</h5>
              <div className="flex-fill">
                <p className="m-0 text-center"><strong>Total: {dataReal.totalBalitaPerempuan}</strong></p>
              </div>
            </div>
            <div className="flex-fill"><h3 className='text-center'>{parseFloat(((dataReal.totalBalitaPerempuan/dataReal.total_balita)*100).toFixed(2))}%</h3></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 px-5">
          {/* Baris ketiga, bagian kiri */}
          <div className="alert d-flex flex-row flex-wrap align-items-center" style={{ backgroundColor: '#FF9F1C' }}>
            <div className="flex-fill">
              <h5 className='text-center'>Balita Stunting</h5>
              <div className="flex-fill">
                <p className="m-0 text-center"><strong>Total: {dataReal.totalStunting}</strong></p>
              </div>
            </div>
            <div className="flex-fill"><h3 className='text-center'>{parseFloat(((dataReal.totalStunting/dataReal.total_balita)*100).toFixed(2))}%</h3></div>
          </div>
        </div>
        <div className="col-md-6 px-5">
          {/* Baris ketiga, bagian kanan */}
          <div className="alert d-flex flex-row flex-wrap align-items-center" style={{ backgroundColor: '#FFBF69' }}>
            <div className="flex-fill">
              <h5 className='text-center'>Balita Underweight</h5>
              <div className="flex-fill">
                <p className="m-0 text-center"><strong>Total: {dataReal.total_underweight}</strong></p>
              </div>
            </div>
            <div className="flex-fill"><h3 className='text-center'>{parseFloat(((dataReal.total_underweight/dataReal.total_balita)*100).toFixed(2))}%</h3></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 px-5">
          {/* Baris keempat, bagian kiri */}
          <div className="alert d-flex flex-row flex-wrap align-items-center" style={{ backgroundColor: '#FA8072' }}>
            <div className="flex-fill">
              <h5 className='text-center'>Balita Gizi Buruk</h5>
              <div className="flex-fill">
                <p className="m-0 text-center"><strong>Total: {dataReal.total_gizi_buruk}</strong></p>
              </div>
            </div>
            <div className="flex-fill"><h3 className='text-center'>{parseFloat(((dataReal.total_gizi_buruk/dataReal.total_balita)*100).toFixed(2))}%</h3></div>
          </div>
        </div>
        <div className="col-md-6 px-5">
          {/* Baris keempat, bagian kanan */}
          <div className="alert d-flex flex-row flex-wrap align-items-center" style={{ backgroundColor: '#FFA07A' }}>
            <div className="flex-fill">
              <h5 className='text-center'>Balita Obesitas</h5>
              <div className="flex-fill">
                <p className="m-0 text-center"><strong>Total: {dataReal.total_obesitas}</strong></p>
              </div>
            </div>
            <div className="flex-fill"><h3 className='text-center'>{parseFloat(((dataReal.total_obesitas/dataReal.total_balita)*100).toFixed(2))}%</h3></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatUmum;
