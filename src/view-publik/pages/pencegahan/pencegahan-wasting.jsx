import React from 'react';
import wasting from "../../../aset/wasting.jpg";
import JudulTop from '../../component/JudulTop';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

const PencegahanWasting = () => {
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
          Ketahui Cara Mencegah Wasting
        </h1>
        <hr className="my-2" />
        <h5 className="text-end">Kamis, 30 November 2023</h5>
        <hr className="my-2" />
        <div className="container mt-5 mb-5">
          <div className="d-flex align-items-center justify-content-center">
            <img className="img-berita" src={wasting}  alt="Gambar Berita" style={{ width: "60%" }} />
          </div>
        </div>
        <div className="text-isiberita mt-4">
          <p style={{ textAlign: "justify" }}>
            Apakah Anda pernah merasa khawatir karena anak Anda tampak kurus dibandingkan teman seusianya? Kondisi ini patut diwaspadai agar anak tidak jatuh dalam kondisi wasting. Wasting (gizi kurang dan gizi buruk) merupakan kondisi anak yang berat badannya kurang jika dibandingkan terhadap tinggi badannya, sehingga anak tampak kurus. Hal ini dikarenakan asupan makan yang tidak mencukupi baik secara kualitas, jumlah maupun jenisnya, dan/atau karena anak mengalami penyakit infeksi yang berulang. Wasting dapat terjadi dalam waktu singkat. Contohnya jika anak mengalami diare, hingga terjadi penurunan berat badan.
          </p>
          <p style={{ textAlign: "justify" }}>
            Wasting merupakan masalah gizi serius yang tidak boleh disepelekan, karena wasting bisa menyebabkan anak mudah sakit, pertumbuhan fisik dan perkembangan otak terganggu, risiko terkena penyakit tidak menular (seperti diabetes dan penyakit jantung ) saat dewasa, bahkan kematian. Untuk itu, penting agar memahami langkah-langkah pencegahan wasting pada anak, seperti penjelasan berikut:
          </p>
          <p style={{ textAlign: "justify" }}>
            <span style={{ fontWeight: 700 }}>Pemberian makanan yang tepat bagi balita<br/></span> Pemberian ASI eksklusif sejak bayi baru lahir hingga berusia 6 bulan, tanpa makanan dan minuman lain bahkan air putih sekalipun, karena ASI telah mengandung semua zat gizi penting yang diperlukan untuk  mendukung tumbuh kembang bayi secara optimal. Setelah 6 bulan, makanan pendamping ASI yang berkualitas dalam jumlah, jenis dan frekuensi yang cukup diberikan kepada balita, dilanjutkan  dengan  pemberian ASI hingga anak berusia 2 tahun atau lebih.
          </p>
          <p style={{ textAlign: "justify" }}>
            <span style={{ fontWeight: 700 }}>Pemberian imunisasi dasar yang lengkap<br/></span> Pada usia balita, daya tahan tubuh anak belum terbentuk dengan sempurna, sehingga imunisasi sangat penting untuk memberikan perlindungan bagi balita dari penyakit-penyakit yang dapat dicegah dengan imunisasi (PD3I).
          </p>
          <p style={{ textAlign: "justify" }}>
            <span style={{ fontWeight: 700 }}>Memberikan vitamin A dua kali dalam setahun<br/></span> Selain imunisasi, pemberian vitamin A bermanfaat untuk memperkuat daya tahan tubuh anak dan mencegah penyakit yang sering terjadi pada balita seperti campak dan diare yang bisa menyebabkan wasting. Kapsul vitamin A biasanya tersedia setiap bulan Februari dan Agustus di posyandu atau layanan kesehatan terdekat lainnya. Pastikan untuk berkonsultasi dengan tenaga kesehatan setempat mengenai jadwal dan ketersediaan vitamin A ini di daerah Anda.
          </p>
          <p style={{ textAlign: "justify" }}>
            <span style={{ fontWeight: 700 }}>Segera bawa balita sakit ke fasilitas kesehatan terdekat<br/></span> Balita yang sakit disarankan untuk segera dibawa ke fasilitas kesehatan terdekat agar mendapatkan penanganan yang cepat dan tepat. Penanganan balita sakit perlu dilakukan segera agar tidak sampai mengganggu tumbuh kembang anak.
          </p>
          <p style={{ textAlign: "justify" }}>
            <span style={{ fontWeight: 700 }}>Rutin ke posyandu<br/></span> Rutin ke posyandu atau fasilitas kesehatan lain untuk memantau pertumbuhan dan perkembangan balita. Kunjungan ke posyandu sebaiknya dilakukan setiap bulan, untuk deteksi dini jika terjadi gangguan tumbuh kembang anak.
          </p>
          <p style={{ textAlign: "justify" }}>
            <span style={{ fontWeight: 700 }}>Menerapkan pola hidup bersih dan sehat<br/></span> Menerapkan pola hidup bersih dan sehat, seperti mencuci tangan dengan sabun dan air mengalir dan tidak buang air besar sembarangan. Menjaga kebersihan lingkungan rumah agar tidak menjadi sarang bakteri dan virus penyebab penyakit yang dapat berkontribusi terhadap kondisi wasting.
          </p>
          <p style={{ textAlign: "justify" }}>
            Wasting merupakan masalah gizi pada anak yang sangat serius dan berpotensi berakibat fatal. Namun, perlu diingat bahwa wasting bisa dicegah. Tetap tenang dalam menghadapinya dan pastikan untuk menerapkan cara-cara pencegahan wasting yang telah disarankan di atas. Ayo lindungi kesehatan dan masa depan anak-anak dari dampak buruk wasting.
          </p>
          <p style={{ textAlign: "justify" }}>
            <span style={{ fontWeight: 700 }}>Referensi : <br/></span> https://www.unicef.org/indonesia/id/gizi/artikel/cara-mencegah-wasting
          </p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default PencegahanWasting;
