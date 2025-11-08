import * as BookModel from '../models/bookModel.js';

export const fetchBooks = async (req, res) => {

    try {
        const books = await BookModel.getBooks(); //kinuha mula sa model
        res.status(200).json({success: true, message: books});
    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}