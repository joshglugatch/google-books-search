import axios from 'axios';

export default {
    getBooks: function(book) {
        return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + book)
    },
    getApiBooks: function(){
        return axios.get("/api/books");
    },
    addBook: function(data){
        return axios.post("/api/books", data);
    },
    deleteBook: function(id){
        return axios.delete("/api/books/" + id);
    },
    findBook: function(id){
        return axios.get("/api/search");
    }

}


// .then(function(response){
//     console.log("response", response);
//     return response;
// }, function(err) {
//     console.log(err)
// })