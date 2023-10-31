import React from 'react';
import StatGrafik from './Stat-Grafik';
import StatUmum from './Stat-Umum';

const Statistik = () => {
    return(
        <div>
            <div class="container">
                <h2 class="my-4">Statistik Balita Kelurahan Bidara Cina</h2>
            </div>
            <StatGrafik />
            <StatUmum />
        </div>
    )

}

export default Statistik;