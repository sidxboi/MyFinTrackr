import express from 'express';
import Recurring from '../models/Recurring.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/', verifyToken, async (req, res) => {
  const data = await Recurring.find({ user: req.user.id });
  res.json(data);
});

router.post('/', verifyToken, async (req, res) => {
  const entry = await Recurring.create({ ...req.body, user: req.user.id });
  res.status(201).json(entry);
});

export default router;
