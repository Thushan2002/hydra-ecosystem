# Hydra Ecosystem

A modern full-stack web application showcasing innovative agricultural technology solutions, featuring AI-powered farming, IoT integration, drone technology, and sustainable farming practices.

## Features

- **Modern React Frontend**: Built with Vite, React 19, and Framer Motion for smooth animations
- **RESTful API**: Express.js backend with MongoDB for data persistence
- **Contact Form**: Fully functional contact form with message storage
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Interactive Maps**: Leaflet integration for location visualization
- **Production Ready**: Optimized for Vercel deployment with serverless functions

## Tech Stack

### Frontend

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client
- **Leaflet** - Interactive maps

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security middleware

### Deployment

- **Vercel** - Hosting platform (Frontend + Serverless Functions)

## Folder Structure

```
hydra-ecosystem/
├── client/                 # React frontend application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── api/           # API client configuration
│   │   ├── assets/        # Images and static files
│   │   ├── components/    # Reusable React components
│   │   │   ├── animations/  # Animation components
│   │   │   ├── layout/      # Layout components (Navbar, Footer)
│   │   │   └── ui/          # UI components (Button, Spinner)
│   │   ├── pages/         # Page components
│   │   ├── App.jsx        # Main app component
│   │   └── main.jsx       # Entry point
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── server/                 # Express.js backend API
│   ├── config/            # Configuration files
│   │   └── db.js          # MongoDB connection
│   ├── controllers/       # Route controllers
│   │   └── message.controller.js
│   ├── models/            # Mongoose models
│   │   └── message.model.js
│   ├── routes/            # API routes
│   │   └── message.route.js
│   ├── server.js          # Express app entry point
│   └── package.json
│
├── vercel.json            # Vercel configuration
├── package.json           # Root package.json (monorepo)
└── README.md             # This file
```

## Local Development Setup

### Prerequisites

- **Node.js** (v18 or higher)
- **MongoDB** (local instance or MongoDB Atlas account)
- **npm** or **yarn**

### Step 1: Clone the Repository

```bash
git clone https://github.com/Thushan2002/hydra-ecosystem.git
cd hydra-ecosystem
```

### Step 2: Install Dependencies

Install dependencies for both client and server:

```bash
# Install root dependencies (if any)
npm install

# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

### Step 3: Environment Variables

#### Server Environment Variables

Create a `.env` file in the `server/` directory:

```bash
cd server
touch .env
```

Add the following variables (see `server/.env.example` for reference):

```env
MONGO_URI=mongodb://localhost:27017/hydraDB
# OR for MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/hydraDB?retryWrites=true&w=majority

PORT=5000
NODE_ENV=development
```

#### Client Environment Variables

Create a `.env` file in the `client/` directory:

```bash
cd client
touch .env
```

Add the following variables (see `client/.env.example` for reference):

```env
VITE_API_URL=http://localhost:5000
```

### Step 4: Start MongoDB

Make sure MongoDB is running locally:

```bash
# If using local MongoDB
mongod

# Or use MongoDB Atlas cloud database
```

### Step 5: Run the Development Servers

#### Terminal 1 - Start the Backend Server

```bash
cd server
npm run dev
```

The server will run on `http://localhost:5000`

#### Terminal 2 - Start the Frontend Client

```bash
cd client
npm run dev
```

The client will run on `http://localhost:5173` (or another port if 5173 is busy)

### Step 6: Access the Application

Open your browser and navigate to:

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000

## 🌐 Environment Variables

### Server (.env)

| Variable    | Description               | Example                             |
| ----------- | ------------------------- | ----------------------------------- |
| `MONGO_URI` | MongoDB connection string | `mongodb://localhost:27017/hydraDB` |
| `PORT`      | Server port (optional)    | `5000`                              |
| `NODE_ENV`  | Environment mode          | `development` or `production`       |

### Client (.env)

| Variable       | Description          | Example                                                  |
| -------------- | -------------------- | -------------------------------------------------------- |
| `VITE_API_URL` | Backend API base URL | `http://localhost:5000` or `https://your-api.vercel.app` |

## Deployment to Vercel

### Prerequisites

- Vercel account
- MongoDB Atlas account (recommended for production)
- Git repository

### Step 1: Prepare Environment Variables

1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add the following variables:

   **For Server (API Routes):**

   - `MONGO_URI`: Your MongoDB Atlas connection string
   - `NODE_ENV`: `production`

   **For Client (Build-time):**

   - `VITE_API_URL`: Your Vercel API URL (e.g., `https://your-project.vercel.app`)

### Step 2: Configure Vercel Project

1. **Root Directory**: Leave blank (Vercel will detect the monorepo structure)
2. **Build Command**: Vercel will auto-detect from `package.json`
3. **Output Directory**:
   - For client: `client/dist`
   - For server: Auto-detected as serverless functions

### Step 3: Deploy

#### Option A: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production
vercel --prod
```

#### Option B: Deploy via GitHub Integration

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect the monorepo structure
4. Configure environment variables in Vercel dashboard
5. Deploy

### Step 4: Verify Deployment

- **Frontend**: `https://your-project.vercel.app`
- **API Routes**: `https://your-project.vercel.app/api/message/send`

### Vercel Configuration

The `vercel.json` file is configured to:

- Route all `/api/*` requests to serverless functions in `server/`
- Serve the React app for all other routes (SPA routing)
- Handle client-side routing without 404 errors

## API Endpoints

### Contact Form

**POST** `/api/message/send`

Send a contact form message.

**Request Body:**

```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'm interested in your services."
}
```

**Success Response (201):**

```json
{
  "success": true,
  "message": "Message sent successfully!",
  "data": {
    "_id": "...",
    "fullName": "John Doe",
    "email": "john@example.com",
    "message": "Hello, I'm interested in your services.",
    "createdAt": "2025-01-XX...",
    "updatedAt": "2025-01-XX..."
  }
}
```

**Error Response (400/500):**

```json
{
  "success": false,
  "message": "Error message here"
}
```

## Troubleshooting

### MongoDB Connection Issues

- **Problem**: "MongoDB Connection Error" in production
- **Solution**:
  - Verify `MONGO_URI` is set correctly in Vercel environment variables
  - Ensure MongoDB Atlas IP whitelist includes `0.0.0.0/0` (or Vercel IPs)
  - Check connection string format

### CORS Errors

- **Problem**: CORS errors when calling API from frontend
- **Solution**:
  - Verify `VITE_API_URL` matches your production API URL
  - Check server CORS configuration in `server/server.js`

### 404 Errors on Refresh

- **Problem**: Getting 404 when refreshing routes like `/about` or `/contact`
- **Solution**:
  - Verify `vercel.json` has proper rewrites configuration
  - Ensure all routes are handled by the React app

### Build Failures

- **Problem**: Build fails on Vercel
- **Solution**:
  - Check Node.js version compatibility
  - Verify all dependencies are in `package.json`
  - Check build logs in Vercel dashboard

## License

This project is proprietary software. All rights reserved.

## Contact

For questions or support, please contact:

- **Email**: info@hydra-agri.com
- **Website**: https://hydra-ecosystem.vercel.app

---

**Built by Thushanthan**
