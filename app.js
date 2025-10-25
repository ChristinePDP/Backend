import express from "express";

//create expres app
const app = express();

//middleware
app.use(express.json());

const port = 3000;

try{
    app.listen(port, () => {
        console.log('listening to port 3000...');
    });
}catch(e){
    console.log(e);
}

app.get('/tine', async (request, response) => {
    response.status(200).json({message: "Hello"});
});