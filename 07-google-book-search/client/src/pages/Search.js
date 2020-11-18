import React, {useState} from "react";
import Navbar from "../components/Navbar"
import SearchBar from "../components/SearchBar"
import Results from "../components/Results"
import APIbooks from '../utils/booksAPI'
import Jumbotron from "../components/Jumbotron";
import "./style.css";


function Search() {
    
    const [searchState, setSearchState]= useState("");
    const [books, setBooks] = useState([]);
   const [loading, setLoading] = useState(true);

        

    // useEffect(()=>{

    // },[books])

    
    


    const handleSearchChange = (e) => {
        const { value } = e.target
        setSearchState(value)
        console.log(searchState)
    };


    const searchBooks = () => {
        
        APIbooks.getBooks(searchState)
        .then((res) => {
            setLoading(false);
            setBooks(res.data.items)
            console.log(books)
        })
    }

    const saveBook = (event) => {
        let {value} = event.target;
        console.log(value);
        APIbooks.addBook(value);
    }
    
 

    return(
        <div>
        <Navbar/>
        <Jumbotron />
        
        <SearchBar 
        handleSearchChange={handleSearchChange}
        searchBooks={searchBooks}/>
        {books.map((book) => {
                
            <Results
            image={book.volumeInfo.imageLinks.smallThumbnail}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors[0]}
            link={book.volumeInfo.infolink}
            description={book.volumeInfo.description}
            saveBook={saveBook}
            id={book.id}
            />
        })}

        </div>
    )
}

export default Search;