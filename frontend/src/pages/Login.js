
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({

        username: "",

        password: ""
    });

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(

                "http://127.0.0.1:8000/api/accounts/login/",

                formData
            );

            console.log(response.data);

            localStorage.setItem(

                "username",

                formData.username
            );

            const memberType =
            response.data.member_type;

            if (
                memberType === "Librarian"
            ) {

                navigate(
                    "/admin-dashboard"
                );

            } else {

                navigate(
                    "/student-dashboard"
                );
            }

        }

        catch (error) {

            console.log(error);

            alert(
                "Invalid Credentials"
            );
        }
    };

    return (

        <div className="login-page">

            <div className="login-overlay">

                <div className="login-card">

                    <h1>
                        Login
                    </h1>

                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">

                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                className="form-control"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <div className="mb-4">

                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="form-control"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />

                        </div>

                        <button
                            type="submit"
                            className="login-btn"
                        >
                            Login
                        </button>

                    </form>

                    <div className="register-link">

                        <p>

                            Don't have an account?

                            <Link to="/register">

                                Register

                            </Link>

                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Login;

