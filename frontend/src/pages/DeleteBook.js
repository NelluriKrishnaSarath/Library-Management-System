import React, {
    useEffect,
    useState
} from "react";

import axios from "axios";

import {
    useNavigate
} from "react-router-dom";

import "./DeleteBook.css";

function DeleteBook() {

    const [books, setBooks] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {

        fetchBooks();

    }, []);

    const fetchBooks = () => {

        axios.get(
            "http://127.0.0.1:8000/api/books/"
        )

        .then((response) => {

            setBooks(
                response.data
            );

        })

        .catch((error) => {

            console.log(
                error
            );

        });
    };

    const handleDelete = (id) => {

        const confirmDelete = window.confirm(

            "Are you sure you want to delete this book?"
        );

        if (!confirmDelete) {

            return;
        }

        axios.delete(

            `http://127.0.0.1:8000/api/books/delete/${id}/`

        )

        .then(() => {

            alert(
                "Book Deleted Successfully"
            );

            fetchBooks();

        })

        .catch((error) => {

            console.log(
                error
            );

            alert(
                "Failed To Delete Book"
            );
        });
    };

    return (

        <div className="delete-page">

            <div className="delete-container">

                <div className="header-section">

                    <h1 className="delete-title">

                        Delete Books

                    </h1>

                    <button

                        className="back-btn"

                        onClick={() =>
                            navigate(
                                "/admin-dashboard"
                            )
                        }

                    >

                        Back To Dashboard

                    </button>

                </div>

                <div className="table-wrapper">

                    <table className="books-table">

                        <thead>

                            <tr>

                                <th>ID</th>

                                <th>Title</th>

                                <th>Author</th>

                                <th>Category</th>

                                <th>Delete</th>

                            </tr>

                        </thead>

                        <tbody>

                            {
                                books.length > 0 ?

                                books.map(
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

                                            <button

                                                className="delete-btn"

                                                onClick={() =>
                                                    handleDelete(
                                                        book.id
                                                    )
                                                }

                                            >

                                                Delete

                                            </button>

                                        </td>

                                    </tr>

                                ))

                                :

                                <tr>

                                    <td
                                        colSpan="5"
                                    >

                                        No Books Found

                                    </td>

                                </tr>
                            }

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    );
}

export default DeleteBook;