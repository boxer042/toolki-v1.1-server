import express from 'express';
import { addPurchase } from './../controller/purchase';

const router = express.Router();

router.post('/add', addPurchase);

export default router;
