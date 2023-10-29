import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';

export default function LihatBayi() {

    const dummyBalita = [
        {
          id: 1,
          nik: '1234567890',
          nama: 'Nama Balita 1',
          jk: 'Laki-laki',
          ortu: 'Orang Tua 1',
          jalan: 'Jalan ABC No. 123',
          rw: 'RW-01',
          rt: 'RT-01',
          tanggalLahir: '01-01-2020',
          posyandu: 'Posyandu A',
        },
        {
          id: 2,
          nik: '0987654321',
          nama: 'Nama Balita 2',
          jk: 'Perempuan',
          ortu: 'Orang Tua 2',
          jalan: 'Jalan XYZ No. 456',
          rw: 'RW-02',
          rt: 'RT-02',
          tanggalLahir: '02-02-2021',
          posyandu: 'Posyandu B',
        },
      ];  

    const [balita, setBalita] = useState([]);

    useEffect(() =>{
        loadDataBalita();
    });

    const loadDataBalita = async () =>{
        // const result = await axios.get("http://localhost:8080/getbalitaa");
        // setBalita(result.data);
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
                        <th scope="col">Jalan</th>
                        <th scope="col">RW</th>
                        <th scope="col">RT</th>
                        <th scope="col">TTL</th>
                        <th scope="col">Posyandu</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyBalita.map((bayi)=>(
                        <tr key={bayi.id}>
                            <td>{bayi.nik}</td>
                            <td>{bayi.nama}</td>
                            <td>{bayi.jk}</td>
                            <td>{bayi.ortu}</td>
                            <td>{bayi.jalan}</td>
                            <td>{bayi.rw}</td>
                            <td>{bayi.rt}</td>
                            <td>{format(new Date(bayi.tanggalLahir), 'dd-MM-yyyy')}</td>
                            <td>{bayi.posyandu}</td>
                        </tr>
                    ))}

                </tbody>
                </table>
            </div>
    )
}