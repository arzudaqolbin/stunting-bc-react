import React from 'react';

import logoDki from '../../aset/logo-dki.png';
import logoJaktim from '../../aset/logo-jaktim.png';

const Login = () => {
  return (
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: '#026670' }}>
      {/* Untuk main content */}
      <section>
        <div className="logo text-center mt-5">
          <img src={logoDki} style={{ width: '100px' }} />
          <img src={logoJaktim} style={{ width: '100px' }} />
        </div>
        <div className="title text-center mt-3">
          <h4 style={{ color: 'white' }}>Single Sign On</h4>
          <h4 style={{ color: 'orange' }}>Dashboard Monitoring Stunting Kelurahan Bidara Cina</h4>
        </div>
        <div className="container mt-3 pt-5 col-sm-5">
          <div className="row">
            <div className="col-sm-8 m-auto">
              <div className="card border-0 shadow">
                <div className="card-body">
                  <h4 className="text-center">Silahkan melakukan login</h4>

                  <form action="" className="">
                    <div className="text-center">
                      <input type="text" name="" id="" className="form control my-1 py-1 col-12 mt-3" placeholder="Username" />
                      <input type="text" name="" id="" className="form control my-1 py-1 col-12" placeholder="Password" />
                    </div>
                    <div className="checkbox">
                      <input type="checkbox" id="remember" name="remember" />
                      <span></span>
                      <label htmlFor="remember">Tampilkan password</label>
                    </div>
                    <div className="text-end mt-3">
                      <button className="btn btn-primary">Login</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
