import express from "express";
import 'dotenv/config.js';
import bookRoutes from "./routers/bookRoutes.js";
import studentRoutes from "./routers/StudentRoutes.js";

//create expres app
const app = express();

//middleware
app.use(express.json());



const port = 3000;



try{
    app.listen(process.env.PORT || 3000, () => {
        console.log(`listening to port ${process.env.PORT || port}...`);
    });
}catch(e){
    console.log(e);
}


app.use('/book', bookRoutes);
app.use('/student', studentRoutes);

