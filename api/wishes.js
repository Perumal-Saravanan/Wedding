import fs from 'fs';
import path from 'path';

// Vercel serverless function for handling wishes
export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const WISHES_FILE = '/tmp/wishes.csv';

  // Initialize CSV file if it doesn't exist
  if (!fs.existsSync(WISHES_FILE)) {
    fs.writeFileSync(WISHES_FILE, 'DateTime,Name,Wishes\n', 'utf8');
  }

  // POST: Save a new wish
  if (req.method === 'POST') {
    try {
      const { name, message } = req.body;

      if (!message || message.trim() === '') {
        return res.status(400).json({ error: 'Message is required' });
      }

      const timestamp = new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });

      const wishName = name && name.trim() !== '' ? name.trim() : 'Anonymous';
      const cleanMessage = message.replace(/"/g, '""').trim();
      const csvRow = `"${timestamp}","${wishName}","${cleanMessage}"\n`;

      fs.appendFileSync(WISHES_FILE, csvRow, 'utf8');

      console.log(`New wish saved: ${wishName} at ${timestamp}`);

      return res.status(200).json({
        success: true,
        message: 'Wish saved successfully',
        data: { timestamp, name: wishName, message: cleanMessage }
      });
    } catch (error) {
      console.error('Error saving wish:', error);
      return res.status(500).json({ error: 'Failed to save wish' });
    }
  }

  // GET: Retrieve all wishes (admin)
  if (req.method === 'GET') {
    try {
      if (fs.existsSync(WISHES_FILE)) {
        const csvContent = fs.readFileSync(WISHES_FILE, 'utf8');
        res.setHeader('Content-Type', 'text/csv');
        return res.status(200).send(csvContent);
      } else {
        return res.status(404).json({ error: 'Wishes file not found' });
      }
    } catch (error) {
      console.error('Error reading wishes:', error);
      return res.status(500).json({ error: 'Failed to read wishes' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
