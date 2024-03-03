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


module.exports = { CreateBook }