import React from "react";

import { Link } from "react-router-dom";

import "../styles/navbar.css";

function Navbar() {

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">

            <Link
                className="navbar-brand"
                to="/"
            >

                Library Management

            </Link>

            <div className="ms-auto">

                <Link
                    to="/login"
                    className="btn btn-light mx-2"
                >

                    Login

                </Link>

                <Link
                    to="/register"
                    className="btn btn-warning"
                >

                    Register

                </Link>

            </div>

        </nav>
    );
}

export default Navbar;