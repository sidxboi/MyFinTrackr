import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  category: String,
  type: { type: String, enum: ['Income', 'Expense'] },
  date: Date,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

export default mongoose.model('Transaction', transactionSchema);
