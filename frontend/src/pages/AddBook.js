import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddBook.css";

function AddBook() {

    const navigate = useNavigate();

    const [book, setBook] = useState({

        title: "",

        author: "",

        category: "",

        language: "",

        total_copies: ""
    });
    const [image, setImage] = useState(null);

    const handleChange = (e) => {

        setBook({

            ...book,

            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await axios.post(

                "http://127.0.0.1:8000/api/books/add/",

                {
                    title: book.title,
                    author: book.author,
                    category: book.category,
                    language: book.language,
                    total_copies: book.total_copies
                }
            );

            alert("Book Added Successfully");

            navigate("/admin-dashboard");

        } catch (error) {

            console.log(error);

            alert("Error Adding Book");
        }
    };

    return (

        <div className="add-book-page">

            <div className="add-book-card">

                <h1>Add New Book</h1>

                <form onSubmit={handleSubmit}>

                    <div className="form-group">

                        <label>Book Title</label>

                        <input
                            type="text"
                            name="title"
                            className="form-control"
                            placeholder="Enter Book Title"
                            value={book.title}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="form-group">

                        <label>Author</label>

                        <input
                            type="text"
                            name="author"
                            className="form-control"
                            placeholder="Enter Author Name"
                            value={book.author}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="form-group">

                        <label>Category</label>

                        <input
                            type="text"
                            name="category"
                            className="form-control"
                            placeholder="Category"
                            value={book.category}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="form-group">

                        <label>Language</label>

                        <input
                            type="text"
                            name="language"
                            className="form-control"
                            placeholder="language"
                            value={book.language}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="form-group">

                        <label>Total Copies</label>

                        <input
                            type="number"
                            name="total_copies"
                            className="form-control"
                            placeholder="Enter how many copies of the book are available"
                            value={book.total_copies}
                            onChange={handleChange}
                            required
                        />
                        <input
    type="file"
    accept="image/*"
    onChange={(e) =>
        setImage(
            e.target.files[0]
        )
    }
/>

                    </div>

                    <button
                        type="submit"
                        className="save-btn"
                    >
                        Save Book
                    </button>

                    <button
                        type="button"
                        className="back-btn"
                        onClick={() =>
                            navigate("/admin-dashboard")
                        }
                    >
                        Back To Dashboard
                    </button>

                </form>

            </div>

        </div>
    );
}

export default AddBook;