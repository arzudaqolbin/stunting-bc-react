import React from 'react';
import underweight from "../../../aset/underweight.jpeg";
import JudulTop from '../../component/JudulTop';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

const PengukuranUnderweight = () => {
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
          Mengetahui Ketika Anak Underweight
        </h1>
        <hr className="my-2" />
        <h5 className="text-end">Kamis, 30 November 2023</h5>
        <hr className="my-2" />
        <div className="container mt-5 mb-5">
          <div className="d-flex align-items-center justify-content-center">
            <img className="img-berita" src={underweight}  alt="Gambar Berita" style={{ width: "60%" }} />
          </div>
        </div>
        <div className="text-isiberita mt-4">
          <p style={{ textAlign: "justify" }}>
            Underweight adalah kondisi saat berat badan anak berada di bawah rentang rata-rata atau normal. Idealnya, anak dikatakan memiliki berat badan normal ketika setara dengan teman-teman seusianya. Sebaliknya, berat badan kurang menandakan bahwa bobot tubuh anak tidak sebanding atau lebih rendah dari kelompok usianya. Sama halnya seperti bentuk malnutrisi lain, anak dengan berat badan kurang juga biasanya disebabkan oleh adanya masalah kesehatan. Berat badan anak yang kurang merupakan pertanda bahwa tubuhnya tidak memperoleh cukup zat gizi untuk mendukung perkembangan berbagai organ tubuh. Misalnya tulang, kulit, rambut, serta bagian tubuh lainnya. Di samping itu, memiliki riwayat atau sedang mengalami penyakit medis tertentu juga bisa melatarbelakangi kondisi anak underweight. Hal tersebutlah yang kemudian menghambat atau menyulitkan penambahan berat badan normal pada anak.
          </p>
          <p style={{ textAlign: "justify" }}>
            <span style={{ fontWeight: 700 }}>Kapan anak dikatakan mengalami underweight?<br/></span> Berdasarkan ketentuan dari WHO, ada dua indikator penilaian status gizi yang bisa digunakan untuk menilai underweight pada anak. <br/> Pertama yakni indikator berat badan berdasarkan usia (BB/U) yang lebih dikhususkan untuk anak usia 0—60 bulan. <br/> Kedua yakni indikator indeks massa tubuh (IMT) berdasarkan usia (IMT/U) yang biasanya dipakai untuk anak 5—18 tahun. <br/>Anak usia 0—60 bulan dikatakan memiliki berat badan kurang ketika pengukuran indikator BB/U berada di antara angka di bawah -2 sampai -3 standar deviasi (SD). <br/> Sementara anak usia 5—18 tahun termasuk dalam kategori underweight jika indikator IMT/U berada di persentil kurang dari 5.
          </p>
          <p style={{ textAlign: "justify" }}>
            <span style={{ fontWeight: 700 }}>Apa saja gejala underweight pada anak?<br/></span> Gejala yang paling mudah dilihat jika berat badan anak kurang yakni tubuhnya tampak kurus. Kondisi ini terjadi akibat jumlah asupan energi yang dikonsumsinya terlalu rendah dan tak sebanding dengan energi yang dikeluarkan. Dengan kata lain, asupan energi harian yang didapatkan kemungkinan tidak dapat memenuhi besarnya kebutuhan gizi harian si anak. Selain itu, berbagai gejala berat badan kurang pada anak juga meliputi rambut mudah rontok, sistem kekebalan tubuh lemah, sehingga gampang terserang penyakit, mudah lelah, sulit berkonsentrasi, kurang bertenaga saat melakukan aktivitas, tulang cenderung rapuh, serta pertumbuhan dan perkembangan yang lambat. Gejala lain yang juga bisa dimiliki oleh anak dengan berat badan kurang yakni tulang dan pembuluh darah vena yang tampak jelas pada kulit. Sebenarnya, pembuluh darah berwarna biru keunguan yang memang biasanya muncul di kulit itu tidak menonjol dengan sendirinya. Para ahli medis menyatakan bahwa hal tersebut dikarenakan kulit anak dengan berat badan kurang cenderung lebih kering dan tipis. Inilah yang semakin memperjelas penampakan aliran pembuluh darah. Namun, terlihatnya tulang dan pembuluh darah vena di balik kulit tidak selalu dikaitkan sebagai gejala underweight pada anak.
          </p>
          <p style={{ textAlign: "justify" }}>
            <span style={{ fontWeight: 700 }}>Referensi : <br/></span> https://hellosehat.com/parenting/kesehatan-anak/malnutrisi/anak-underweight-berat-badan-kurang/
          </p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default PengukuranUnderweight;
