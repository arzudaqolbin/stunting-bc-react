import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';

export default function LihatBayi() {

    // const dummyBalita = [
    //     {
    //       id: 1,
    //       nik: '1234567890',
    //       nama: 'Nama Balita 1',
    //       jk: 'Laki-laki',
    //       ortu: 'Orang Tua 1',
    //       jalan: 'Jalan ABC No. 123',
    //       rw: 'RW-01',
    //       rt: 'RT-01',
    //       tanggalLahir: '01-01-2020',
    //       posyandu: 'Posyandu A',
    //     },
    //     {
    //       id: 2,
    //       nik: '0987654321',
    //       nama: 'Nama Balita 2',
    //       jk: 'Perempuan',
    //       ortu: 'Orang Tua 2',
    //       jalan: 'Jalan XYZ No. 456',
    //       rw: 'RW-02',
    //       rt: 'RT-02',
    //       tanggalLahir: '02-02-2021',
    //       posyandu: 'Posyandu B',
    //     },
    //   ];  

    const [balita, setBalita] = useState([]);

    useEffect(() =>{
        loadDataBalita();
    }, []);

    const loadDataBalita = async () => {
        try {
            const result = await axios.get("http://127.0.0.1:8000/api/balitas");
            setBalita(result.data);
        } catch (error) {
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
    }
    

    return (
        <div className='py-4'>
            <table className="table border shadow">
                <thead>
                    <tr>
                        <th scope="col">NIK</th>
                        <th scope="col">Nama</th>
                        <th scope="col">JK</th>
                        <th scope="col">Ortu</th>
                        <th scope="col">Alamat</th>
                        <th scope="col">RW</th>
                        <th scope="col">TTL</th>
                        <th scope="col">Posyandu id</th>
                    </tr>
                </thead>
                <tbody>
                    {balita.map((bayi)=>(
                        <tr key={bayi.id}>
                            <td>{bayi.nik}</td>
                            <td>{bayi.nama}</td>
                            <td>{bayi.jenis_kelamin}</td>
                            <td>{bayi.nama_ortu}</td>
                            <td>{bayi.alamat}</td>
                            <td>{bayi.rw}</td>
                            <td>{format(new Date(bayi.tgl_lahir), 'dd-MM-yyyy')}</td>
                            <td>{bayi.posyandu_id}</td>
                        </tr>
                    ))}

                </tbody>
                </table>
            </div>
    )
}