const booksDatabase = [];

const getBooks = ( req, res ) =>{
    const { id, title, author, publisheAt } = req.body;
    const book = { id, title, author, publisheAt }

    booksDatabase.push(book);
    return res.status(201).json(book)
};

const booklisting = ( req, res) =>{
    const allbooks = booksDatabase;
    return res.status(200).json(allbooks);
}
const specificbook = (req , res) => {
    const { book_id } = req.params;
    const book = booksDatabase.find(book => book.id === book_id)
    if (!book) res.status(404).json("not found")
    res.status(200).json(book)
}

const delet = (req, res) =>{
    const { book_id } = req.params;
    const filterbook = booksDatabase.find( book => book.id !== book_id);
    booksDatabase.splice(filterbook, 1);
    return res.status(204).json('deleted');
}





module.exports = {
    getBooks,
    booklisting,
    specificbook,
    delet
}