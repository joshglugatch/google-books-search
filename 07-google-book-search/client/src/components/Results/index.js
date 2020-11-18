import React from "react";
import "./style.css"

function Results(props) {
  const books = props.data
  console.log("books search: ", books);


  return (
    <>
      {books !== undefined ? books.map(book => {
        // console.log(book.volumeInfo.authors.length)

        return (

          <div key={book.id} className="container">
            <div className="card result">
              <div className="row mb-4 mt-3">
                <div className="col-lg-4 bookImg">
                  {book.volumeInfo.imageLinks ? <img className="img-fluid" src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                  : <img src="https://via.placeholder.com/140x100" alt="title" className="img-fluid" />}
                </div>
                <div className="col-lg-8">
                  <h2>{book.volumeInfo.title}</h2>
                  <p>{book.volumeInfo.authors !== undefined ? book.volumeInfo.authors.join(" & ")
                  : book.volumeInfo.authors}</p>
                  <p className="mr-4">{book.volumeInfo.description}</p>
                  <a className="btn btn-primary" target="_blank" href={book.volumeInfo.infoLink}>View</a>
                  <button className="ml-3 btn btn-primary" onClick={() => { props.saveBook(book) }}>Save</button>
                </div>
              </div>
            </div>
          </div>
        )
      }) :
        <div className="container mb-5">
          <div className="card result">

            <h2 className="p-5" >Sorry, we couldn't find any matching results.</h2>


          </div>
        </div>}
    </>
  );
};

export default Results;