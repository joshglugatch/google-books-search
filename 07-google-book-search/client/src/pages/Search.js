import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar"
import SearchBar from "../components/SearchBar"
import Results from "../components/Results"
import APIbooks from '../utils/booksAPI'
import Jumbotron from "../components/Jumbotron";
import "./style.css";


function Search() {

    const [searchState, setSearchState] = useState("");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalClass, setModalClass] = useState("modal hideModal");
    const [text, setText] = useState("Saved!")

    useEffect(() => {
    }, [modalClass]);

    function modalClose() {
        setModalClass("modal hideModal");
    }


    const handleSearchChange = (e) => {
        const { value } = e.target
        setSearchState(value)
        console.log(searchState)
    };


    const searchBooks = async () => {

        let newBooks = await APIbooks.getBooks(searchState)
            .then((res) => {
                setLoading(false);
                return res.data.items;
                console.log(books)
            })
        console.log("newBooks: ", newBooks);
        setBooks(newBooks);
        setLoading(false);
    }

    const saveBook = (book) => {

        setModalClass("modal showModal");
        setText(book.volumeInfo.title + " was saved!");

        const data = {
            title: book.volumeInfo.title,
            author: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail,
            link: book.volumeInfo.infoLink
        }

        APIbooks.addBook(data).then(res => {
            console.log("saved", res)

        });
    }



    return (
        <div>
            <Navbar />
            <Jumbotron />

            <SearchBar
                handleSearchChange={handleSearchChange}
                searchBooks={searchBooks} />
            <Results
                data={books}
                saveBook={saveBook}
                modalClose={modalClose}
                text={text}
                modalClass={modalClass}
            />


        </div>
    )
}

export default Search;