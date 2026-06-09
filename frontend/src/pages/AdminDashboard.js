
import React, {
    useEffect,
    useState,
    useRef
} from "react";
import {
 useNavigate
} from "react-router-dom";
import "./AdminDashboard.css";
import axios from "axios";
function AdminDashboard() {

    const navigate = useNavigate();

    const username =
    localStorage.getItem("username") || "Admin";

    const firstLetter =
    username.charAt(0).toUpperCase();

    const [dashboard, setDashboard] = useState({

        total_books: 0,

        available_books: 0,

        issued_books: 0,

        books: []
    });

    const excelRef = useRef(null);

    const pdfRef = useRef(null);





const loadDashboard = () => {

    axios.get(
        "http://127.0.0.1:8000/api/books/admin-dashboard/"
    )

    .then((response) => {

        setDashboard(
            response.data
        );

    })

    .catch((error) => {

        console.log(error);

    });
};

useEffect(() => {

    loadDashboard();

}, []);
    


    

    const uploadExcel = (e) => {

        const formData =
        new FormData();

        formData.append(

            "file",

            e.target.files[0]
        );

        axios.post(

            "http://127.0.0.1:8000/api/books/upload-excel/",

            formData
        )

        .then(() => {

            alert(
                "Excel Uploaded"
            );

            loadDashboard();

        })

        .catch((error) => {

            console.log(error);

        });
    };

    const uploadPdf = (e) => {

        const formData =
        new FormData();

        formData.append(

            "pdf",

            e.target.files[0]
        );

        axios.post(

            "http://127.0.0.1:8000/api/books/upload-pdf/",

            formData
        )

        .then(() => {

            alert(
                "PDF Uploaded"
            );

        })

        .catch((error) => {

            console.log(error);

        });
    };


return (

<div className="admin-container">

    {/* Sidebar */}

    <div className="sidebar">

        <h2 className="logo">
            📚 Library
        </h2>

        <ul className="sidebar-menu">

            <li onClick={() => navigate("/admin-dashboard")}>
                📊 Dashboard
            </li>

            <li onClick={() => navigate("/books")}>
                📚 Books
            </li>


            <li onClick={() => navigate("/students")}>
                👨‍🎓 Students
            </li>

            <li onClick={() => navigate("/issue-books")}>
                📖 Issue Books
            </li>

            

            

           
            <li onClick={() => navigate("/")}>
                🚪 Logout
            </li>

        </ul>

    </div>

    {/* Main Content */}

    <div className="main-content">

        {/* Top Navbar */}

        <div className="top-navbar">

            <input
                type="text"
                placeholder="Search books..."
                className="search-box"
            />

            <div className="navbar-right">

                <button className="icon-btn">
                    🔔
                </button>

                <button className="icon-btn">
                    🌙
                </button>

    <div className="admin-profile">

    <div className="profile-avatar">

        {firstLetter}

    </div>

    <div>

        <h4>

            {username}

        </h4>

        <p>

            Librarian

        </p>

    </div>

</div>

            </div>

        </div>

        {/* Welcome */}

        <div className="welcome-card">

            <h1>
                📚 Library Management Dashboard
            </h1>

            <p>
                Manage books, students, borrowing activities and reports.
            </p>

        </div>

        {/* Action Buttons */}

        <div className="action-bar">

            <button
                className="primary-btn"
                onClick={() =>
                navigate("/add-book")
                }
            >
                + Add Book
            </button>

            <button
                className="success-btn"
                onClick={() =>
                excelRef.current.click()
                }
            >
                📤 Upload Excel
            </button>

            <button
                className="warning-btn"
                onClick={() =>
                pdfRef.current.click()
                }
            >
                📥 Upload PDF
            </button>

            

        </div>

        <input
            type="file"
            accept=".xlsx,.xls"
            ref={excelRef}
            onChange={uploadExcel}
            hidden
        />

        <input
            type="file"
            accept=".pdf"
            ref={pdfRef}
            onChange={uploadPdf}
            hidden
        />

        {/* Statistics */}

        <div className="stats-grid">

            <div className="stat-card">

                <h3>📚 Total Books</h3>

                <h1>
                    {dashboard.total_books}
                </h1>

            </div>

            <div className="stat-card success-card">

                <h3>📖 Available Books</h3>

                <h1>
                    {dashboard.available_books}
                </h1>

            </div>

            <div className="stat-card warning-card">

                <h3>🔄 Issued Books</h3>

                <h1>
                    {dashboard.issued_books}
                </h1>

            </div>

            <div className="stat-card danger-card">

                <h3>👨‍🎓 Students</h3>

                <h1>{dashboard.total_students}</h1>

            </div>

        </div>

        {/* Books Table */}

        <div className="table-card">

            <h2>
                Book Management
            </h2>

            <table className="books-table">

                <thead>

                    <tr>

                        <th>Title</th>

                        <th>Author</th>

                        <th>Category</th>

                        <th>Total</th>

                        <th>Available</th>

                        <th>Borrowed</th>

                        <th>Status</th>

                    </tr>

                </thead>

                <tbody>

                    {
                        dashboard.books.map(
                        (book) => (

                        <tr
                        key={book.id}
                        >

                            <td>
                                {book.title}
                            </td>

                            <td>
                                {book.author}
                            </td>

                            <td>
                                {book.category}
                            </td>

                            <td>
                                {book.total_copies}
                            </td>

                            <td>
                                {book.available_copies}
                            </td>

                            <td>
                                {book.borrowed_books}
                            </td>

                            <td>

                                <span
                                className={
                                book.available_copies > 0
                                ?
                                "status available"
                                :
                                "status unavailable"
                                }
                                >

                                {
                                book.available_copies > 0
                                ?
                                "Available"
                                :
                                "Out Of Stock"
                                }

                                </span>

                            </td>

                        </tr>

                        ))
                    }

                </tbody>

            </table>

        </div>

    

        

        

    </div>

</div>

);

}

export default AdminDashboard;