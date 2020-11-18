import React, {useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import APIbooks from "../utils/booksAPI";
import SavedBooks from "../components/SavedBooks";

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
    }

    useEffect(() => {
        APIbooks.getApiBooks()
        .then(res=>setBooks(res.data))
        // console.log(books)
        }, [books])

    return(
        <React.Fragment>
            <Navbar />
            <Jumbotron />
            <SavedBooks books={books} deleteBooks={deleteBooks}/>
            {/* {books.map((book)=>{
           return <div key={book._id} className="container">
           <div className="row">
               <div className="col-sm-4"></div>               
               <div className="col-sm-3">{book.title + " "}</div>
           <a onClick={() => deleteBooks(book._id)} className="col-sm-1">X</a>
           </div>
           </div>;
        })}
        <div className="padding"></div> */}
        </React.Fragment>
    )
}

export default Saved;