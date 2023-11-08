import React from 'react';
import "../css/form-kelurahan.css";

const TambahPosyandu = () => {
  return (
    <main className="container">
      {/* <a href=""><img src="back.png" alt="Back" className="logo-back" /> */}
      <i class="fa-solid fa-arrow-left"></i>

      <div className="container-fluid">
        {/* Mulai isi kontennya disini */}
        <h2 className="custom-judul">TAMBAH POSYANDU</h2>

        <form action="" method="post">
          <label htmlFor="puskesmas">
            <span>PUSKESMAS</span>
            <input type="text" id="puskesmas" name="puskesmas" required />
          </label>

          <label htmlFor="posyandu">
            <span>POSYANDU</span>
            <input type="text" id="posyandu" name="posyandu" required />
          </label>

          <button type="submit" className="submit-button">Simpan</button>
        </form>
      </div>
    </main>
  );
}

export default TambahPosyandu;
