import express, { Express, Request, Response } from "express"
import 'dotenv/config'
import { conectDB } from "./utils/Db"
import userRouter from "./routes/userRoute"
const app: Express = express()
const port = process.env.PORT
app.use(express.json())



app.get('/', (req: Request, res: Response) => {
    res.send('Node.js and TypeScript: Build a CRUD API')
})



app.use('/api/user', userRouter)

conectDB()

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
