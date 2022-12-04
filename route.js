import express from 'express'
import { getUser,getRepos, getRepo, getReadMe } from './controllers.js';

const router = express.Router();

router.get('/user/:user',getUser);
router.get('/repository/:query',getRepos);
router.get('/repository/:user/:repos',getRepo)
router.get('readme/:user/:repo/:branch',getReadMe)
export default router