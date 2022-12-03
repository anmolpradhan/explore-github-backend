import express from 'express'
import { getUser,getRepos, getRepo } from './controllers.js';

const router = express.Router();

router.get('/repositories/:query',getRepos);
router.get('/repository/:user/:repos',getRepo)
export default router