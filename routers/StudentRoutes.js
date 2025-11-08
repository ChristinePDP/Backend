import * as StudentController from '../controllers/StudentController.js';
import express from "express";

const studentRoutes = express.Router();

studentRoutes.get('/all', StudentController.fetchStudent);
/* bookRoutes.post('/add', BookController.createBook);
bookRoutes.put('/edit/') */


export default studentRoutes;