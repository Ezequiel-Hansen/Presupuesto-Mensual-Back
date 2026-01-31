import express from "express"
import routes from "./routes/route.js"
import cors from "cors"

const app = express()
const port = 4000

app.use(cors({methods:["POST","GET","PATCH","DELETE"]}));
app.use(express.json())
app.use(routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})