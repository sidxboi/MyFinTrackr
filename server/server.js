import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser'; // ✅ NEW

// ESM workaround
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Load environment variables
dotenv.config();
console.log('Loaded MONGODB_URI:', process.env.MONGODB_URI);

// Import after dotenv loads
import { dbConnect } from './config/db.js';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import transactionRoutes from './routes/transactions.js';
import budgetRoutes from './routes/budgets.js';
import recurringRoutes from './routes/recurring.js';

await dbConnect();

const app = express();

// ✅ Middleware setup
app.use(cors({
    origin: 'http://localhost:5173', // change if needed
    credentials: true
}));
app.use(cookieParser()); // ✅ Needed for JWT cookie auth
app.use(express.json());

// ✅ Routes
app.use('/api/auth', authRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/budgets', budgetRoutes);
app.use('/api/recurring', recurringRoutes);

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🌐 Server running at http://localhost:${PORT}`));
