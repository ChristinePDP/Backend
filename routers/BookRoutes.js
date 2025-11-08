import * as BookController from '../controllers/BookController.js';
import express from "express";

const bookRoutes = express.Router();

bookRoutes.get('/all', BookController.fetchBooks);
/* bookRoutes.post('/add', BookController.createBook);
bookRoutes.put('/edit/')
 */

export default bookRoutes;