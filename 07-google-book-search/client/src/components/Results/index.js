import React from "react";

function Results(props) {
  return (
    <div className="card">
        <div className="row">
        <div className="col">
            <img src={props.image} alt="title"/>
        </div>
        <div className="col">
          <h2>{props.title}</h2>
          <p>{props.author}</p>
          <p>{props.description}</p>
          <a href={props.link}>View</a>
          <button onClick={props.saveBook} value={props.id}>SAVE</button>
        </div>
        </div>
    </div>
  );
};

export default Results;