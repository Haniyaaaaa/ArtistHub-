# ArtistsHub - Full Stack Creative Portfolio Platform

A modern full-stack web application for discovering and connecting with exceptional artists across illustration, architecture, and fashion design.

## 🚀 Quick Links

- **[Quick Deployment Guide](./docs/DEPLOY_QUICK.md)** - Get your site live in 15 minutes
- **[Full Deployment Guide](./docs/DEPLOYMENT.md)** - Comprehensive deployment options
- **[Expansion Guide](./docs/EXPANSION.md)** - Features and improvements to expand your platform
- **[Quick Start Guide](./docs/QUICK_START.md)** - Local development setup
- **[Project Structure](./docs/PROJECT_STRUCTURE.md)** - Detailed folder and file structure

## Features

- 🎨 **Artist Portfolios**: Browse featured artists with galleries and detailed profiles
- 👤 **User Authentication**: Sign up as a creator or client with role-based access
- 📧 **Contact System**: Reach out to artists directly through the contact form
- 🖼️ **Image Galleries**: Beautiful image carousels and galleries
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- 🔒 **Secure Backend**: JWT authentication and MongoDB database

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- React Context API for state management

### Backend
- Node.js with Express
- MongoDB with Mongoose
- JWT for authentication
- Express Validator for input validation

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn

## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd "artist web"
```

### 2. Install Frontend Dependencies

```bash
npm install
```

### 3. Install Backend Dependencies

```bash
cd server
npm install
cd ..
```

### 4. Set Up Environment Variables

Create a `.env` file in the `server` directory:

```bash
cd server
cp .env.example .env
```

Edit `server/.env` and configure:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/artistshub
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

For MongoDB Atlas (cloud), use:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/artistshub
```

Create a `.env` file in the root directory for frontend:

```bash
cp .env.example .env
```

Edit `.env`:
```env
VITE_API_URL=http://localhost:5000/api
```

## Running the Application

### Development Mode

1. **Start MongoDB** (if using local installation):
   ```bash
   # On macOS/Linux
   mongod

   # On Windows
   # MongoDB should start automatically if installed as a service
   ```

2. **Start the Backend Server**:
   ```bash
   npm run server
   # or
   cd server && npm run dev
   ```

3. **Start the Frontend Development Server**:
   ```bash
   npm run dev
   ```

4. **Seed Initial Data** (optional):
   Visit `http://localhost:5000/api/seed` in your browser to populate the database with sample artists.

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Artists
- `GET /api/artists` - Get all artists (query: `?featured=true&role=Graphic Designer`)
- `GET /api/artists/:slug` - Get artist by slug
- `POST /api/artists` - Create artist (protected)
- `PUT /api/artists/:slug` - Update artist (protected)
- `DELETE /api/artists/:slug` - Delete artist (protected)

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all messages (admin)

### Health Check
- `GET /api/health` - Server health check

## Project Structure

```
artist web/
├── src/                    # Source code
│   ├── context/           # React context providers
│   │   └── AuthContext.tsx
│   └── utils/             # Utility functions
│       └── api.ts         # API client
├── components/            # Reusable React components
│   ├── Navbar.tsx
│   └── Carousel.tsx
├── pages/                 # Page components (routes)
│   ├── Home.tsx
│   ├── Artists.tsx
│   ├── ArtistDetail.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Signup.tsx
│   ├── Gallery.tsx
│   ├── Services.tsx
│   ├── FAQ.tsx
│   └── Testimonials.tsx
├── data/                  # Static data files
│   └── artists.ts
├── server/                # Backend server
│   ├── config/           # Configuration
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   ├── middleware/       # Express middleware
│   └── server.js         # Server entry point
├── docs/                  # Documentation
│   ├── DEPLOYMENT.md
│   ├── DEPLOY_QUICK.md
│   └── PROJECT_STRUCTURE.md
├── logo/                  # Logo assets
├── archive/               # Archived/old code
├── App.tsx                # Main app component
├── main.tsx               # React entry point
├── index.html             # HTML template
└── package.json           # Dependencies
```

For detailed structure information, see [PROJECT_STRUCTURE.md](./docs/PROJECT_STRUCTURE.md).

## Building for Production

### Frontend
```bash
npm run build
```

The built files will be in the `dist` directory.

### Backend
```bash
cd server
npm start
```

## Environment Variables Reference

### Backend (.env in server/)
- `PORT` - Server port (default: 5000)
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `NODE_ENV` - Environment (development/production)
- `FRONTEND_URL` - Frontend URL for CORS

### Frontend (.env in root/)
- `VITE_API_URL` - Backend API URL

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License

## Support

For issues and questions, please open an issue on GitHub.

