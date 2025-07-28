import express from 'express';
import dotenv from 'dotenv';
import articleRoutes from "./routes/article.js";
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.js'
import bodyParser from 'body-parser';

dotenv.config({
    path:"./data/config.env"
})
export const app = express();   

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/articles', articleRoutes);

