const bookModel = require("../model/book.js")


const CreateBook = async (req, res) => {
    try {
        console.log("starting backend book publishing process")

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

        // console.log(req.body)

        const book = await bookModel.findById({_id: req.body.bookId});

        title= req.body.title || title,
        author= req.body.author || author,
        genre= req.body.genre || genre,
        Description= req.body.Description || Description,
        publicationDate= req.body.publicationDate || publicationDate

        await book.save();

        if (!book) {
            return res.status(200).send({
                message: "book not found",
                success: false
            })
        }


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


module.exports = { CreateBook, getAllBooks, GetBookById, UpdatebookDetails }