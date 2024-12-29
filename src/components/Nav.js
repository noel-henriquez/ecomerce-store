import React from "react";
import { Link } from "react-router-dom"; // Import Link
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../stylesheets/nav.css"; // Custom CSS for further styling if needed
import 'bootstrap-icons/font/bootstrap-icons.css';




function Nav() {
    return (
        <nav className="navbar nav-color navbar-expand-lg w-100"> {/* Full width navbar */}
            <div className="container-fluid ">
                
                <h4 className="navbar-brand logo mx-auto font-monospace brade" to="/">Brade</h4>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent"> {/* Removed d-flex */}
                    <ul className="navbar-nav text mb-2 gap-5 mb-lg-0"> {/* This centers the nav items */}
                        <li className="color nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
                        </li>
                        <li className="color nav-item">
                            <Link className="nav-link" to="/shop">SHOP</Link>
                        </li>
                        <li className="color nav-item">
                            <Link className="nav-link" to="/features">FEATURES</Link>
                        </li>
                    </ul>
                    <div className="log-in-button"><button className="log-in">LOG IN</button></div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
