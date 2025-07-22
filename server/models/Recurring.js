import mongoose from 'mongoose';

const recurringSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  category: String,
  frequency: { type: String, enum: ['Weekly', 'Monthly'] },
  startDate: Date,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

export default mongoose.model('Recurring', recurringSchema);
