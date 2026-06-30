import 'dotenv/config'
import express from 'express'
import connectDB from './database/db.js'
const app = express()
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    connectDB()
    console.log(`Server is listening at: ${PORT}`);

})