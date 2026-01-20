# ArtistsHub Backend Server

Express.js backend server with MongoDB for the ArtistsHub platform.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

3. Configure your `.env` file with:
   - MongoDB connection string
   - JWT secret
   - Other environment variables

4. Start MongoDB (if using local installation)

5. Run the server:
```bash
npm run dev    # Development mode with auto-reload
npm start      # Production mode
```

## Seed Database

Visit `http://localhost:5000/api/seed` to populate the database with initial artist data.

## API Documentation

See the main README.md for API endpoint documentation.

