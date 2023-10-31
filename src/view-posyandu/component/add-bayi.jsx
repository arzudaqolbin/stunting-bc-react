import { useState } from "react";
import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

export default function AddBayi() {

    let navigate = useNavigate();
    
    const [balita, setBalita] = useState({
        nik:"",
        nama:"",
        jenisKelamin:"",
        namaOrtu:"",
        jalan:"",
        rw:"",
        rt:"",
        tanggalLahir:"",
        posyandu:""
    });

    const {nik, nama, jenisKelamin, namaOrtu, jalan, rw, rt, tanggalLahir, posyandu } = balita;

    const onInputChange = (e) => {
        setBalita({...balita,[e.target.name]:e.target.value})
    };
    
    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8000/endpointt", balita);
        navigate("/");
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
                            name='jenisKelamin'
                            value={jenisKelamin}
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
                        name='namaOrtu'
                        value={namaOrtu}
                        onChange={(e)=>onInputChange(e)}
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
                        <label htmlFor='RT' className='form-label'>
                            RT
                        </label>
                        <input
                        type={"text"}
                        className='form-control'
                        placeholder=''
                        name='rt'
                        value={rt}
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
                        name='tanggalLahir'
                        value={tanggalLahir}
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