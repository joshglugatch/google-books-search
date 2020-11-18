import React from "react";
import booksAPI from "../../utils/booksAPI";

function SavedBooks({books, deleteBooks}) {
    // console.log(books);
  return (

    <div className="card">
        <div className="row">
        {/* <img src="https://via.placeholder.com/140x100" alt="title"/> */}
        {books.map((book)=>{
           return <div key={book._id} className="container">
           <div className="row">
               <div className="col-sm-4"></div>               
               <h5 className="col-sm-3">{book.title + " "}</h5>
           <a onClick={() => deleteBooks(book._id)} className="col-sm-1">X</a>
           <button className="btn btn-primary">VIEW</button>
           </div>
           </div>;
        })}
        {/* <div className="padding"></div>
          <h2>{books.title}</h2>
          <p>{books.author}</p>
          <p>{books.description}</p>
          <a src={books.link}>View</a>
          <span className="remove">
        𝘅
      </span> */}
        </div>
    </div>
  );
};

export default SavedBooks;

