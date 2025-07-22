import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://sidhant:123456sidhant@cluster0.sbyulpg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

if (!MONGODB_URI) {
  throw new Error('❌ MONGODB_URI is undefined. Check .env file and dotenv config.');
}

export async function dbConnect() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1);
  }
}
