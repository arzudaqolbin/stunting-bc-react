import React, { useState } from 'react';
import ModalKalkulator from './ModalKalkulator';
import data_tbu_lk from '../../data-patokan-pengukuran/data-tbu-lk';
import data_tbu_pr from '../../data-patokan-pengukuran/data-tbu-pr';
import data_bbu_lk from '../../data-patokan-pengukuran/data-bbu-lk';
import data_bbu_pr from '../../data-patokan-pengukuran/data-bbu-pr';
import data_bbpb_lk from '../../data-patokan-pengukuran/data-bbpb-0_24-lk';
import data_bbpb_pr from '../../data-patokan-pengukuran/data-bbpb-0_24-pr';
import data_bbtb_lk from '../../data-patokan-pengukuran/data-bbtb-24_60-lk';
import data_bbtb_pr from '../../data-patokan-pengukuran/data-bbtb-24_60-pr';
import "../css/kalkulator.css";

const Kalkulator = () => {
  const[openModal, setOpenModal] = useState(false);
  const[result, setResult] = useState({
    status_tbu:"",
    status_bbu:"",
    status_bbtb:"",
    dataReff_tbu: null,
    dataReff_bbu: null,
    dataReff_bbtb: null
  });
  const[data, setData] = useState({
    // jk:"",
    umur:"",
    bb:"",
    tb:""
  });

  const [errorMessages, setErrorMessages] = useState({
    jk: '',
    umur: '',
    bb: '',
    tb: '',
  });
  


  // handle input form
  const handleInputChange = (e) => {

    // kurang validasi input: type nya dan batasan angkanya untuk check status

    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // handle tb atau pb untuk generate status bbtb
  const adjustTinggi = (tinggi) => {
    const integerPart = Math.floor(tinggi);
    const decimalPart = tinggi - integerPart;
    let tinggiAdj;
    
    if (decimalPart >= 0 && decimalPart <= 0.3) {
      tinggiAdj = integerPart;
    } else if (decimalPart >= 0.4 && decimalPart <= 0.6) {
      tinggiAdj = integerPart + 0.5;
    } else if (decimalPart >= 0.8 && decimalPart <= 0.9) {
      tinggiAdj = integerPart + 1;
    } else if (decimalPart === 0.7) {
      if (integerPart % 2 === 0) {
        tinggiAdj = integerPart + 0.5;
      } else {
        tinggiAdj = integerPart + 1;
      }
    }
    
    return tinggiAdj;
  }
  
  const generateStatus_tbu = (jk, umur, tb) => {
    let status = "";

    let patokanData = jk === 1 ? data_tbu_lk : data_tbu_pr;
    const dataReff = patokanData.find((data) => data.umur === umur);

    if (dataReff) {
      switch (true) {
        case tb < dataReff.sd_3:
          status = "Sangat Pendek";
          break;
        case tb >= dataReff.sd_3 && tb < dataReff.sd_2:
          status = "Pendek";
          break;
        case tb >= dataReff.sd_2 && tb <= dataReff.sd3:
          status = "Normal";
          break;
        case tb > dataReff.sd3:
          status = "Tinggi";
          break;
        default:
          status = "---";
          break;
      }
    }

    setResult((prevResult) => ({
      ...prevResult,
      status_tbu: status,
      dataReff_tbu: dataReff
    }));

  }

  const generateStatus_bbu = (jk, umur, bb) => {
    let status = "";

    let patokanData = jk === 1 ? data_bbu_lk : data_bbu_pr;
    const dataReff = patokanData.find((data) => data.umur === umur);

    if (dataReff) {
      switch (true) {
        case bb < dataReff.sd_3:
          status = "Sangat Kurang";
          break;
        case bb >= dataReff.sd_3 && bb < dataReff.sd_2:
          status = "Kurang";
          break;
        case bb >= dataReff.sd_2 && bb <= dataReff.sd1:
          status = "Normal";
          break;
        case bb > dataReff.sd1:
          status = "Risiko Lebih";
          break;
        default:
          status = "---";
          break;
      }
    }

    setResult((prevResult) => ({
      ...prevResult,
      status_bbu: status,
      dataReff_bbu: dataReff
    }));

  }

  const generateStatus_bbtb = (jk, umur, bb, tb) => {
    let status = "";
    let tbAdj = adjustTinggi(tb);
    
    let patokanData = [];
    if(jk === 1){
      patokanData = umur <= 24 ? data_bbpb_lk : data_bbtb_lk;
    }
    else{
      patokanData = umur <= 24 ? data_bbpb_pr : data_bbtb_pr;
    }

    const dataReff = patokanData.find((data) => data.tb === tbAdj);

    if (dataReff) {
      switch (true) {
        case bb < dataReff.sd_3:
          status = "Gizi Buruk";
          break;
        case bb >= dataReff.sd_3 && bb < dataReff.sd_2:
          status = "Gizi Kurang";
          break;
        case bb >= dataReff.sd_2 && bb <= dataReff.sd1:
          status = "Normal";
          break;
        case bb > dataReff.sd1 && bb <= dataReff.sd2:
          status = "Risiko Gizi Lebih";
          break;
        case bb > dataReff.sd2 && bb <= dataReff.sd3:
          status = "Gizi Lebih";
          break;
        case bb > dataReff.sd3:
          status = "Obesitas";
          break;
        default:
          status = "---";
          break;
      }
    }

    setResult((prevResult) => ({
      ...prevResult,
      status_bbtb: status,
      dataReff_bbtb: dataReff
    }));
  }

  const validateInput = () => {
    const jk = parseInt(data.jk);
    const umur = parseInt(data.umur);
    const asi= data.asi;

    let valid = true;

    if (!asi){
      setErrorMessages((prevErrors) => ({ ...prevErrors, asi: 'Pilih salah satu' }));
      valid = false;
    } else {
      setErrorMessages((prevErrors) => ({ ...prevErrors, asi: '' }));
    }

    if (!jk){
      setErrorMessages((prevErrors) => ({ ...prevErrors, jk: 'Pilih salah satu' }));
      valid = false;
    } else {
      setErrorMessages((prevErrors) => ({ ...prevErrors, jk: '' }));
    }

    if (!umur) {
      setErrorMessages((prevErrors) => ({ ...prevErrors, umur: 'Umur tidak boleh kosong' }));
    //   valid = false;
    // } else if (!/^[0-9]+$/.test(umur)) {
    //   setErrorMessages((prevErrors) => ({ ...prevErrors, umur: 'Umur tidak valid' }));
    //   valid = false;
    // } else if (umur.includes('.') || umur.includes(',')) {
    //   setErrorMessages((prevErrors) => ({ ...prevErrors, umur: 'Umur harus bilangan bulat' }));
    //   valid = false;
    } else if (umur <= 0 || umur > 60) {
      setErrorMessages((prevErrors) => ({ ...prevErrors, umur: 'Umur harus diantara 1-60 tahun' }));
      valid = false;
    } else {
      setErrorMessages((prevErrors) => ({ ...prevErrors, umur: '' }));
    }

    if (!data.bb) {
      setErrorMessages((prevErrors) => ({ ...prevErrors, bb: 'Berat badan tidak boleh kosong' }));
      valid = false;
    } else if (!/^[0-9,.]+$/.test(data.bb)){
        setErrorMessages((prevErrors) => ({ ...prevErrors, bb: 'Berat badan tidak valid' }));
        valid = false;
    } else if (!/^[0-9]+([,.][0-9]{1,2})?$/.test(data.bb)) {
      setErrorMessages((prevErrors) => ({ ...prevErrors, bb: 'Maksimal dua digit angka di belakang koma' }));
      valid = false;
    } else if (parseFloat(data.bb) <= 2 || parseFloat(data.bb)>30) {
      setErrorMessages((prevErrors) => ({ ...prevErrors, bb: 'Berat badan harus diantara 2-30' }));
      valid = false;
    } else {
      setErrorMessages((prevErrors) => ({ ...prevErrors, bb: '' }));
    }
    

    if (!data.tb) {
      setErrorMessages((prevErrors) => ({ ...prevErrors, tb: 'Tinggi badan tidak boleh kosong' }));
      valid = false;
    } else if (!/^[0-9,.]+$/.test(data.tb)) {
      setErrorMessages((prevErrors) => ({ ...prevErrors, tb: 'Tinggi badan tidak valid' }));
      valid = false;
    } else if (!/^[0-9]+([,.][0-9]{1,2})?$/.test(data.tb)) {
      setErrorMessages((prevErrors) => ({ ...prevErrors, tb: 'Maksimal dua digit angka di belakang koma' }));
      valid = false;
    } else if (parseFloat(data.tb) <= 30 || parseFloat(data.tb)>120) {
      setErrorMessages((prevErrors) => ({ ...prevErrors, tb: 'Tinggi badan harus diantara 30-120' }));
      valid = false;
    } else {
      setErrorMessages((prevErrors) => ({ ...prevErrors, tb: '' }));
    }

    // alert(data.bb);
    // alert(data.tb);


    return valid;
  };

  const tampilkanPopUp = (e) => {
    e.preventDefault();
    // Validasi input sebelum menampilkan popup
    if (validateInput()) {
      e.preventDefault();

      const jk = parseInt(data.jk);
      const umur = parseInt(data.umur);
      const bb = parseFloat(data.bb);
      const tb = parseFloat(data.tb);

      generateStatus_bbtb(jk, umur, bb, tb);
      generateStatus_tbu(jk, umur, tb);
      generateStatus_bbu(jk, umur, bb);

      // alert(tb);
      // alert(bb);

      console.log(data);
      console.log(result);
      setOpenModal(true);
    }
  };

  return (

    <>
    <div id="kalkulator" className="container-fluid" style={{ backgroundColor: '#9FEDD7' }}>
      <div className="container p-2">
        <h2 className="my-4">Kalkulator Antropometri</h2>
        <form onSubmit={tampilkanPopUp}>
          <div className="row">
            <div className="col-md-4 px-5 mb-3">
              <h5>Jenis Kelamin</h5>
              <select className="form-select" name="jk" id="" onChange={handleInputChange}>
                <option value="" disabled selected>Pilih jenis kelamin</option>
                <option value="1">Laki-laki</option>
                <option value="2">Perempuan</option>
              </select>
              <div className="error-message">{errorMessages.jk}</div>
            </div>
            <div className="col-md-4 px-5 mb-3">
              <h5>Berat Badan (Kg)</h5>
              <input
                className="form-control" name="bb"
                placeholder="Contoh: 8.7"
                type="text"
                onChange={handleInputChange}
              />
              <div className="error-message">{errorMessages.bb}</div>
            </div>
            <div className="col-md-4 px-5 mb-3">
              <h5>ASI Eksklusif</h5>
              <select className="form-select" name="asi" id="" onChange={handleInputChange}>
                {/* <option value="-">---</option> */}
                <option value="" disabled selected>Pilih asli eksklusif</option>
                <option value="1">Ya</option>
                <option value="0">Tidak</option>
              </select>
              <div className="error-message">{errorMessages.asi}</div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-4 px-5 mb-3">
              <h5>Umur (Bulan)</h5>
              <input
                className="form-control" name="umur"
                placeholder="Contoh: 24"
                type="number"
                onChange={handleInputChange}
              />
              <div className="error-message">{errorMessages.umur}</div>
            </div>
            <div className="col-md-4 px-5 mb-3">
              <h5>Tinggi Badan (cm)</h5>
              <input
                className="form-control" name="tb"
                placeholder="Contoh: 78.7"
                type="text"
                onChange={handleInputChange}
              />
              <div className="error-message">{errorMessages.tb}</div>
            </div>
            <div className="col-md-4 px-5 d-flex align-items-center text-center mb-3">
              <button type="submit" className="btn btn-primary">Hitung</button>
            </div>
          </div>
        </form>

      </div>
    </div>
    <ModalKalkulator open={openModal} onClose={() => {setOpenModal(false)}} result={result}/>
    {/* tbu={dataReff_tbu} bbu={dataReff_bbu} bbtb={dataReff_bbtb} */}
    </>
  );
}

export default Kalkulator;
