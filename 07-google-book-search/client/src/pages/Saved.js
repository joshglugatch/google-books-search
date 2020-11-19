import React, {useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import APIbooks from "../utils/booksAPI";
import SavedBooks from "../components/SavedBooks";

// Saved page displaying the books that are in the database
function Saved() {
    const [books, setBooks] = useState([]);

    const deleteBooks = (id) => {
        // console.log(books);
        // console.log("working");
        // console.log(id);
        APIbooks.deleteBook(id)
        .then((res)=>{
           console.log(res);
        })
    };

    // grabbing the books from the database
    useEffect(() => {
        APIbooks.getApiBooks()
        .then(res=>setBooks(res.data))
        // console.log(books)
        }, [books]);

    return(
        <div className="mb-5">
        <React.Fragment>
            <Navbar />
            <Jumbotron />
            <SavedBooks 
                books={books} 
                deleteBooks={deleteBooks}/>
        </React.Fragment>
        </div>
    );
};

export default Saved;