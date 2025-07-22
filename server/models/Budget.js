import mongoose from 'mongoose';

const budgetSchema = new mongoose.Schema({
  category: String,
  limit: Number,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

export default mongoose.model('Budget', budgetSchema);
