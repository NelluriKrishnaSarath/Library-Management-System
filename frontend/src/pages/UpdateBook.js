import React, {
    useEffect,
    useState
} from "react";

import axios from "axios";
import "./UpdateBook.css";

import {
    useNavigate
} from "react-router-dom";

import "./UpdateBook.css";

function UpdateBook() {

    const [books, setBooks] =
    useState([]);

    const [selectedBook,
    setSelectedBook] =
    useState(null);

    const navigate =
    useNavigate();

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

            console.log(error);

        });
    };

    const handleChange =
    (e) => {

        setSelectedBook({

            ...selectedBook,

            [e.target.name]:
            e.target.value
        });
    };

    const handleUpdate =
    async (e) => {

        e.preventDefault();

        try {

            await axios.put(

                `http://127.0.0.1:8000/api/books/update/${selectedBook.id}/`,

                selectedBook
            );

            alert(
                "Book Updated Successfully"
            );

            setSelectedBook(
                null
            );

            fetchBooks();

        }

        catch(error){

            console.log(error);

            alert(
                "Update Failed"
            );
        }
    };

    return (

        <div className="update-page">

            <div className="update-container">

                <div className="header">

                    <h1>
                        Update Books
                    </h1>

                    <button

                    className="back-btn"

                    onClick={() =>
                    navigate(
                        "/admin-dashboard"
                    )
                    }

                    >

                        Back to Dashboard

                    </button>

                </div>

                <table className="books-table">

                    <thead>

                        <tr>

                            

                            <th>Title</th>

                            <th>Author</th>

                            <th>Category</th>

                            <th>Edit</th>

                        </tr>

                    </thead>

                    <tbody>

                    {
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

                                className="edit-btn"

                                onClick={() =>
                                setSelectedBook(
                                    book
                                )
                                }

                                >

                                    Edit

                                </button>

                            </td>

                        </tr>

                        ))
                    }

                    </tbody>

                </table>

                {
                selectedBook && (

                <form

                className="update-form"

                onSubmit={
                    handleUpdate
                }

                >

                    <h2>
                        Edit Book
                    </h2>

                    <input
                    type="text"
                    name="title"
                    value={
                        selectedBook.title
                    }
                    onChange={
                        handleChange
                    }
                    />

                    <input
                    type="text"
                    name="author"
                    value={
                        selectedBook.author
                    }
                    onChange={
                        handleChange
                    }
                    />

                    <input
                    type="text"
                    name="category"
                    value={
                        selectedBook.category
                    }
                    onChange={
                        handleChange
                    }
                    />

                    <button
                    type="submit"
                    >

                        Save Changes

                    </button>

                </form>

                )}
            </div>

        </div>
    );
}

export default UpdateBook;