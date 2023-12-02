import React from 'react';
import stunting from "../../../aset/stunting.jpg";
import JudulTop from '../../component/JudulTop';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

const PencegahanStunting = () => {
  return (
    <>
    <JudulTop />
    <Navbar />
    <div className="container mt-5 mb-3">
        <h6 className="my-2">
          <a href="#" className="text-dark"><i className="fas fa-arrow-left fa-3x"></i></a>
        </h6>
      <div className="col-11" style={{ marginLeft: "50px", marginRight: "50px" }}>
        <h1 style={{ fontWeight: 700, textAlign: "justify", marginBottom: "30px" }}>
          Pencegahan Stunting Pada Anak
        </h1>
        <hr className="my-2" />
        <h5 className="text-end">Kamis, 30 November 2023</h5>
        <hr className="my-2" />
        <div className="container mt-5 mb-5">
          <div className="d-flex align-items-center justify-content-center">
            <img className="img-berita" src={stunting}  alt="Gambar Berita" style={{ width: "60%" }} />
          </div>
        </div>
        <div className="text-isiberita mt-4">
          <p style={{ textAlign: "justify" }}>
            Belakangan stunting sedang hangat diperbincangkan banyak orang, khususnya para ibu. Berdasarkan WHO, stunting adalah gangguan tumbuh kembang anak yang disebabkan kekurangan asupan gizi, terserang infeksi, maupun stimulasi yang tak memadai. Oleh karena itu, langkah pencegahan stunting sangat perlu dilakukan, apa sajakah caranya? Simak selengkapnya berikut ini.
          </p>
          <p style={{ textAlign: "justify" }}>
            <span style={{ fontWeight: 700 }}>1. Memenuhi kebutuhan gizi sejak hamil<br/></span> Tindakan yang relatif ampuh dilakukan untuk mencegah stunting pada anak adalah selalu memenuhi gizi sejak masa kehamilan. Lembaga kesehatan Millenium Challenge Account Indonesia menyarankan agar ibu yang sedang mengandung selalu mengonsumsi makanan sehat nan bergizi maupun suplemen atas anjuran dokter. Selain itu, perempuan yang sedang menjalani proses kehamilan juga sebaiknya rutin memeriksakan kesehatannya ke dokter atau bidan.
          </p>
          <p style={{ textAlign: "justify" }}>
            <span style={{ fontWeight: 700 }}>2. Beri ASI Eksklusif sampai bayi berusia 6 bulan<br/></span> Veronika Scherbaum, ahli nutrisi dari Universitas Hohenheim, Jerman, menyatakan ASI ternyata berpotensi mengurangi peluang stunting pada anak berkat kandungan gizi mikro dan makro. Oleh karena itu, ibu disarankan untuk tetap memberikan ASI Eksklusif selama enam bulan kepada sang buah hati. Protein whey dan kolostrum yang terdapat pada susu ibu pun dinilai mampu meningkatkan sistem kekebalan tubuh bayi yang terbilang rentan.
          </p>
          <p style={{ textAlign: "justify" }}>
            <span style={{ fontWeight: 700 }}>3. Dampingi ASI Eksklusif dengan MPASI sehat<br/></span> Ketika bayi menginjak usia 6 bulan ke atas, maka ibu sudah bisa memberikan makanan pendamping atau MPASI. Dalam hal ini pastikan makanan-makanan yang dipilih bisa memenuhi gizi mikro dan makro yang sebelumnya selalu berasal dari ASI untuk mencegah stunting. WHO pun merekomendasikan fortifikasi atau penambahan nutrisi ke dalam makanan. Di sisi lain, sebaiknya ibu berhati-hati saat akan menentukan produk tambahan tersebut. Konsultasikan dulu dengan dokter.
          </p>
          <p style={{ textAlign: "justify" }}>
            <span style={{ fontWeight: 700 }}>4. Terus memantau tumbuh kembang anak<br/></span> Orang tua perlu terus memantau tumbuh kembang anak mereka, terutama dari tinggi dan berat badan anak. Bawa si Kecil secara berkala ke Posyandu maupun klinik khusus anak. Dengan begitu, akan lebih mudah bagi ibu untuk mengetahui gejala awal gangguan dan penanganannya.
          </p>
          <p style={{ textAlign: "justify" }}>
            <span style={{ fontWeight: 700 }}>5. Selalu jaga kebersihan lingkungan<br/></span> Seperti yang diketahui, anak-anak sangat rentan akan serangan penyakit, terutama kalau lingkungan sekitar mereka kotor. Faktor ini pula yang secara tak langsung meningkatkan peluang stunting. Studi yang dilakukan di Harvard Chan School menyebutkan diare adalah faktor ketiga yang menyebabkan gangguan kesehatan tersebut. Sementara salah satu pemicu diare datang dari paparan kotoran yang masuk ke dalam tubuh manusia.
          </p>
          <p style={{ textAlign: "justify" }}>
            Semoga informasi ini membantu para ibu mencegah stunting dan meningkatkan kualitas kesehatan anak.<br/>
          </p>
          <p style={{ textAlign: "justify" }}>
            <span style={{ fontWeight: 700 }}>Referensi : <br/></span> https://promkes.kemkes.go.id/pencegahan-stunting
          </p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default PencegahanStunting;
