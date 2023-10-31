import React from 'react';

const Kalkulator = () => {
  return (
    <div id="kalkulator" className="container-fluid" style={{ backgroundColor: '#9FEDD7' }}>
      <div className="container p-2">
        <h2 className="my-4">Kalkulator Antropometri</h2>
        <form action="">
          <div className="row">
            <div className="col-md-4 px-5 mb-3">
              <h5>Jenis Kelamin</h5>
              <select className="form-select" name="jk" id="">
                <option value="-">---</option>
                <option value="1">Laki-laki</option>
                <option value="2">Perempuan</option>
              </select>
            </div>
            <div className="col-md-4 px-5 mb-3">
              <h5>Berat Badan (Kg)</h5>
              <input
                className="form-control" name="bb"
                placeholder="Contoh: 8.7"
                type="number"
              />
            </div>
            <div className="col-md-4 px-5 mb-3">
              <h5>ASI Eksklusif</h5>
              <select className="form-select" name="asi" id="">
                <option value="-">---</option>
                <option value="1">Ya</option>
                <option value="0">Tidak</option>
              </select>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-4 px-5 mb-3">
              <h5>Umur (Bulan)</h5>
              <input
                className="form-control" name="umur"
                placeholder="Contoh: 24"
                type="number"
              />
            </div>
            <div className="col-md-4 px-5 mb-3">
              <h5>Tinggi Badan (cm)</h5>
              <input
                className="form-control" name="tb"
                placeholder="Contoh: 78.7"
                type="number"
              />
            </div>
            <div className="col-md-4 px-5 d-flex align-items-center text-center mb-3">
              <button type="submit" className="btn btn-primary">Hitung</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Kalkulator;
