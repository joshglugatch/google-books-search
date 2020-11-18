import React from "react";
import "./style.css"

function Results(props) {
  const books = props.data
  return (

    books.map(book=>{
      return(

<div className="container">
<div className="card">
        <div className="row mb-4 mt-3">
        <div className="col-lg-4 bookImg">
            <img className="img-fluid" src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/>
        </div>
        <div className="col-lg-8">
          <h2>{book.volumeInfo.title}</h2>
          <p>{book.volumeInfo.authors[0]}</p>
          <p className="mr-4">{book.volumeInfo.description}</p>
          <a className="btn btn-primary" target="_blank" href={book.volumeInfo.infoLink}>View</a>
          <button className="ml-3 btn btn-primary" onClick={()=>{props.saveBook(book)}}>Save</button>
        </div>
        </div>
    </div>
    </div>
      )
    })
    
  );
};

export default Results;