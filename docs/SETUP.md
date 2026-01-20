# Quick Setup Guide

## Step-by-Step Setup

### 1. Install Dependencies

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
cd ..
```

### 2. Set Up MongoDB

**Option A: Local MongoDB**
- Install MongoDB from https://www.mongodb.com/try/download/community
- Start MongoDB service:
  - Windows: MongoDB should start automatically
  - macOS: `brew services start mongodb-community`
  - Linux: `sudo systemctl start mongod`

**Option B: MongoDB Atlas (Cloud)**
- Create a free account at https://www.mongodb.com/cloud/atlas
- Create a cluster and get your connection string
- Use the connection string in your `.env` file

### 3. Configure Environment Variables

**Backend (.env in server/ directory):**
```bash
cd server
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret
```

**Frontend (.env in root directory):**
```bash
cp .env.example .env
# Edit .env if you need to change the API URL
```

### 4. Start the Application

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

### 5. Seed Initial Data (Optional)

Open your browser and visit:
```
http://localhost:5000/api/seed
```

This will populate the database with sample artists.

### 6. Access the Application

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## Troubleshooting

### MongoDB Connection Issues
- Make sure MongoDB is running
- Check your connection string in `.env`
- For Atlas, ensure your IP is whitelisted

### Port Already in Use
- Change the PORT in `server/.env` for backend
- Change the port in `vite.config.ts` for frontend

### Module Not Found Errors
- Run `npm install` in both root and server directories
- Make sure you're using Node.js v18 or higher

## Next Steps

- Create an account as a creator or client
- Browse featured artists
- Contact artists through the contact form
- Explore the API endpoints using Postman or similar tools

