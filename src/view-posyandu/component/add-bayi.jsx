import { useState, useEffect } from "react";
import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

export default function AddBayi() {

    let navigate = useNavigate();
    
    const [balita, setBalita] = useState({
        nik:"",
        nama:"",
        jenis_kelamin:"",
        nama_ortu:"",
        pekerjaan_ortu:"Programmer",
        alamat:"",
        rw:"",
        tgl_lahir:"",
        anak_ke:"1",
        umur:"10",
        posyandu_id:1,
        status_tbu:"Normal",
        status_bbu:"Normal",
        status_bbtb:"Normal"
    });
    console.log(balita);

    const { nik, nama, jenis_kelamin, nama_ortu, rw, alamat, tgl_lahir, posyandu } = balita;
    const [jalan, setJalan] = useState("");
    const [rt, setRt] = useState("");


    // const onInputChange = (e) => {
    //     const { name, value } = e.target;
    
    //     if (name === 'jalan' || name === 'rw' || name === 'rt') {
    //         // Jika yang diubah adalah jalan, rw, atau rt, simpan dalam variabel terpisah
    //         if (name === 'jalan') {
    //             setJalan(value);
    //         } else if (name === 'rt') {
    //             setRt(value);
    //         } else {
    //             setBalita((prevBalita) => ({
    //                 ...prevBalita,
    //                 [name]: value,
    //                 alamat: `${jalan ? jalan : ''}${jalan && (rt || rw) ? ', ' : ''}${rt ? `RT ${rt}` : ''}${rw && rt ? ', ' : ''}${rw ? `RW ${rw}` : ''}`,
    //             }));
    //         }
    //     } else {
    //         // Jika yang diubah bukan jalan, rw, atau rt, simpan seperti biasa
    //         setBalita({ ...balita, [name]: value });
    //     }
    // };

    useEffect(() => {
        // Gunakan useEffect untuk memperbarui alamat saat jalan, rw, atau rt berubah
        setBalita((prevBalita) => ({
            ...prevBalita,
            alamat: `${jalan ? jalan : ""}${jalan && (rt || rw) ? ", " : ""}${
                rt ? `RT ${rt}` : ""
            }${rw && rt ? ", " : ""}${rw ? `RW ${rw}` : ""}`,
        }));
    }, [jalan, rw, rt]);
    

    
    const onInputChange = (e) => {
        const { name, value } = e.target;

        if (name === "jalan") {
            setJalan(value);
        } else if (name === "rt") {
            setRt(value);
        } else {
            setBalita({ ...balita, [name]: value });
        }
    };
    
    
    
    // const transformData = (e) => {
    //     e.nama = data.nama.toUpperCase();
    //     e.umur = parseInt(data.umur);
    //     return data;
    //   };

    const onSubmit = async (e) => {
        e.preventDefault();
    
        try {
            // Lakukan permintaan POST ke server
            await axios.post("http://127.0.0.1:8000/api/balitas", balita);
            
            // Jika permintaan berhasil, navigasikan ke halaman lain
            navigate("/");
        } catch (error) {
            // Tangani kesalahan
            if (error.response) {
                // Respon dari server dengan kode status tertentu
                console.error("Kesalahan dalam permintaan ke server:", error.response.status, error.response.data);
                // Di sini Anda dapat menampilkan pesan kesalahan yang sesuai dengan respon dari server
            } else if (error.request) {
                // Tidak ada respon dari server
                console.error("Tidak ada respon dari server:", error.request);
                // Di sini Anda dapat menampilkan pesan kesalahan yang sesuai untuk kasus ini
            } else {
                // Kesalahan lainnya
                console.error("Terjadi kesalahan:", error.message);
                // Di sini Anda dapat menampilkan pesan kesalahan umum atau menangani dengan cara yang sesuai
            }
        }
    };
    

    console.log(balita);

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Tambah Balita</h2>
                    <form onSubmit={(e)=>{onSubmit(e)}}>
                    <div className='mb-3'>
                        <label htmlFor='NIK' className='form-label'>
                            NIK
                        </label>
                        <input
                        type="number"
                        className='form-control'
                        placeholder='Masukkan NIK Balita'
                        name='nik'
                        value={nik}
                        onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Nama' className='form-label'>
                            Nama Balita
                        </label>
                        <input
                        type={"text"}
                        className='form-control'
                        placeholder='Masukkan Nama Balita'
                        name='nama'
                        value={nama}
                        onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='JenisKelamin' className='form-label'>
                            Jenis Kelamin
                        </label>
                        <select
                            className='form-select'
                            name='jenis_kelamin'
                            value={jenis_kelamin}
                            onChange={(e) => onInputChange(e)}
                        >
                            <option value='laki-laki'>Laki-laki</option>
                            <option value='perempuan'>Perempuan</option>
                        </select>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Nama Ortu' className='form-label'>
                            Nama Orang Tua
                        </label>
                        <input
                        type={"text"}
                        className='form-control'
                        placeholder=''
                        name='nama_ortu'
                        value={nama_ortu}
                        onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Alamat' className='form-label'>
                            Alamat
                        </label>
                        <input
                        type={"text"}
                        className='form-control'
                        placeholder='alamat'
                        name='alamat'
                        value={alamat}
                        onChange={(e)=>onInputChange(e)}
                        readOnly
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Jalan' className='form-label'>
                            Jalan
                        </label>
                        <input
                        type={"text"}
                        className='form-control'
                        placeholder='jalan'
                        name='jalan'
                        value={jalan}
                        onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='RT' className='form-label'>
                            RT
                        </label>
                        <select
                            className='form-select'
                            name='rt'
                            value={rt}
                            onChange={(e) => onInputChange(e)}
                        >
                            <option value='01'>01</option>
                            <option value='02'>02</option>
                        </select>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='RW' className='form-label'>
                            RW
                        </label>
                        <input
                        type={"text"}
                        className='form-control'
                        placeholder=''
                        name='rw'
                        value={rw}
                        onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Tanggal Lahir' className='form-label'>
                            Tanggal Lahir Balita
                        </label>
                        <input
                        type='date'
                        className='form-control'
                        placeholder='Masukkan Tanggal Lahir'
                        name='tgl_lahir'
                        value={tgl_lahir}
                        onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Posyandu' className='form-label'>
                            Nama Posyandu
                        </label>
                        <input
                        type={"text"}
                        className='form-control'
                        placeholder=''
                        name='posyandu'
                        value={posyandu}
                        onChange={(e)=>onInputChange(e)}
                        />
                    </div>

                    <button type='submit' className='btn btn-outline-primary'>Submit</button>
                    <Link className='btn btn-outline-danger mx-3' to={"/"}>Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}