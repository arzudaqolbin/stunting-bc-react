import React from 'react';

const StatUmum = () => {
  return (
    <div className="container p-5 text-center">
      <div className="row">
        <div className="col-12">
          {/* Total balita */}
          <h3 className='text-center'>250</h3>
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
                <p className="m-0 text-center"><strong>Total: 20</strong></p>
              </div>
            </div>
            <div className="flex-fill"><h3 className='text-center'>40%</h3></div>
          </div>
        </div>
        <div className="col-md-6 px-5">
          {/* Baris kedua, bagian kanan */}
          <div className="alert d-flex flex-row flex-wrap align-items-center" style={{ backgroundColor: '#BD90F5' }}>
            <div className="flex-fill">
              <h5 className='text-center'>Balita Perempuan</h5>
              <div className="flex-fill">
                <p className="m-0 text-center"><strong>Total: 20</strong></p>
              </div>
            </div>
            <div className="flex-fill"><h3 className='text-center'>40%</h3></div>
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
                <p className="m-0 text-center"><strong>Total: 20</strong></p>
              </div>
            </div>
            <div className="flex-fill"><h3 className='text-center'>40%</h3></div>
          </div>
        </div>
        <div className="col-md-6 px-5">
          {/* Baris ketiga, bagian kanan */}
          <div className="alert d-flex flex-row flex-wrap align-items-center" style={{ backgroundColor: '#FFBF69' }}>
            <div className="flex-fill">
              <h5 className='text-center'>Balita Underweight</h5>
              <div className="flex-fill">
                <p className="m-0 text-center"><strong>Total: 20</strong></p>
              </div>
            </div>
            <div className="flex-fill"><h3 className='text-center'>40%</h3></div>
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
                <p className="m-0 text-center"><strong>Total: 20</strong></p>
              </div>
            </div>
            <div className="flex-fill"><h3 className='text-center'>40%</h3></div>
          </div>
        </div>
        <div className="col-md-6 px-5">
          {/* Baris keempat, bagian kanan */}
          <div className="alert d-flex flex-row flex-wrap align-items-center" style={{ backgroundColor: '#FFA07A' }}>
            <div className="flex-fill">
              <h5 className='text-center'>Balita Obesitas</h5>
              <div className="flex-fill">
                <p className="m-0 text-center"><strong>Total: 20</strong></p>
              </div>
            </div>
            <div className="flex-fill"><h3 className='text-center'>40%</h3></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatUmum;
