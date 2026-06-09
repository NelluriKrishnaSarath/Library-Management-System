import React, {
    useEffect,
    useState
} from "react";

import axios from "axios";

import "./ReturnBooks.css";

function ReturnBooks() {

    const username =
    localStorage.getItem("username");

    const [books, setBooks] =
    useState([]);

    useEffect(() => {

        loadBooks();

    }, []);

    const loadBooks = () => {

        axios.get(

            `http://127.0.0.1:8000/api/transactions/my-books/?username=${username}`

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

    const returnBook = async (borrowId) => {

        try {

            const response =
            await axios.post(

                "http://127.0.0.1:8000/api/transactions/return-book/",

                {

                    borrow_id:
                    borrowId

                }
            );

            alert(

                `${response.data.message}
                 Fine: ₹${response.data.fine}`

            );

            loadBooks();

        }

        catch(error){

            console.log(error);

        }
    };

    return (

        <div className="return-page">

            <h1>
                My Borrowed Books
            </h1>

            <table className="return-table">

                <thead>

                    <tr>

                        <th>
                            Book Name
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

                        <th>
                            Action
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {books.map((book) => (

                        <tr key={book.id}>

                            <td>
                                {book.book_name}
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

                            <td>

                                {book.status === "Borrowed" && (

                                    <button

                                    className="return-btn"

                                    onClick={() =>

                                    returnBook(
                                        book.id
                                    )

                                    }
                                    >

                                        Return

                                    </button>

                                )}

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default ReturnBooks;