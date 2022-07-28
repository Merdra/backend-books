let books = [
    {   id: 1, 
        Title: 'Minions: The Rise of Gru', 
        Author: "Steve Carell", 
        Description:"Gru, a supporter of a supervillain supergroup known as the Vicious 6, concocts a scheme to corrupt himself to the point where he may join the gang."
    },
    {   id: 2, 
        Title: 'Black Panther, Wakanda Forever', 
        Author:"Stan Lee",
        Description:"A sequel that will continue to explore the world of Wakanda and all the characters introduced in the 2018 film."
    },
    {   id: 3, 
        Title: 'Black Adam', 
        Author: "Adam Sztykiel", 
        Description:"Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods and imprisoned just as quickly, Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world."
    },
]

const getbooks = (request, response) => {
    response.send(books);
};

const addbooks = (request, response) => {
    let newBook = request.body;
    books.push(newBook);
    response.send(books);
};

const updatebooks = (request, response) => {
    let newBookInfo = request.body
    let bookId = request.query.id;
    
    const updatedbooksArray = books.map((book) => {
      if (book.id == bookId) return newBookInfo; 
      else return book
    })

    books= updatedbooksArray
    response.send(books)
};

const deletebooks = (request, response) => {
    let bookId = request.query.id;

   const filteredbooks = books.filter((book) => {
      if (book.id != bookId) return book
    })

    books = filteredbooks
    response.send(books)
};

module.exports = {getbooks, addbooks,updatebooks,deletebooks}