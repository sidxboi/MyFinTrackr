import express from 'express';
import Transaction from '../models/Transaction.js';
import auth from '../middleware/auth.js';
const router = express.Router();

router.get('/', auth, async (req, res) => {
  const total = await Transaction.aggregate([
    { $match: { user: req.user.id } },
    { $group: { _id: '$type', sum: { $sum: '$amount' } } }
  ]);
  res.json(total);
});

export default router;
