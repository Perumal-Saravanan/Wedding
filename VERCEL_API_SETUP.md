# Vercel API Setup - Complete ✅

## What Was Done

### 1. Created Vercel Serverless Function
- **Location**: `api/wishes.js`
- **Purpose**: Handle POST and GET requests for wedding wishes
- **Features**:
  - Saves wishes to CSV file in `/tmp/wishes.csv`
  - CORS enabled for all origins
  - Handles both POST (save wish) and GET (retrieve wishes)
  - Indian timezone (Asia/Kolkata) for timestamps

### 2. Updated Frontend
- **File**: `src/components/RSVP.jsx`
- **Change**: API endpoint from `http://localhost:3001/api/wishes` → `/api/wishes`
- **Benefit**: Works automatically on Vercel (uses relative path)

### 3. Updated Vercel Config
- **File**: `vercel.json`
- **Added**: API routing to handle `/api/*` requests separately from SPA routing

## How It Works on Vercel

1. **Visitor submits wish** → Frontend calls `/api/wishes`
2. **Vercel routes** → Executes `api/wishes.js` serverless function
3. **Function saves** → Writes to `/tmp/wishes.csv` (temporary storage)
4. **Response sent** → Success message + heart confetti animation

## Important Notes

### ⚠️ Temporary Storage
- Vercel serverless functions use `/tmp/` storage
- **Files persist for ~5-10 minutes** after last function execution
- For permanent storage, upgrade to:
  - **Vercel Postgres** (database)
  - **Vercel Blob** (file storage)
  - **External service** (Airtable, Google Sheets, etc.)

### 📥 Downloading Wishes
Visit this URL to download all wishes as CSV:
```
https://your-vercel-domain.vercel.app/api/wishes
```

### 🚀 Deployment Steps
1. Commit and push to GitHub
2. Deploy on Vercel
3. API works automatically - no extra configuration needed!

## Testing Locally

To test the API locally before deploying:

```bash
# Install Vercel CLI
npm i -g vercel

# Run local development with serverless functions
vercel dev
```

Then visit: `http://localhost:3000`

## File Structure
```
C:\Peru\Wedding\
├── api/
│   └── wishes.js          ← Serverless function (handles /api/wishes)
├── src/
│   └── components/
│       └── RSVP.jsx       ← Frontend (calls /api/wishes)
└── vercel.json            ← Routing config
```

---

✅ **Ready to deploy with full API support on Vercel!**
