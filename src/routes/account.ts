import express from 'express';
import {
  addAccount,
  favoritesAccount,
  getAccount,
  listAccounts,
} from '../controller/account';
import { deleteAccount } from './../controller/account';

const router = express.Router();

router.post('/add', addAccount);
router.get('/list', listAccounts);
router.post('/delete', deleteAccount);
router.post('/favorites', favoritesAccount);
router.get('/detail/:id', getAccount);

export default router;
