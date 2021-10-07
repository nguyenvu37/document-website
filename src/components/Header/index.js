import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div
      className="header container-fluid position-sticky"
      style={{ top: 0, zIndex: 1000 }}
    >
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Chuyên trang tài liệu
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="row w-100">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Trang chủ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/chuyen-de">
                    Chuyên đề
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
