import express from "express";
import cors from "cors";
import 'dotenv/config.js';
import bookRoutes from "./routers/bookRoutes.js";
import studentRoutes from "./routers/StudentRoutes.js";

//create expres app
const app = express();
//enable cors tofrontend
let corsOptions = {
    origin: process.env.ORIGIN
};

//middleware
app.use(express.json());
app.use(cors(corsOptions));

//this used to log the reqeust on the console
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

try{
    app.listen(process.env.PORT || 3000, () => {
        console.log(`listening to port ${process.env.PORT || port}...`);
    });
}catch(e){
    console.log(e);
}

app.use('/book', bookRoutes);
app.use('/student', studentRoutes);

