import express from 'express';
import {
  addAccount,
  favoritesAccount,
  listAccounts,
} from '../controller/account';
import { deleteAccount } from './../controller/account';

const router = express.Router();

router.post('/add', addAccount);
router.get('/list', listAccounts);
router.post('/delete', deleteAccount);
router.post('/favorites', favoritesAccount);

export default router;
