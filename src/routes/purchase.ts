import express from 'express';

const router = express.Router();

router.get('/list', (req, res) => {
  return res.json('purchase List');
});

export default router;
