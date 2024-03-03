const bookModel = require("../model/book.js")


const CreateBook = async (req, res) => {
    try {
        // console.log("starting backend book publishing process")

        const { title, author, genre, Description, publicationDate } = req.body;
        const newBook = new bookModel({
            title, author, genre, Description, publicationDate
        })

        const saveBook = newBook.save()

        res.status(200).send({
            message: "book published successfully",
            success: true,
            data: {
                book: saveBook
            }
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: "internal server error",
            success: true
        })
    }
}

const getAllBooks = async (req, res) => {
    try {

        const allbooks = await bookModel.find()

        res.status(200).send({
            message: "Food Successfully added",
            success: true,
            data: {
                book: allbooks
            }
        })


    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: "internal server error",
            success: true
        })
    }
}

const GetBookById = async (req, res) => {
    try {

        const { id } = req.params

        const bookDets = await bookModel.findById(id)

        res.status(200).send({
            message: "book details founded successfully",
            success: true,
            data: {
                book: bookDets
            }
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: "internal server error",
            success: true
        })
    }
}

const UpdatebookDetails = async (req, res) => {
    try {

        const { title, author, genre, Description, publicationDate } = req.body;

        const book = await bookModel.findById(req.body.bookID);

        if (!book) {
            return res.status(404).send({
                message: "Book not found",
                success: false
            });
        }

        // Update book details
        book.title = title || book.title;
        book.author = author || book.author;
        book.genre = genre || book.genre;
        book.Description = Description || book.Description;
        book.publicationDate = publicationDate || book.publicationDate;

        // Save the updated book
        await book.save();

        return res.status(201).send({
            message: "profile details updated succesfully",
            success: true
        })

    } catch (error) {
        console.log(error)

        return res.status(500).send({
            success: false,
            message: `Auth error`,
        })
    }
}

const DeleteBook = async (req, res) => {
    try {
        const bookId = req.params.id;
        // console.log(bookId)
        const deletedBook = await bookModel.findByIdAndDelete(bookId);

        if (!deletedBook) {
            return res.status(404).send({
                success: false,
                message: "Book not found",
            });
        }

        return res.status(200).send({
            success: true,
            message: "Book deleted successfully",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            success: false,
            message: "Internal server error",
        });
    }
};

module.exports = { CreateBook, getAllBooks, GetBookById, UpdatebookDetails, DeleteBook }