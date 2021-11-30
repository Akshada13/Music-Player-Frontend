import React from 'react'
import { Link } from 'react-router-dom';
import './homepage.css';
import env from '../../settings';

function Homepage() {
    return (
        <div className="heading__container text-center mt-3">
            <p>
                Hello there 👋 <br />
                Welcome, to our Online Music Web Application. <br />
                Here you can play free <br />
                listen to the songs you love and millions more. <br />
                   🎧
            </p>
            <div className="homepage__container mt-5">
                <div className="db__container">
                    <p className="dbcontenet__head">
                        To see this project done using MERN
                    </p>
                    <Link to="/DbContent" className="btn btn-success">Click here</Link>
                </div>
                
            </div>
            <div className="footer__container mt-5">
                <a href={env.github} target="blank">
                    <i className="fa fa-github" style={{ "fontSize": "50px", "color": "black" }}></i>
                </a>
                <p className="mb-1">
                    Click on the icon to view this project
                </p>
            </div>
        </div>
    )
}

export default Homepage
