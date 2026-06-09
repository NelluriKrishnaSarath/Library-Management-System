import React, {

    useEffect,
    useState

} from "react";

import axios from "axios";

import {

    Link

} from "react-router-dom";

import "./Books.css";

function Books() {

    const [books, setBooks] = useState([]);

    useEffect(() => {

        axios.get(

            "http://127.0.0.1:8000/api/books/"
        )

        .then((response) => {

            setBooks(response.data);
        })

        .catch((error) => {

            console.log(error);
        });

    }, []);

    return (

        <div className="books-page">

            {/* NAVBAR */}

            <nav className="navbar navbar-expand-lg bg-dark">

                <div className="container">

                    <Link
                        className="
                        navbar-brand
                        text-white
                        "
                        to="/"
                    >

                        📚 LIBRARY

                    </Link>

                    <div>

                        <Link
                            to="/"
                            className="
                            btn
                            btn-warning
                            "
                        >

                            Back Home

                        </Link>

                    </div>

                </div>

            </nav>

            {/* TITLE */}

            <div className="container py-5">

                <h1 className="books-title">

                    All Books

                </h1>

                {/* BOOKS */}

                <div className="row">

                    {

                        books.map((book) => (

                            <div
                                className="
                                col-lg-3
                                col-md-6
                                col-sm-12
                                mb-4
                                "
                                key={book.id}
                            >

                                <div className="book-card">

                                    <img
    src={
        book.image
        ? `http://127.0.0.1:8000${book.image}`
        : "https://cdn-icons-png.flaticon.com/512/2232/2232688.png"
    }
    alt={book.title}
/>

                                    <div className="book-content">

                                        <h5>

                                            {book.title}

                                        </h5>

                                        <p>

                                            {book.author}

                                        </p>

                                        <p>

                                            {book.category}

                                        </p>

                                        <button
                                            className="
                                            btn
                                            btn-warning
                                            w-100
                                            "
                                        >

                                            View Book

                                        </button>

                                    </div>

                                </div>

                            </div>
                        ))
                    }

                </div>

            </div>

        </div>
    );
}

export default Books;