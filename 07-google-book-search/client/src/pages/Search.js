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
        var image;
        if(book.volumeInfo.imageLinks===undefined){
            image = "./googlebookslogo.png"
        } else {
            image = book.volumeInfo.imageLinks.thumbnail
        }

        const data = {
            title:book.volumeInfo.title,
            author:book.volumeInfo.authors,
            description:book.volumeInfo.description,
            image: image,
            link:book.volumeInfo.infoLink
        }
       
        APIbooks.addBook(data).then(res=>{
            console.log("saved",res)
            
        });
    }
    
 

    return(
        <div className="mb-5">
        <Navbar/>
        <Jumbotron />
        
        <SearchBar 
        handleSearchChange={handleSearchChange}
        searchBooks={searchBooks}/>    
        <Results
        data={books}
        saveBook={saveBook}
        />
          

        </div>
    )
}

export default Search;