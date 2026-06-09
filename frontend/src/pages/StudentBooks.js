import React,{
    useEffect,
    useState
} from "react";

import axios from "axios";

import "./StudentBooks.css";

function StudentBooks(){

    const [books,setBooks] =
    useState([]);

    useEffect(()=>{

        axios.get(

            "http://127.0.0.1:8000/api/books/"

        )

        .then((response)=>{

            setBooks(
                response.data
            );

        })

        .catch((error)=>{

            console.log(error);

        });

    },[]);

    return(

        <div className="student-books-page">

            <h1>
                📚 Library Books
            </h1>

            <div className="books-grid">

                {books.map((book)=>(

                    <div
                    className="book-card"
                    key={book.id}
                    >

                      <img
    src={
        book.image
        ? `http://127.0.0.1:8000${book.image}`
        : "https://cdn-icons-png.flaticon.com/512/2232/2232688.png"
    }
    alt={book.title}
    className="book-image"
/>

                        <h3>
                            {book.title}
                        </h3>

                        <p>
                            {book.author}
                        </p>

                        <p>
                            Category :
                            {book.category}
                        </p>

                        <p>
                            Available :
                            {book.available_copies}
                        </p>

                    </div>

                ))}

            </div>

        </div>

    );
}

export default StudentBooks;