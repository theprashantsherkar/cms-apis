import express from 'express';
import {isAuthenticated} from '../utils/isAuthenticated.js'
import { createArticle, getAllArticles, updateArticle } from '../controllers/article.js';


const router = express.Router();

router.get('/all-articles', getAllArticles);
router.put('/:id', isAuthenticated, updateArticle);
router.post("/articles",isAuthenticated, createArticle);


export default router;