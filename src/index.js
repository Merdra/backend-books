const express = require("express");
const {getbooks, addbooks, updatebooks, deletebooks} = require("./controllers/booksController");

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/books", getbooks);

server.post("/books", addbooks);

server.put("/books", updatebooks);

server.delete("/books", deletebooks);

server.listen(3000, () => {
    console.log("server is running on port 3000");
});