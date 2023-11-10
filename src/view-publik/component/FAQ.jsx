import React from 'react';
import mother from "../../aset/mother.png";

const FAQ = () => {
  return (
    <div className="container text-center p-5">
      <h2 className="my-2 text-center">FAQ</h2>
      <p className=' text-center'>Frequently Asked Questions</p>
      <div className="row align-items-center">
        <div className="col-md-6 order-md-1 text-center">
          <img src={mother} width="350px" alt="" />
        </div>
        <div className="col-md-6 order-md-2">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ backgroundColor: '#F7CF91' }}>
                  <strong>Apa itu Stunting?</strong>
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={{ backgroundColor: '#E7EEE2' }}>
                <div className="accordion-body text-center">
                  <strong>Stunting adalah</strong> kondisi ketika pertumbuhan fisik anak-anak terhambat atau terhenti secara permanen karena kekurangan nutrisi atau gizi yang cukup, terutama selama periode pertumbuhan awal, yaitu biasanya selama dua tahun pertama kehidupan. Kondisi ini terutama terjadi pada anak-anak yang menderita malnutrisi kronis, yang dapat disebabkan oleh asupan makanan yang tidak mencukupi, kurangnya akses ke air bersih dan sanitasi, serta masalah kesehatan yang seringkali berkaitan dengan infeksi atau penyakit.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ backgroundColor: '#F7CF91' }}>
                  <strong>Apa itu Underweight?</strong>
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={{ backgroundColor: '#E7EEE2' }}>
                <div className="accordion-body text-center">
                  <strong>Underweight adalah</strong> istilah yang digunakan untuk menggambarkan kondisi seseorang yang memiliki berat badan lebih rendah dari yang dianggap sebagai berat badan sehat berdasarkan indeks massa tubuh (Body Mass Index atau BMI). BMI adalah pengukuran yang digunakan untuk menilai berat badan seseorang berdasarkan tinggi badan dan berat badan mereka. Indeks massa tubuh dihitung dengan membagi berat badan dalam kilogram oleh kuadrat tinggi badan dalam meter (BMI = berat badan (kg) / (tinggi badan (m) * tinggi badan (m)).
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type of="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ backgroundColor: '#F7CF91' }}>
                  <strong>Apa itu Wasting?</strong>
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" style={{ backgroundColor: '#E7EEE2' }}>
                <div className="accordion-body text-center">
                  <strong>Wasting adalah</strong> istilah yang digunakan dalam konteks antropometri dan gizi untuk menggambarkan kondisi ketika berat badan seseorang atau anak secara signifikan lebih rendah dari yang dianggap normal atau sehat berdasarkan indeks massa tubuh (BMI) atau ukuran antropometri lainnya. Wasting sering kali merujuk pada kekurangan gizi akut yang menyebabkan penurunan berat badan yang cepat dan signifikan.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" style={{ backgroundColor: '#F7CF91' }}>
                  <strong>Apa itu Obesitas?</strong>
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample" style={{ backgroundColor: '#E7EEE2' }}>
                <div className="accordion-body text-center">
                  <strong>Obesitas adalah</strong> kondisi medis yang ditandai oleh adanya penimbunan lemak tubuh yang berlebihan sehingga berat badan melebihi batas yang dianggap sehat berdasarkan indeks massa tubuh (BMI). Indeks massa tubuh (BMI) adalah alat pengukuran yang umum digunakan untuk mengevaluasi hubungan antara berat badan dan tinggi badan seseorang. BMI dihitung dengan membagi berat badan dalam kilogram dengan kuadrat tinggi badan dalam meter (BMI = berat badan (kg) / (tinggi badan (m) * tinggi badan (m)).
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
