import React from 'react';
import "../css/edit-data-tambahan.css";

function EditDataTambahan() {
  return (
    <div className="main d-flex flex-column min-vh-100" style={{ backgroundColor: '#E4F3EF' }}>
      <main className="container">
        <a href=""><img src="back.png" alt="Back" className="logo-back" /></a>
        <h2 className="custom-judul">Ubah Data Tambahan Balita Stunting</h2>
        <h3 className="requirement">*Menunjukkan pertanyaan yang wajib diisi</h3>
        <div className="container-fluid">
          <form action="" method="post">
            <label htmlFor="asi_eksklusif">
              <span>Asi Eksklusif</span>
              <select id="asi_eksklusif" name="asi_eksklusif" required>
                <option value="ya">Ya</option>
                <option value="tidak">Tidak</option>
              </select>
            </label>
            <label htmlFor="imd">
              <span>IMD</span>
              <select id="imd" name="imd" required>
                <option value="ya">Ya</option>
                <option value="tidak">Tidak</option>
              </select>
            </label>
            <label htmlFor="penyakit_penyerta">
              <span>Penyakit Penyerta</span>
              <select id="penyakit_penyerta" name="penyakit_penyerta" required>
                <option value="ya">Ya</option>
                <option value="tidak">Tidak</option>
              </select>
            </label>
            <label htmlFor="riwayat_sakit">
              <span>Riwayat Sakit</span>
              <input type="text" id="riwayat_sakit" name="riwayat_sakit" required />
            </label>
            <label htmlFor="riwayat_imunisasi">
              <span>Riwayat Imunisasi</span>
              <select id="riwayat_imunisasi" name="riwayat_imunisasi" required>
                <option value="ya">Ya</option>
                <option value="tidak">Tidak</option>
              </select>
            </label>
            <label htmlFor="riwayat_kek">
              <span>Riwayat Ibu Hamil KEK</span>
              <select id="riwayat_kek" name="riwayat_kek" required>
                <option value="ya">Ya</option>
                <option value="tidak">Tidak</option>
              </select>
            </label>
            <label htmlFor="riwayat_anemia">
              <span>Riwayat Ibu Anemia</span>
              <select id="riwayat_anemia" name = "riwayat_anemia" required>
                <option value="ya">Ya</option>
                <option value="tidak">Tidak</option>
              </select>
            </label>
            <label htmlFor="jamban_sehat">
              <span>Kepemilikan Jamban Sehat</span>
              <select id="jamban_sehat" name="jamban_sehat" required>
                <option value="ya">Ya</option>
                <option value="tidak">Tidak</option>
              </select>
            </label>
            <label htmlFor="ktp">
              <span>KTP*</span>
              <select id="ktp" name="ktp" required>
                <option value="ya">Ya</option>
                <option value="tidak">Tidak</option>
              </select>
            </label>
            <label htmlFor="bpjs_kis_jkn_kaj">
              <span>Kepemilikan BPJS/KIS/JKN/KAJ</span>
              <select id="bpjs_kis_jkn_kaj" name="bpjs_kis_jkn_kaj" required>
                <option value="ya">Ya</option>
                <option value="tidak">Tidak</option>
              </select>
            </label>
            <label htmlFor="akses_makanan_sehat">
              <span>Akses terhadap Makanan Sehat</span>
              <select id="akses_makanan_sehat" name="akses_makanan_sehat" required>
                <option value="ya">Ya</option>
                <option value="tidak">Tidak</option>
              </select>
            </label>
            <label htmlFor="konfirmasi_dsa">
              <span>Sudah Konfirmasi ke DSA</span>
              <select id="konfirmasi_dsa" name="konfirmasi_dsa" required>
                <option value="ya">Ya</option>
                <option value="tidak">Tidak</option>
              </select>
            </label>
          </form>
        </div>
        <button type="submit" className="submit-button">Simpan</button>
      </main>
    </div>
  );
}

export default EditDataTambahan;
