import express from 'express'

import { connectDB } from './config/db.js'
import dotenv from 'dotenv'
import authRouter from './routes/authRoute.js'
import cors from 'cors'
const app = express()

app.use(cors({
    origin: 'http://localhost:5173',
}))
dotenv.config()

app.use(express.json())

const PORT = process.env.PORT

app.use('/api/v1/auth', authRouter)

connectDB()


app.listen(PORT, () => {

    console.log(`Server is running on http://localhost:${PORT}`)
})