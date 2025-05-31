import express from 'express'
import dotenv from 'dotenv'
import path from 'path'

import studentRoute from './routes/student.routes'
import connectDB from './config/db'


dotenv.config()

connectDB()

const app = express()
const port = process.env.PORT || 3000

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',studentRoute)


app.listen(port,() => {
    console.log(`server is running at http://localhost:${port}`)
})