import express from 'express';
import { isAuthenticated } from '../utils/isAuthenticated.js';
import {
    loginAPI,
    changePasswordAPI,
    getUserAPI,
    logoutAPI,
    registerAPI
} from '../controllers/authControllers.js';


const router = express.Router();

router.post('/register', registerAPI)
router.post('/banker/login', loginAPI);
router.get('/logout', isAuthenticated, logoutAPI)
router.get('/user', isAuthenticated, getUserAPI)
router.put('/changePassword', isAuthenticated, changePasswordAPI);

export default router;