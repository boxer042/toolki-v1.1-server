import express from 'express';
import { addAccount, listAccounts } from '../controller/account';

const router = express.Router();

router.post('/add', addAccount);
router.get('/list', listAccounts);

export default router;
