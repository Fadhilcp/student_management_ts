import express from 'express'
import dotenv from 'dotenv'
import path from 'path'

const app = express()

dotenv.config()


app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/')


app.listen()