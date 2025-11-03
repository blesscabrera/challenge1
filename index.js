// index.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ optionsSuccessStatus: 200 })); // so FCC can test
app.use(express.static('public'));

// Root endpoint
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// ===== Timestamp API =====
app.get('/api/:date?', (req, res) => {
  const dateParam = req.params.date;

  // Case 1: No date provided → return current date/time
  if (!dateParam) {
    const now = new Date();
    return res.json({ unix: now.getTime(), utc: now.toUTCString() });
  }

  // Case 2: Numeric string → treat as milliseconds
  let date;
  if (/^\d+$/.test(dateParam)) {
    date = new Date(Number(dateParam));
  } else {
    // Case 3: Otherwise, parse as date string
    date = new Date(dateParam);
  }

  // Invalid date check
  if (isNaN(date.getTime())) {
    return res.json({ error: 'Invalid Date' });
  }

  // Valid → return unix + utc
  res.json({ unix: date.getTime(), utc: date.toUTCString() });
});

// ===== Start server =====
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
