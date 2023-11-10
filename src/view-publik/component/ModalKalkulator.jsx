import React from 'react';
import "../css/modal.css";
import badFace from "../../aset/face-bad.png";
import smileFace from "../../aset/face-smile.png";

const ModalKalkulator = ({open, onClose, result}) => {

    if(!open) return null;

    return(
        <div className="overlay">
        <div className="modalContainer container" style={{backgroundColor: "#E4F3EF"}}>
            <div className="modalRight">
            <div>
                <i className="fa-solid fa-square-xmark closeBtn fa-3x" onClick={onClose}></i>
            </div>
            <br />
            <br />
            {/* Ini nanti buat 3 flex */}
            <div className="container content">
                {/* Ini nanti buat 3 flex yang sejajar */}
                <div className="d-flex flex-wrap flex-md-row justify-content-between align-self-stretch">
                    <div className="border col-sm-12 col-lg-4 col-md-4 d-flex flex-wrap p-3" style={{backgroundColor: "#fefefe"}}>
                        <img
                            src={result.status_tbu === "Normal" || result.status_tbu === "Tinggi" ? smileFace : badFace}
                            alt=""
                            className='col-12 img-fluid m-auto'
                            style={{ width: "10rem" }}
                        />
                        <div className='col-12'>
                            <h5>Status Tinggi  Anak</h5>
                            {/* ini nanti dibuat kek yang ditabel aja berwarna statusnya */}
                            <p>Tinggi anak anda termasuk {result.status_tbu}</p>
                            <p>
                                {result.status_tbu === "Normal" || result.status_tbu === "Tinggi" ? 
                                "Pertahankan asupan gizi dan pola kesehatan balita anda, terus pantau perkembangannya dengan selalu menghadiri pengecekan balita rutin di posyandu terdekat" 
                                : 
                                `Tinggi badan ideal untuk balita usia ${result.dataReff_tbu.umur} bulan adalah minimal ${result.dataReff_tbu.sd_2} Cm. Segera konsultasikan balita anda ke puskesmas terdekat`}
                            </p>
                        </div>
                    </div>
                    <div className="border col-sm-12 col-lg-4 col-md-4 d-flex flex-wrap p-3" style={{backgroundColor: "#fefefe"}}>
                        <img
                            src={result.status_bbtb === "Normal"? smileFace : badFace}
                            alt=""
                            className='col-12 img-fluid m-auto'
                            style={{ width: "10rem" }}
                        />
                        <div className='col-12'>
                            <h5>Status Gizi  Anak</h5>
                            <p>Gizi anak anda termasuk {result.status_bbtb}</p>
                            <p>
                                {result.status_bbtb === "Normal"?
                                "Pertahankan asupan gizi dan pola kesehatan balita anda, terus pantau perkembangannya dengan selalu menghadiri pengecekan balita rutin di posyandu terdekat" 
                                : 
                                `Berat badan ideal untuk balita dengan tinggi sekitar ${result.dataReff_bbtb.tb} Cm adalah antara ${result.dataReff_bbtb.sd_2} - ${result.dataReff_bbtb.sd1} Kg. Segera konsultasikan balita anda ke puskesmas terdekat`}
                            </p>
                        </div>
                    </div>
                    <div className="border col-sm-12 col-lg-4 col-md-4 d-flex flex-wrap p-3" style={{backgroundColor: "#fefefe"}}>
                        <img
                            src={result.status_bbu === "Normal" ? smileFace : badFace}
                            alt=""
                            className='col-12 img-fluid m-auto'
                            style={{ width: "10rem" }}
                        />
                        <div className='col-12'>
                            <h5>Status Berat Badan</h5>
                            <p>Berat badan anak anda termasuk {result.status_bbu}</p>
                            <p>
                                {result.status_bbu === "Normal"?
                                "Pertahankan asupan gizi dan pola kesehatan balita anda, terus pantau perkembangannya dengan selalu menghadiri pengecekan balita rutin di posyandu terdekat" 
                                : 
                                `Berat badan ideal untuk balita usia ${result.dataReff_bbu.umur} bulan adalah antara ${result.dataReff_bbu.sd_2} - ${result.dataReff_bbu.sd1} Kg. Segera konsultasikan balita anda ke puskesmas terdekat`}
                            </p>
                        </div>
                    </div>
                    {/* <div className="border col-sm-12 col-lg-4 col-md-4">
                        <p>Status BB/U</p>
                        <p>Tinggi anak anda: {result.status_bbu}</p>

                    </div>
                    <div className="border col-sm-12 col-lg-4 col-md-4">
                        <p>Status BB/TB</p>
                        <p>Tinggi anak anda: {result.status_bbtb}</p>
                    </div> */}
                </div>
            </div>

            {/* Ini buat tombol close */}
            <div className="btnContainer">
                <button className='btn btn-primary' onClick={onClose}>
                <span className='bold'>Kembali</span>
                </button>
            </div>
            </div>
        </div>
        </div>

        
    )
}

export default ModalKalkulator;