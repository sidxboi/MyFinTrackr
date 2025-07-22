import express from 'express';
import Budget from '../models/Budget.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/', verifyToken, async (req, res) => {
  const data = await Budget.find({ user: req.user.id });
  res.json(data);
});

router.post('/', verifyToken, async (req, res) => {
  const budget = await Budget.create({ ...req.body, user: req.user.id });
  res.status(201).json(budget);
});

export default router;
