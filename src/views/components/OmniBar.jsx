import React from 'react';

export default function OmniBar(props) {  
  return (
    <div className="container">

      <div className="card">

        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a className="nav-link active" href="#">New Tab <small>&times;</small></a>
            </li>
          </ul>
        </div>

        <div className="card-body">
          <form className="form-inline d-flex">
            <button className="btn btn-outline-secondary mr-1">
              <i className="mdi mdi-arrow-left"></i>
            </button>
            <button className="btn btn-outline-secondary mr-1" disabled>
              <i className="mdi mdi-arrow-right"></i>
            </button>
            <button className="btn btn-outline-secondary mr-1">
              <i className="mdi mdi-refresh"></i>
            </button>

            <div className="input-group align-self-stretch" style="flex-grow: 1;">
              <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="mdi mdi-magnify"></i>
                  </span>
              </div>
              <input type="text" className="form-control" placeholder="">
            </div>

            <button className="btn btn-outline-secondary ml-1">
              <i className="mdi mdi-dots-vertical"></i>
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}
