import React from 'react';
import stunting from "../../../aset/stunting.jpg";
import JudulTop from '../../component/JudulTop';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

const PengukuranStunting = () => {
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
          Deteksi Anak yang Mengalami Stunting
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
            Stunting atau perawakan pendek merupakan gangguan pertumbuhan yang sebagian besar disebabkan oleh masalah nutrisi kronis sejak bayo dalam kandungan hingga masa awal anak lahir yang biasanya tampak setelah ank berusia 2 tahun. Menurut Kemenkes RI, balita pendek atau stunting bisa diketahui bila seorang balita sudah diukur panjang atau tinggi badannya, lalu dibandingkan dengan standar, dan hasil pengukurannya ini berada pada kisaran di bawah normal.
          </p>
          <p style={{ textAlign: "justify" }}>
            <span style={{ fontWeight: 700 }}>Bagaimana cara mendeteksi stunting?<br/></span> Pertumbuhan dan perkembangan merupakan hal yang seharusnya selalu dipantau pada setiap kunjungan ke dokter. Pemantauan pertumbuhan anak biasanya dilakukan dengan memplot berat badan dan tinggi badan ke dalam suatu kurva pertumbuhan. Seorang anak dikatakan pendek  jika tinggi badan atau panjang badan menurut usia lebih dari dua standar deviasi di bawah median kurve standar pertumbuhan anak WHO.
          </p>
          <p style={{ textAlign: "justify" }}>
            <span style={{ fontWeight: 700 }}>Bagaimana cara mengetahui gangguan pertumbuhan (stunting) pada anak?<br/></span> Acuan yang digunakan untuk tiap kelompok usia dapat berbeda. Saat ini Indonesia menggunakan kurva pertumbuhan milik Badan Kesehatan Dunia (WHO) dan kurva dari Center for Disease Control Prevention (CDC,2000).Indikator yang umum digunakan di Indonesia adalah berat badan menurut tinggi badan (BB/TB), meski ada juga indicator lain seperti tinggi badan menurut usia (TB/U), dan berat badan menurut usia (BB/U). <br/>Indikator BB/TB menentukan status gizi anak dengan membandingkan berat dengan berat ideal menurut tinggi badannya, kemudian dapat diinterpretasikan sebagai obesitas, gizi lebih, gizi baik, gizi kurang, dan gizi buruk. Indikator TB/U membandingkan tinggi badan seorang anak dengan anak yang sama jenis kelamin seusianya. Interpretasinya adalah tinggi, normal, perawakan pendek, dan perawakan sangat pendek. Adapun indicator BB/U membagi anak menjadi berat badan normal, berat badan kurang, dan berat badan berlebih. Indicator ini membandingkan berat badan seorang anak dengan anak seusianya. <br/> Untuk memastikan pertumbuhan sesuai dengan acuan, bawalah anak secara teratur ke layanan kesehatan. Bila curiga ada kelainan pertumbuhan, segera bawa anak ke dokter. Pastikan setiap kali anak diukur berat, panjang/tinggi badan, dan lingkar kepalanya, data diplot di kurva pertumbuhan yang sesuai agar dapat dinilai keadaannya saat ini. Bisa saja anak memiliki pertumbuhan normal sampai usia tertentu, tetapi terjadi gangguan setelahnya. Misalnya, seorang anak usia satu tahun tergolong gizi baik dengan tinggi badan sesuai usia, tepai kemudian mengalami infeksi berat sehingga pertumbuhan setelah usia satu tahun terhambat.
          </p>
          <p style={{ textAlign: "justify" }}>
            <span style={{ fontWeight: 700 }}>Apakah semua anak perawakan pendek disebut stunting?<br/></span> Seorang anak diklasifikasikan sebagai perawakan pendek jika panjang badan atau tinggi badan menurut umur berada dibawah Zscore –2 WHO Growth Standard. Perawakan sangat pendek jika panjang badan atau tinggi badan menurut umur berada dibawah Zscore –3 WHO Growth Standard. Stunting jika perawakan pendek tersebut disebabkan oleh kondisi kesehatan atau nutrisi yang suboptimal. Stunting harus dibedakan dengan perawakan pendek lainnya oleh dokter spesialis anak untuk menentukan tatalaksana selanjutnya. Terkadang perawakan pendeng yang bukan perawakan pendek memerlukan terapi pemanjangan tungkai, sulih hormone atau sulih enzim.
          </p>
          <p style={{ textAlign: "justify" }}>
            <span style={{ fontWeight: 700 }}>Referensi : <br/></span> https://rsudmangusada.badungkab.go.id/promosi/read/102/stunting
          </p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default PengukuranStunting;
