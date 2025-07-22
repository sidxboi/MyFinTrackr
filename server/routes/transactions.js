import express from 'express';
import Transaction from '../models/Transaction.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/', verifyToken, async (req, res) => {
  const txns = await Transaction.find({ user: req.user.id }).sort({ date: -1 });
  res.json(txns);
});

router.post('/', verifyToken, async (req, res) => {
  const txn = await Transaction.create({ ...req.body, user: req.user.id });
  res.status(201).json(txn);
});

export default router;
