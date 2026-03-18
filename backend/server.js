import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'TELIPORT AI API is running' });
});

// Placeholder API routes for future features
app.get('/api/dashboard/stats', (req, res) => {
  res.json({
    totalSessions: 1247,
    activeUsers: 89,
    assessmentsCompleted: 342,
    avgEngagement: 87,
  });
});

app.listen(PORT, () => {
  console.log(`TELIPORT AI Backend running at http://localhost:${PORT}`);
});
