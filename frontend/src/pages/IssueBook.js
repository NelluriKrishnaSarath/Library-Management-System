import "./IssueBook.css";
import React, {
    useState,
    useEffect
} from "react";

import axios from "axios";

import {
    useNavigate
} from "react-router-dom";

import "./IssueBook.css";

function IssueBook() {

    const navigate =
    useNavigate();

    const [students,
    setStudents] =
    useState([]);

    const [books,
    setBooks] =
    useState([]);

    const [form,
    setForm] =
    useState({

        student_name: "",

        book_title: "",

        borrow_date: ""
    });
   

    useEffect(() => {

        axios.get(

            "http://127.0.0.1:8000/api/transactions/students/"

        )

        .then((response) => {

            setStudents(
                response.data
            );

        })

        .catch((error) => {

            console.log(error);

        });

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

    }, []);

    const handleChange =
    (e) => {

        setForm({

            ...form,

            [e.target.name]:
            e.target.value
        });
    };

    const handleSubmit =
    async (e) => {

        e.preventDefault();

        try {

            const response =
            await axios.post(

                "http://127.0.0.1:8000/api/transactions/issue-book/",

                form
            );

            alert(

                response.data.message

            );

            setForm({

                student_name: "",

                book_title: "",

                borrow_date: ""
            });

        }

        catch (error) {

            alert(

                error.response?.data?.error ||

                "Failed To Issue Book"
            );
        }
    };

    return (

        <div className="issue-page">

            <div className="issue-card">

                <h1>

                    Issue Book

                </h1>

                <form
                onSubmit={handleSubmit}
                >

                    <label>

                        Student Username

                    </label>

                    <input

                        list="students"

                        type="text"

                        name="student_name"

                        placeholder="Type Student Username"

                        value={
                            form.student_name
                        }

                        onChange={
                            handleChange
                        }

                        required
                    />

                    <datalist
                    id="students"
                    >

                    {
                        students.map(
                        (student) => (

                        <option

                            key={
                                student.id
                            }

                            value={
                                student.username
                            }

                        />

                        ))
                    }

                    </datalist>

                    <label>

                        Book Name

                    </label>

                    <input

                        list="books"

                        type="text"

                        name="book_title"

                        placeholder="Type Book Name"

                        value={
                            form.book_title
                        }

                        onChange={
                            handleChange
                        }

                        required
                    />

                    <datalist
                    id="books"
                    >

                    {
                        books.map(
                        (book) => (

                        <option

                            key={
                                book.id
                            }

                            value={
                                book.title
                            }

                        />

                        ))
                    }

                    </datalist>

                    <label>

                        Borrow Date

                    </label>

                    <input

                        type="date"

                        name="borrow_date"

                        value={
                            form.borrow_date
                        }

                        onChange={
                            handleChange
                        }

                        required
                    />

                    <button

                        type="submit"

                        className="issue-btn"

                    >

                        Issue Book

                    </button>

                    <button

                        type="button"

                        className="back-btn"

                        onClick={() =>
                        navigate(
                        "/admin-dashboard"
                        )
                        }

                    >

                        Back To Dashboard

                    </button>

                </form>

            </div>

        </div>
    );
}

export default IssueBook;
