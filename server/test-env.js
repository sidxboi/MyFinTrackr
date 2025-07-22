// server/test-env.js
import dotenv from 'dotenv';
dotenv.config();
console.log('✅ Test MONGODB_URI:', process.env.MONGODB_URI);
