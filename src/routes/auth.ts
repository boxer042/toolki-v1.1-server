import express from 'express';

const router = express.Router();

router.post('/signin', (req, res) => {
  return res.json('hi');
});

export default router;
