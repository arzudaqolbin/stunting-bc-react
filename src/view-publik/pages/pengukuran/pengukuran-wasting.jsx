import React from 'react';
import wasting from "../../../aset/wasting.jpg";
import JudulTop from '../../component/JudulTop';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

const PengukuranWasting = () => {
  return (
    <>
    <JudulTop />
    <Navbar/>
    <div className="container mt-5 mb-3">
        <h6 className="my-2">
          <a href="#" className="text-dark"><i className="fas fa-arrow-left fa-3x"></i></a>
        </h6>
      <div className="col-11" style={{ marginLeft: "50px", marginRight: "50px" }}>
        <h1 style={{ fontWeight: 700, textAlign: "justify", marginBottom: "30px" }}>
          Mencegah Wasting
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
            Wasting adalah kondisi ketika berat badan anak menurun, sangat kurang, atau bahkan berada di bawah rentang normal. Anak yang mengalami kondisi ini umumnya memiliki proporsi tubuh yang kurang ideal. Pasalnya, kondisi ini membuat berat badan tidak sepadan (kurus) dengan tinggi badan untuk anak di usia tertentu. WHO selaku badan kesehatan dunia, menyatakan bahwa wasting adalah salah satu masalah kesehatan utama. Sebab kondisi ini berhubungan langsung dengan angka kejadian suatu penyakit (morbiditas). Itulah mengapa wasting pada anak adalah hal yang tidak boleh disepelekan sehingga membutuhkan perhatian dan penanganan sesegera mungkin. Perlu diingat jika kondisi ini biasanya terjadi karena penurunan berat badan drastis akibat tidak tercukupinya kebutuhan zat gizi harian anak. Tidak hanya itu saja, memiliki satu atau beberapa penyakit bisa berujung pada turunnya berat badan. Sebagai contoh, gangguan pencernaan seperti diare, juga bisa mengakibatkan kondisi ini. Kejadian berat badan yang menurun pada anak juga dapat berdampak besar terhadap kondisi kesehatannya sekarang atau di kemudian hari. Umumnya, ia jadi lebih mudah terserang penyakit, bahkan berisiko sampai berakibat fatal. Selain dari segi kesehatan, kondisi ini juga turut memengaruhi kemampuan intelektual anak di masa pertumbuhannya.
          </p>
          <p style={{ textAlign: "justify" }}>
            <span style={{ fontWeight: 700 }}>Kapan anak dikatakan mengalami wasting?<br/></span> Menurut WHO, indikator untuk menilai kemungkinan kondisi ini pada anak yakni berat badan menurun dengan cepat sedangkan tinggi badan (BB/TB) tetap bertambah. Anak dikatakan mengalami kondisi ini ketika hasil pengukuran indikator BB/TB berada di -3 sampai dengan di bawah -2 standar deviasi (SD). Lebih dari itu, anak juga bisa mengalami wasting akut (severe acute malnutrition) ketika indikator BB/TB menunjukkan angka di bawah -3 SD. Bisa dikatakan, wasting akut adalah kondisi penurunan berat badan yang sudah lebih parah ketimbang kondisi yang biasa. Wasting umumnya lebih banyak dialami oleh anak di kelompok usia balita. Setelah lewat dari usia tersebut, risiko kondisi ini pada anak berangsur-angsur akan menurun.
          </p>
          <p style={{ textAlign: "justify" }}>
            <span style={{ fontWeight: 700 }}>Apa saja gejala wasting pada anak?<br/></span> Secara umum, kondisi ini ditandai dengan penurunan berat badan drastis sehingga membuat bobot tubuh anak tidak sebanding dengan tinggi badannya. Itulah mengapa kondisi ini, biasanya membuat tubuhnya tampak sangat kurus. Bahkan tak jarang, sampai membuat tulang-tulang di tubuh menonjol seperti hanya dibalut langsung oleh kulit. Anak yang mengalami kondisi ini juga kerap merasa sangat lemas, yang membuatnya sulit untuk beraktivitas normal seperti anak seusianya. Namun, ketika kondisi berat badan kurang pada anak ini tidak segera diobati, otomatis bisa berkembang lebih parah hingga mengakibatkan wasting akut. Jika tingkat keparahan wasting anak sudah mencapai akut, akan timbul beberapa gejala seperti indikator BB/TB menunjukkan angka kurang dari -3 SD, terdapat pembengkakan karena cairan (edema) di beberapa bagian tubuh, dan lingkar lengan atas (LILA) cenderung kecil yaitu biasanya kurang dari 12,5 cm Apabila tidak mendapatkan perawatan secepatnya, kondisi berat badan menurun pada tingkat yang parah ini bisa berkembang semakin buruk. Tidak menutup kemungkinan, nantinya akan mengakibatkan terjadi gizi buruk pada anak.
          </p>
          <p style={{ textAlign: "justify" }}>
            <span style={{ fontWeight: 700 }}>Referensi : <br/></span> https://hellosehat.com/parenting/kesehatan-anak/wasting-adalah-masalah-gizi-anak/
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default PengukuranWasting;
