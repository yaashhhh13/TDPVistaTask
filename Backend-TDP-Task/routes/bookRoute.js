const express = require("express");
const { CreateBook, getAllBooks, GetBookById, UpdatebookDetails, DeleteBook } = require("../controller/bookRouteController");
const router = express.Router()

router.post("/publishBook", CreateBook)
router.get("/GetAllBooks", getAllBooks)
router.get("/book-Dets/:id", GetBookById)
router.put("/UpdateBookdetails", UpdatebookDetails)
router.delete("/DeleteBook/:id", DeleteBook)

module.exports = router