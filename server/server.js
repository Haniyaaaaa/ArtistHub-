import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import authRoutes from './routes/auth.js';
import artistRoutes from './routes/artists.js';
import contactRoutes from './routes/contact.js';
import Artist from './models/Artist.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to database
connectDB();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/artists', artistRoutes);
app.use('/api/contact', contactRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Server is running' });
});

// Seed initial data if database is empty
app.get('/api/seed', async (req, res) => {
  try {
    const count = await Artist.countDocuments();
    if (count === 0) {
      const initialArtists = [
        {
          slug: 'aurora-lee',
          name: 'Aurora Lee',
          role: 'Concept Illustrator',
          bio: 'Aurora blends neon palettes with ethereal forms, crafting dreamlike cityscapes and characters.',
          heroImage: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1200&auto=format&fit=crop',
          gallery: [
            'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop',
          ],
          featured: true,
        },
        {
          slug: 'kai-nakamura',
          name: 'Kai Nakamura',
          role: 'Architectural Visualizer',
          bio: 'Kai renders minimalist structures bathed in soft light, exploring balance and silence.',
          heroImage: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop',
          gallery: [
            'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop',
          ],
          featured: true,
        },
        {
          slug: 'mira-sol',
          name: 'Mira Sol',
          role: 'Fashion Designer',
          bio: 'Mira stitches stories into fabric—fluid silhouettes, bold textures, and luminous accents.',
          heroImage: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1200&auto=format&fit=crop',
          gallery: [
            'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1542060748-10c28b62716b?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1495121605193-b116b5b09a0d?q=80&w=1200&auto=format&fit=crop',
          ],
          featured: true,
        },
      ];

      await Artist.insertMany(initialArtists);
      res.json({ success: true, message: 'Database seeded with initial artists' });
    } else {
      res.json({ success: true, message: 'Database already has data' });
    }
  } catch (error) {
    console.error('Seed error:', error);
    res.status(500).json({ success: false, message: 'Error seeding database', error: error.message });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Something went wrong!', error: err.message });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

