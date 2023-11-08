import React from 'react';

const ListBerita = () => {
  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <div className="col-md-6 offset-md-2">
          <form className="d-flex" style={{ width: '750px' }} role="search">
            <div className="input-group">
              <div className="align-self-center" style={{ marginRight: '10px' }}>
                Berita yang dicari :
              </div>
              <input className="form-control" type="search" placeholder="Search" aria-label="Search" aria-describedby="search-label" />
            </div>
          </form>
        </div>
      </div>
      <div className="row mt-3">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <div key={index} className="col-md-4 mb-5">
            <div className="card" style={{ width: '18rem' }}>
              <img src="berita.png" className="card-img-top" alt="" />
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
        ))}
      </div>
    </div>
  );
}

export default ListBerita;
