import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-dark bg-black">
                <div className="container-fluid">
                    <Link className="navbar-brand mx-auto mt-2" to="/">
                       <img src="https://rb.gy/uo1e6h" alt="Music" width="80" height="50" className="" /> 
                        <h2>Gaana Music</h2>
                       <img src="https://rb.gy/uo1e6h" alt="Music" width="80" height="50" className="" /> 
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar
