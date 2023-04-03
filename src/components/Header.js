import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Header.css";

export default function Header() {

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login")
  }


  return (
    <div>


      <nav className="navbar navbar-expand-lg bg-warning">
        <div className="container-fluid">
          <Link className="navbar-brand brand" to="#">FunFood</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav list">
              <li className="nav-item">
                <Link className="nav-link active fs-6" aria-current="page" to="/">Home</Link>
              </li>

              {(localStorage.getItem("authToken"))
                ? <li className="nav-item">
                  <Link className="nav-link active fs-6" aria-current="page" to="/">My Orders</Link>
                </li>
                : ""
              }
            </ul>

            {( !localStorage.getItem("authToken")) ? 
            <div className='d-flex'>
              <Link className="btn" to="/login">Log In </Link>
              <Link className="btn" to="/createuser">SignUp </Link>
            </div>
            : 
            <div>
               <div className='btn'>MyCart</div>
               <div className='btn'onClick={handleLogout}>LogOut</div>
            </div>
            }


          </div>
        </div>
      </nav>

    </div>
  )
}
