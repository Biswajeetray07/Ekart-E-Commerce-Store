import 'dotenv/config'
import express from 'express'
import connectDB from './database/db.js'
import userRoute from './routes/userRoute.js'
const app = express()
const PORT = process.env.PORT || 3000

//middelware
app.use(express.json())

app.use('/api/v1/user', userRoute)

// http:localhost:8000/api/v1/user/register

app.listen(PORT, () => {
    connectDB()
    console.log(`Server is listening at: ${PORT}`);
})