import React from 'react';
import balita from "../../aset/balita.png";

const BayiStat= () => {
    return(
        <div className="p-2 flex-fill border border-primary">
            <div className="row align-items-center">
                <div className="col-auto">
                <div className="square-div">
                    <img src={balita} alt="" style={{width: "100px"}} />
                </div>
                </div>
                <div className="col">
                    <h4>11,5%</h4>
                    <p>Dari 250 balita, terdapat 12 kasus</p>
                </div>
            </div>
        </div>
    )
}

export default BayiStat;