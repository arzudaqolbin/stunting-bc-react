import React from 'react';

const Banner = () => {
  return (
    <div className="jumbotron jumbotron-fluid text-center p-5" style={{ backgroundColor: '#9FEDD7' }}>
      <div className="container p-4">
        <h1 className="font-weight-bold text-center">Mencegah Stunting:</h1>
        <h1 className="font-weight-bold text-center">Kunci Untuk Masa Depan yang Sehat</h1>
        <p className="lead mx-auto w-50 p-2 text-center">
          Menjaga stunting pada balita adalah hal yang sangat penting karena pertumbuhan yang optimal pada usia dini membentuk dasar kesehatan dan perkembangan selanjutnya
        </p>
        <a href="#kalkulator" className="text-decoration-none text-dark">
          <h5 className="font-weight-bold p-2 text-center">Cek Balitamu disini <i className="fa-solid fa-angles-down pe-3"></i></h5>
        </a>
      </div>
    </div>
  );
}

export default Banner;
