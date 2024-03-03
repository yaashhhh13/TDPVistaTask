const express = require("express");
const protect = require("../middleware/authMiddleware");
const { CreateBook, getAllBooks, GetBookById, UpdatebookDetails } = require("../controller/bookRouteController");
const router = express.Router()

router.post("/publishBook", CreateBook)
router.get("/GetAllBooks", getAllBooks)
router.get("/book-Dets/:id", GetBookById)
router.put("/UpdateBookdetails", UpdatebookDetails)

module.exports = router