import express from "express"

const app = express();
const port = 8000;

app.get('/api', (req,res) => {
    res.send("hello brother");
})

app.listen(port,() => 
{
    console.log(`server running on ${port}`);
})