import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import myAppRoute from "./routes/myApp.route.js"
import { appError } from "./middleware/errorHendler.js";


const app = express()
const port = process.env.PORT || 3003

app.use(cors({}))
app.use(express.json())

app.use("/my-app", myAppRoute)


app.use((err, req, res, next) => {
    if (err.statusCode){
        console.log(err)
        res.status(err.statusCode).send(err.message);
    }else{
        res.status(500).send("somthing wrong");
    }
});



app.listen(port, ()=>{
    console.log(`server running in http://localhost:${port}`)
})
