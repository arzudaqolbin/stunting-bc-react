import React from 'react';
import "../css/form-kelurahan.css";

function EditKader() {
  return (
    <main className="container">
      {/* <a href=""><img src="back.png" alt="Back" className="logo-back" /> */}
      <i class="fa-solid fa-arrow-left"></i>

      <div className="container-fluid">
        {/* Mulai isi kontennya disini */}
        <h2 className="custom-judul">EDIT KADER POSYANDU</h2>

        <form action="" method="post">
          <label htmlFor="nama_posyandu">
            <span>NAMA POSYANDU</span>
            <input type="text" id="nama_posyandu" name="nama_posyandu" required />
          </label>

          <label htmlFor="jabatan">
            <span>JABATAN</span>
            <input type="text" id="jabatan" name="jabatan" required />
          </label>

          <label htmlFor="kader_lama">
            <span>KADER LAMA</span>
            <input type="text" id="kader_lama" name="kader_lama" required />
          </label>

          <label htmlFor="kader_baru">
            <span>KADER BARU</span>
            <input type="text" id="kader_baru" name="kader_baru" required />
          </label>

          <button type="submit" className="submit-button">Simpan</button>
        </form>
      </div>
    </main>
  );
}

export default EditKader;
