import React from "react";

function BookCard({ book }) {

    return (

        <div className="col-md-4 mb-4">

            <div className="card shadow">

                <img
                    src={book.image}
                    className="card-img-top"
                    alt={book.title}
                    height="300"
                />

                <div className="card-body">

                    <h5>{book.title}</h5>

                    <p>{book.author}</p>

                    <p>{book.category}</p>

                    <button
                        className="btn btn-primary"
                    >

                        Borrow

                    </button>

                </div>

            </div>

        </div>
    );
}

export default BookCard;