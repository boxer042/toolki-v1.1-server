import express from 'express';
import { addSupplier, listSuppliers } from './../controller/supplier';

const router = express.Router();

router.post('/add', addSupplier);
router.get('/list', listSuppliers);

export default router;
