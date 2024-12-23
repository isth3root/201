// ======= Package === \\
import express from "express"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import env from "dotenv"

env.config()

const app = express()
const port = process.env.PORT_APP

app.use(cookieParser());
app.use(bodyParser.json());

app.listen(port, () =>{
    console.log(`server is running on port: ${port}`)
})

export default app;