import express from 'express';
import { body, validationResult } from 'express-validator';
import Artist from '../models/Artist.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// @route   GET /api/artists
// @desc    Get all artists
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { featured, role } = req.query;
    const query = {};
    
    if (featured === 'true') {
      query.featured = true;
    }
    
    if (role) {
      query.role = role;
    }

    const artists = await Artist.find(query).sort({ createdAt: -1 });
    res.json({ success: true, data: artists });
  } catch (error) {
    console.error('Get artists error:', error);
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
});

// @route   GET /api/artists/:slug
// @desc    Get single artist by slug
// @access  Public
router.get('/:slug', async (req, res) => {
  try {
    const artist = await Artist.findOne({ slug: req.params.slug });
    
    if (!artist) {
      return res.status(404).json({ success: false, message: 'Artist not found' });
    }

    res.json({ success: true, data: artist });
  } catch (error) {
    console.error('Get artist error:', error);
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
});

// @route   POST /api/artists
// @desc    Create new artist
// @access  Private
router.post('/', [
  protect,
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('role').trim().notEmpty().withMessage('Role is required'),
  body('bio').trim().notEmpty().withMessage('Bio is required'),
  body('heroImage').notEmpty().withMessage('Hero image is required'),
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { name, role, bio, heroImage, gallery, featured } = req.body;

    // Generate slug from name
    const slug = name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    // Check if slug already exists
    const existingArtist = await Artist.findOne({ slug });
    if (existingArtist) {
      return res.status(400).json({ success: false, message: 'Artist with this name already exists' });
    }

    const artist = await Artist.create({
      slug,
      name,
      role,
      bio,
      heroImage,
      gallery: gallery || [],
      featured: featured || false,
      userId: req.user._id,
    });

    res.status(201).json({ success: true, data: artist });
  } catch (error) {
    console.error('Create artist error:', error);
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
});

// @route   PUT /api/artists/:slug
// @desc    Update artist
// @access  Private
router.put('/:slug', protect, async (req, res) => {
  try {
    const artist = await Artist.findOne({ slug: req.params.slug });

    if (!artist) {
      return res.status(404).json({ success: false, message: 'Artist not found' });
    }

    // Check if user owns the artist or is admin
    if (artist.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ success: false, message: 'Not authorized to update this artist' });
    }

    const { name, role, bio, heroImage, gallery, featured } = req.body;

    if (name) artist.name = name;
    if (role) artist.role = role;
    if (bio) artist.bio = bio;
    if (heroImage) artist.heroImage = heroImage;
    if (gallery) artist.gallery = gallery;
    if (featured !== undefined) artist.featured = featured;

    await artist.save();

    res.json({ success: true, data: artist });
  } catch (error) {
    console.error('Update artist error:', error);
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
});

// @route   DELETE /api/artists/:slug
// @desc    Delete artist
// @access  Private
router.delete('/:slug', protect, async (req, res) => {
  try {
    const artist = await Artist.findOne({ slug: req.params.slug });

    if (!artist) {
      return res.status(404).json({ success: false, message: 'Artist not found' });
    }

    // Check if user owns the artist or is admin
    if (artist.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ success: false, message: 'Not authorized to delete this artist' });
    }

    await artist.deleteOne();

    res.json({ success: true, message: 'Artist deleted successfully' });
  } catch (error) {
    console.error('Delete artist error:', error);
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
});

export default router;

