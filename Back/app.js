// ======= Package === \\
import express from "express"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import env from "dotenv"
import connectDB from "./db/connection.js"
import todoRoutes from './routes/todo.js'

env.config()

const app = express()
const port = process.env.PORT_APP

app.use(cookieParser());
app.use(bodyParser.json());

connectDB()

app.use("/api/todos", todoRoutes);

app.listen(port, () =>{
    console.log(`server is running on port: ${port}`)
})



export default app;