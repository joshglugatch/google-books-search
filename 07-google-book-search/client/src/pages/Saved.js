import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import APIbooks from "../utils/booksAPI";
import SavedBooks from "../components/SavedBooks";

// Saved page displaying the books that are in the database
function Saved() {
    const [books, setBooks] = useState([]);

    // delete books by id
    const deleteBooks = (id) => {
        // console.log(books);
        // console.log("working");
        // console.log(id);
        APIbooks.deleteBook(id)
            .then((res) => {
                // console.log(res);
                // then update books
                APIbooks.getApiBooks()
                    .then(response => {
                        // console.log("delete grab response: ", response);
                        setBooks(response.data)
                    })
            })

    };

    // grabbing the books from the database on initial render
    useEffect(() => {
        APIbooks.getApiBooks()
            .then(res => setBooks(res.data))
        // console.log(books)
    }, []);

    // re-render page when books is updated
    useEffect(() => {
    }, [books]);

    return (
        <div className="mb-5">
            <React.Fragment>
                <Navbar />
                <Jumbotron />
                <SavedBooks
                    books={books}
                    deleteBooks={deleteBooks} />
            </React.Fragment>
        </div>
    );
};

export default Saved;