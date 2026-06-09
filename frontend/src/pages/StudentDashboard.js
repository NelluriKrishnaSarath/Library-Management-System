
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./StudentDashboard.css";

function StudentDashboard() {

    const username =
    localStorage.getItem("username") || "Student";

    const firstLetter =
    username.charAt(0).toUpperCase();

    const [dashboardData, setDashboardData] = useState({

    total_borrowed_books: 0,

    currently_borrowed_books: 0,

    returned_books: 0,

    fine_amount: 0
});

    const [myBooks, setMyBooks] = useState([]);

    useEffect(() => {

        loadDashboard();

        loadMyBooks();

    }, []);

    const loadDashboard = () => {

        axios.get(

            `http://127.0.0.1:8000/api/transactions/student-dashboard/?username=${username}`

        )

        .then((response) => {

            setDashboardData(
                response.data
            );

        })

        .catch((error) => {

            console.log(error);

        });
    };

    const loadMyBooks = () => {

        axios.get(

            `http://127.0.0.1:8000/api/transactions/my-books/?username=${username}`

        )

        .then((response) => {

            setMyBooks(
                response.data
            );

        })

        .catch((error) => {

            console.log(error);

        });
    };

    return (

        <div className="student-dashboard">

            {/* Sidebar */}

            <div className="sidebar">

                <h2>
                    📚 Library
                </h2>

                <ul>

                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
    <Link to="/student-books">
        Books
    </Link>
</li>

                    <li>
                        <Link to="/student-dashboard">
                            Dashboard
                        </Link>
                    </li>
                    <li>
    <Link to="/return-books">
        Return Books
    </Link>
</li>

                    <li>
                        <Link to="/login">
                            Logout
                        </Link>
                    </li>

                </ul>

            </div>

            {/* Main Content */}

            <div className="dashboard-content">

                <div className="dashboard-header">

                    <div>

                        <h1>
                            Student Dashboard
                        </h1>

                        <p>
                            Welcome Back 👋
                        </p>

                    </div>

                    <div className="student-profile">

                        <div className="student-avatar">

                            {firstLetter}

                        </div>

                        <div>

                            <h4>
                                {username}
                            </h4>

                            <span>
                                Student
                            </span>

                        </div>

                    </div>

                </div>

<div className="dashboard-cards">

    <div className="dashboard-card">

        <h2>
            {dashboardData.total_borrowed_books}
        </h2>

        <p>
            📚 Total Borrowed Books
        </p>

    </div>

    <div className="dashboard-card">

        <h2>
            {dashboardData.currently_borrowed_books}
        </h2>

        <p>
            📖 Currently Borrowed Books
        </p>

    </div>

    <div className="dashboard-card">

        <h2>
            {dashboardData.returned_books}
        </h2>

        <p>
            ✅ Returned Books
        </p>

    </div>

    <div className="dashboard-card">

        <h2>
            ₹{dashboardData.fine_amount}
        </h2>

        <p>
            💰 Fine Amount
        </p>

    </div>

</div>


                {/* Borrowed Books */}

                <div className="borrowed-books-section">

                    <h2>
                        My Borrowed Books
                    </h2>

                    <table className="borrowed-table">

                        <thead>

                            <tr>

                                <th>
                                    Book Name
                                </th>

                                <th>
                                    Author
                                </th>

                                <th>
                                    Borrow Date
                                </th>

                                <th>
                                    Due Date
                                </th>

                                <th>
                                    Status
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {myBooks.length > 0 ? (

                                myBooks.map((book, index) => (

                                    <tr key={index}>

                                        <td>
                                            {book.book_name}
                                        </td>

                                        <td>
                                            {book.author}
                                        </td>

                                        <td>
                                            {book.borrow_date}
                                        </td>

                                        <td>
                                            {book.due_date}
                                        </td>

                                        <td>
                                            {book.status}
                                        </td>

                                    </tr>

                                ))

                            ) : (

                                <tr>

                                    <td
                                        colSpan="5"
                                        style={{
                                            textAlign:"center"
                                        }}
                                    >
                                        No Books Borrowed
                                    </td>

                                </tr>

                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
}

export default StudentDashboard;
