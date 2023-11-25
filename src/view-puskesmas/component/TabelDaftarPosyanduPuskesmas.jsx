import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BASE_URL from '../../base/apiConfig';
import "../css/tabel-daftar-posyandu-puskesmas.css";
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

function TabelDaftarPosyanduPuskesmas({idPuskesmas, apiAuth}) {
    // const { idPuskesmas } = useParams();
    const [posyanduList, setPosyanduList] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Fetch posyandu data for the specific puskesmas
        axios.get(`${BASE_URL}/puskesmas/${idPuskesmas}/posyandu`, apiAuth)
            .then(response => {
                setPosyanduList(response.data.data);
                setLoading(false)
            })
            .catch(error => {
                console.error('Error fetching posyandu:', error);
            });
    }, [idPuskesmas]);

    return (
        <>
    {
      loading ?(
      <div className='text-center'>
        <ClipLoader
          loading={loading}
          size={150}
        />
      </div>) : (
        <main className="container">
            <div className="container-fluid">
                {/* Mulai isi kontennya disini */}
                <h2 className="custom-judul">Daftar Posyandu di Puskesmas</h2>

                <form className="d-flex align-items-center">
                    <input className="form-control me-2" type="text" placeholder="Cari nama posyandu..." aria-label="Search" />
                    <button className="btn btn-success btn-rounded btn-sm" type="submit">Cari</button>
                </form>

                <div className="p-3 mb-2 bg-light custom-border rounded">
                    <table className="table custom-table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nama Posyandu</th>
                                <th scope="col">Alamat</th>
                                <th scope="col">Ketua Kader</th>
                                <th scope="col">Nomor Telepon</th>
                                <th scope="col">Lihat Detail</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posyanduList.map(posyandu => (
                                <tr key={posyandu.id}>
                                    <th scope="row">{posyandu.id}</th>
                                    <td>{posyandu.nama}</td>
                                    <td>{posyandu.alamat}</td>
                                    <td>{posyandu.ketua_kader}</td>
                                    <td>{posyandu.nomor_telepon}</td>
                                    <td>
                                        <Link to={`puskesmas/detail-posyandu/${posyandu.id}`} className="btn btn-info">Info</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>)
    }
    </>
    )
}

export default TabelDaftarPosyanduPuskesmas;