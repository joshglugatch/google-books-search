import React from "react";

function Results(props) {
  const books = props.data
  return (

    books.map(book=>{
      return(

<div className="card">
        <div className="row">
        <div className="col-lg-4">
            <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="title"/>
        </div>
        <div className="col-lg-8">
          <h2>{book.volumeInfo.title}</h2>
          <p>{book.volumeInfo.authors[0]}</p>
          <p>{book.volumeInfo.description}</p>
          <a href={book.volumeInfo.infolink}>View</a>
          <button onClick={props.saveBook} value={book.id}>SAVE</button>
        </div>
        </div>
    </div>

      )
    })
    
  );
};

export default Results;