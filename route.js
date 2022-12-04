import express from 'express'
import { getUser,getRepos, getRepo } from './controllers.js';

const router = express.Router();

router.get('/user/:user',getUser);
router.get('/repository/:query',getRepos);
router.get('/repository/:user/:repos',getRepo)
export default router