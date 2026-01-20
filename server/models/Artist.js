import mongoose from 'mongoose';

const artistSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  name: {
    type: String,
    required: [true, 'Please provide artist name'],
    trim: true,
  },
  role: {
    type: String,
    required: [true, 'Please provide role'],
    trim: true,
  },
  bio: {
    type: String,
    required: [true, 'Please provide bio'],
    trim: true,
  },
  heroImage: {
    type: String,
    required: [true, 'Please provide hero image'],
  },
  gallery: [{
    type: String,
  }],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  featured: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

artistSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.model('Artist', artistSchema);

