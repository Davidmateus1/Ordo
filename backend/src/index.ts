import express, {Express, Request, Response} from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import {route as credentials} from '../routes/credentials';
import {route as notes} from '../routes/notes';
import dotenv from 'dotenv'

dotenv.config()
const port = process.env.PORT;


const app:Express = express();
app.use(cors())
app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use()

app.use(credentials)
app.use(notes)

// here will be the routes

app.listen(port, ()=>{
    console.log('Server is up and running 🔥')
})