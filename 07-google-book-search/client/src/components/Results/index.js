import React from "react";
import "./style.css";

// Results components for the search results of the user
function Results(props) {

  const books = props.data
  // console.log("books search: ", books);

  return (
    <>
    {/* mapping through each book data and then displaying the info from the API and if there are no results, display the mo matching results container */}
      {books !== undefined ? (
        books.map((book, i) => {
          // console.log(book.volumeInfo.authors.length)

          return (
            <div key={book.id + i} className="container">
              <div className="card result">
                <div className="row mb-4 mt-3">
                  <div className="col-lg-4 bookImg">
                    {/* if there are no images of the books, set a defauly logo */}
                    {book.volumeInfo.imageLinks ? (
                      <img
                        className="img-fluid"
                        src={book.volumeInfo.imageLinks.thumbnail}
                        alt={book.volumeInfo.title}
                      />
                    ) : (
                      <img
                        src="./googlebookslogo.png"
                        alt="title"
                        className="img-fluid logo2"
                      />
                    )}
                  </div>
                  <div className="col-lg-8 mainContent">
                    <h2>{book.volumeInfo.title}</h2>
                    {/* if there are more than x number of authors, join with an "&" */}
                    <p>
                      {book.volumeInfo.authors !== undefined
                        ? book.volumeInfo.authors.join(" & ")
                        : book.volumeInfo.authors}
                    </p>
                    <p className="mr-4">{book.volumeInfo.description}</p>
                    <a
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                      href={book.volumeInfo.infoLink}
                    >
                      View
                    </a>
                    <button
                      className="ml-3 btn btn-primary"
                      onClick={() => {
                        props.saveBook(book);
                      }}
                    >
                      Save Book
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="container mb-5">
          <div className="card result">
            <h2 className="p-5">
              Sorry, we couldn't find any matching results.
            </h2>
          </div>
        </div>
      )}
      {/* modal start */}
      <div className={props.modalClass} id="contactModal" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body mt-2">
              <p>{props.text}</p>
              <svg
                width="2em"
                height="2em"
                viewBox="0 0 16 16"
                className="bi bi-archive"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </div>
            <div className="modal-footer">
              <button
                onClick={() => props.modalClose()}
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Results;
