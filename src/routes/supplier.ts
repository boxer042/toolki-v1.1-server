import express from 'express';

const router = express.Router();

router.get('/list', (req, res) => {
  return res.json('supplier List');
});

export default router;
