import React from "react";
// import booksAPI from "../../utils/booksAPI";
import "./style.css";

function SavedBooks({books, deleteBooks}) {
 
  return (

    books.map(book => {
      return(
        <div className="container">
          <div className="card">
              <div className="row mb-4 mt-3">
                <div className="col-lg-4 bookImg">
                  <img src="https://via.placeholder.com/140x100" alt="title" className="img-fluid"/>
                  </div>
                  <div className="col-lg-8">
                    <h2>{book.title}</h2>
                    <p>{book.author}</p>
                    <p>{book.synopsis}</p>
                    <a onClick={() => deleteBooks(book._id)} className="col-sm-1 deleteBtn">X</a>
                    <button className="btn btn-primary">VIEW</button>
                  </div>
              </div>
            </div>
        </div>
      )
    })
  )
};

export default SavedBooks;

  {/* <div className="padding"></div>
          <h2>{books.title}</h2>
          <p>{books.author}</p>
          <p>{books.description}</p>
          <a src={books.link}>View</a>
          <span className="remove">
        𝘅
      </span> */}




       //   <div className="card">
  //       <div className="row">
        
  //       {books.map((book)=>{
  //          return <div key={book._id} className="container">
  //          <div className="row">
  //              <div className="col-sm-4"></div>               
  //              <h5 className="col-sm-3">{book.title + " "}</h5>
         
  //          </div>
  //          </div>;
  //       })}
      
  //       </div>
  //   </div>
  // );