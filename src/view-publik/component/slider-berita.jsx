// import React from 'react';
// import berita from "../../aset/berita.png";

// const SliderBerita = () => {
//   return (
//     <div className="container">
//       <h2 className="text-center mt-5 mb-5">Berita Terkini</h2>
//       <div id="carouselExampleControls" className="carousel carousel-dark slide" data-bs-ride="carousel">
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <div className="cards-wrapper">
//               <div className="card">
//                 <img src={berita} style={{width: "100px"}} className="card-img-top" alt="" />
//                 <div className="card-body">
//                   <h5 className="card-title">Judul berita</h5>
//                   <p className="card-text">
//                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
//                   </p>
//                   <a href="#" className="btn btn-primary">
//                     Baca berita
//                   </a>
//                 </div>
//               </div>
//               <div className="card">
//                 <img src={berita} style={{width: "100px"}} className="card-img-top" alt="" />
//                 <div className="card-body">
//                   <h5 className="card-title">Judul berita</h5>
//                   <p className="card-text">
//                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
//                   </p>
//                   <a href="#" className="btn btn-primary">
//                     Baca berita
//                   </a>
//                 </div>
//               </div>
//               <div className="card">
//                 <img src={berita} style={{width: "100px"}} className="card-img-top" alt="" />
//                 <div className="card-body">
//                   <h5 className="card-title">Judul berita</h5>
//                   <p className="card-text">
//                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
//                   </p>
//                   <a href="#" className="btn btn-primary">
//                     Baca berita
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="carousel-item">
//             <div className="cards-wrapper">
//               <div className="card">
//                 <img src={berita} style={{width: "100px"}} className="card-img-top" alt="" />
//                 <div className="card-body">
//                   <h5 className="card-title">Judul berita</h5>
//                   <p className="card-text">
//                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
//                   </p>
//                   <a href="#" className="btn btn-primary">
//                     Baca berita
//                   </a>
//                 </div>
//               </div>
//               <div className="card">
//                 <img src={berita} style={{width: "100px"}} className="card-img-top" alt="" />
//                 <div className="card-body">
//                   <h5 className="card-title">Judul berita</h5>
//                   <p className="card-text">
//                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
//                   </p>
//                   <a href="#" className="btn btn-primary">
//                     Baca berita
//                   </a>
//                 </div>
//               </div>
//               <div className="card">
//                 <img src={berita} style={{width: "100px"}} className="card-img-top" alt="" />
//                 <div className="card-body">
//                   <h5 className="card-title">Judul berita</h5>
//                   <p className="card-text">
//                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
//                   </p>
//                   <a href="#" className="btn btn-primary">
//                     Baca berita
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="carousel-item">
//             <div className="cards-wrapper">
//               <div className="card">
//                 <img src={berita} style={{width: "100px"}} className="card-img-top" alt="" />
//                 <div className="card-body">
//                   <h5 className="card-title">Judul berita</h5>
//                   <p className="card-text">
//                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
//                   </p>
//                   <a href="#" className="btn btn-primary">
//                     Baca berita
//                   </a>
//                 </div>
//               </div>
//               <div className="card">
//                 <img src={berita} style={{width: "100px"}} className="card-img-top" alt="" />
//                 <div className="card-body">
//                   <h5 className="card-title">Judul berita</h5>
//                   <p className="card-text">
//                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
//                   </p>
//                   <a href="#" className="btn btn-primary">
//                     Baca berita
//                   </a>
//                 </div>
//               </div>
//               <div className="card">
//                 <img src="berita.png" className="card-img-top" alt="" />
//                 <div className="card-body">
//                   <h5 className="card-title">Judul berita</h5>
//                   <p className="card-text">
//                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
//                   </p>
//                   <a href="#" className="btn btn-primary">
//                     Baca berita
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
//           <span className="carousel-control-next-icon" ariahidden="true"></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//       <div style={{ textAlign: 'right' }}>
//         <a className="text-berita">Berita Selengkapnya&gt;&gt;<br /><br /></a>
//       </div>
//     </div>
//   );
// }

// export default SliderBerita;
import React from 'react';
import berita from "../../aset/berita.png";
import "../css/slider-berita.css";

const SliderBerita = () => {
  return (
    <div className="container">
      <h2 className="text-center mt-5 mb-5">Berita Terkini</h2>
      <div id="carouselExampleControls" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="cards-wrapper d-flex justify-content-around">
              <div className="card">
                <img src={berita} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">Judul berita</h5>
                  <p className="card-text">
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Baca berita
                  </a>
                </div>
              </div>
              <div className="card">
                <img src={berita} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">Judul berita</h5>
                  <p className="card-text">
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Baca berita
                  </a>
                </div>
              </div>
              <div className="card">
                <img src={berita} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">Judul berita</h5>
                  <p className="card-text">
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Baca berita
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="cards-wrapper d-flex justify-content-around">
              <div className="card">
                <img src={berita} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">Judul berita</h5>
                  <p className="card-text">
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Baca berita
                  </a>
                </div>
              </div>
              <div className="card">
                <img src={berita} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">Judul berita</h5>
                  <p className="card-text">
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Baca berita
                  </a>
                </div>
              </div>
              <div className="card">
                <img src={berita} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">Judul berita</h5>
                  <p className="card-text">
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Baca berita
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="cards-wrapper d-flex justify-content-around">
              <div className="card">
                <img src={berita} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">Judul berita</h5>
                  <p className="card-text">
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Baca berita
                  </a>
                </div>
              </div>
              <div className="card">
                <img src={berita} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">Judul berita</h5>
                  <p className="card-text">
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Baca berita
                  </a>
                </div>
              </div>
              <div className="card">
                <img src={berita} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">Judul berita</h5>
                  <p className="card-text">
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Baca berita
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-control-prev" role="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </div>
        <div className="carousel-control-next" role="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </div>
        <div style={{ textAlign: 'right' }}>
          <a className="text-berita" style={{ textDecoration: 'none' }}>
            Berita Selengkapnya&gt;&gt;<br /><br />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SliderBerita;