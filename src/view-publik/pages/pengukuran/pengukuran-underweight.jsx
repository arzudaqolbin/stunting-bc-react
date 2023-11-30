import React from 'react';
import underweight from "../../../aset/underweight.jpeg";
import JudulTop from '../../component/JudulTop';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';

const PengukuranUnderweight = () => {
  return (
    <>
    <JudulTop />
    <Navbar />
    <div className="container mt-5 mb-3">
      <div className="container">
        <h6 className="my-2">
          <a href="#" className="text-dark"><i className="fas fa-arrow-left fa-3x"></i></a>
        </h6>
      </div>
      <div className="col-11" style={{ marginLeft: "50px", marginRight: "50px" }}>
        <h1 style={{ fontWeight: 700, textAlign: "justify", marginBottom: "30px" }}>
          Mencegah Underweight
        </h1>
        <hr className="my-2" />
        <h5 className="text-end">Kamis, 30 November 2023</h5>
        <hr className="my-2" />
        <div className="container mt-5 mb-5">
          <div className="d-flex align-items-center justify-content-center">
            <img className="img-berita" src={underweight}  alt="Gambar Berita" style={{ maxWidth: "100%" }} />
          </div>
        </div>
        <div className="text-isiberita mt-4">
          <p style={{ textAlign: "justify" }}>
            <span style={{ fontWeight: 700 }}>Paragraf 1</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas porta vulputate. Donec elit neque, sodales sit amet erat in, faucibus tristique urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in sodales augue, quis lacinia arcu. Vestibulum vel pulvinar orci, at feugiat erat. Cras efficitur dictum eros, at ullamcorper mauris accumsan vel. Sed id lorem a lectus faucibus tincidunt. Donec at diam fermentum, auctor orci non, auctor lectus. Sed et aliquam tellus.
          </p>
          <p style={{ textAlign: "justify" }}>
            <span style={{ fontWeight: 700 }}>Paragraf 2</span> Morbi massa risus, tempus at purus suscipit, faucibus ornare dolor. Sed vel varius nunc. Pellentesque eu elit neque. Donec scelerisque malesuada purus, vitae semper felis consectetur ut. Morbi venenatis est eros, nec aliquam lectus gravida quis. Sed tincidunt euismod pharetra. Aenean sed commodo turpis, vel cursus ipsum. Donec iaculis mauris laoreet nunc bibendum, non commodo tellus vulputate. Aliquam erat volutpat. Praesent facilisis luctus est, ut luctus ipsum mattis nec. Duis condimentum lorem et porttitor pulvinar.
          </p>
          <p style={{ textAlign: "justify" }}>
            <span style={{ fontWeight: 700 }}>Paragraf 3</span> Nullam mi augue, tincidunt ac accumsan non, semper vel nunc. Suspendisse sed gravida orci. Quisque ac pellentesque nunc. Fusce pulvinar est vel erat malesuada porta. Curabitur in ante gravida, tincidunt mi a, dignissim augue. Donec a orci a metus venenatis iaculis. Maecenas tincidunt nisl sit amet ultrices auctor.
          </p>
          <p style={{ textAlign: "justify" }}>
            <span style={{ fontWeight: 700 }}>Paragraf 4</span> Ut et eros ac magna mattis consequat eu nec neque. Curabitur vulputate odio eget mi ornare sodales. Duis cursus dictum auctor. Aliquam vulputate pellentesque massa eget pharetra. Etiam laoreet ultricies libero eu sodales. In urna enim, efficitur ac hendrerit in, consectetur ut leo. Duis vel rhoncus purus. Nulla tempus ut sem vel dapibus. Curabitur faucibus, orci quis tristique pulvinar, nisl arcu pharetra orci, eget vestibulum felis lorem eu nibh. Praesent molestie libero eget nisi tempor hendrerit. Mauris nec erat non velit commodo aliquam nec a mauris. Nam et lacus turpis. Aliquam eu vulputate libero. Sed mollis auctor lacus, id facilisis diam volutpat convallis. Maecenas lacus neque, feugiat vel mauris sed, eleifend sagittis ex.
          </p>
          <p style={{ textAlign: "justify" }}>
            <span style={{ fontWeight: 700 }}>Paragraf 5</span> Maecenas nec elit sed leo finibus luctus. Cras pharetra interdum est, sed pellentesque diam hendrerit quis. Sed blandit tincidunt nunc ac volutpat. Morbi eu egestas enim. Morbi id mi eu eros mollis condimentum ac id diam. Aliquam dictum tristique velit ac tincidunt. Aliquam massa augue, cursus eu augue nec, finibus auctor sem.
          </p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default PengukuranUnderweight;
