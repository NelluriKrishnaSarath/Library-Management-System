

import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {

    const navigate = useNavigate();

    return (

        <div className="home-page">

            {/* Navbar */}


<nav className="navbar">

    <div className="logo">
        📚 Library Management
    </div>

    <div className="nav-buttons">

        <button
            className="login-btn"
            onClick={() => navigate("/login")}
        >
            Login
        </button>

        <button
            className="register-btn"
            onClick={() => navigate("/register")}
        >
            Register
        </button>

    </div>

</nav>

            {/* Hero Section */}


<section className="hero">

    <div className="overlay">

        <h1>
            Smart Library Management System
        </h1>

        <p>
            Discover, Borrow, Manage and Learn.
            A complete digital library solution for
            students and librarians.
        </p>

        <div className="hero-buttons">

            <button
            className="hero-btn"
            onClick={() =>
            navigate("/login")
            }
            >
                Login
            </button>

            <button
            className="hero-btn register"
            onClick={() =>
            navigate("/register")
            }
            >
                Register
            </button>

        </div>

    </div>

</section>
```


            {/* Stats */}

            <section className="stats">

                <div className="stat-card">
                    <h1>10K+</h1>
                    <p>Books</p>
                </div>

                <div className="stat-card">
                    <h1>850+</h1>
                    <p>Students</p>
                </div>

                <div className="stat-card">
                    <h1>120+</h1>
                    <p>Categories</p>
                </div>

                <div className="stat-card">
                    <h1>24/7</h1>
                    <p>Access</p>
                </div>

            </section>

            {/* Categories */}

            <section className="categories">

                <h2>
                    Popular Categories
                </h2>

                <div className="category-grid">

                    <div className="category-card">
                        💻 Programming
                    </div>

                    <div className="category-card">
                        🤖 AI & ML
                    </div>

                    <div className="category-card">
                        📊 Data Science
                    </div>

                    <div className="category-card">
                        🌐 Web Development
                    </div>

                    <div className="category-card">
                        📚 Academic Books
                    </div>

                    <div className="category-card">
                        🔬 Research
                    </div>

                </div>

            </section>

            {/* Features */}

            <section className="features">

                <h2>
                    Why Choose Us?
                </h2>

                <div className="feature-grid">

                    <div className="feature-card">

                        <h3>
                            🔍 Smart Search
                        </h3>

                        <p>
                            Search books instantly.
                        </p>

                    </div>

                    <div className="feature-card">

                        <h3>
                            📖 Easy Borrow
                        </h3>

                        <p>
                            Fast issue and return.
                        </p>

                    </div>

                    <div className="feature-card">

                        <h3>
                            📊 Reports
                        </h3>

                        <p>
                            Detailed analytics.
                        </p>

                    </div>

                    <div className="feature-card">

                        <h3>
                            🔐 Secure
                        </h3>

                        <p>
                            Role based access.
                        </p>

                    </div>

                </div>

            </section>

            {/* Footer */}

            <footer className="footer">

                <p>

                    © 2026 Library Management System

                </p>

            </footer>

        </div>
    );
}

export default Home;

