const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is running');
});

app.get('/search', (req, res) => {
  const q = req.query.q || '';
  res.send(`You searched for: ${q}`);
});

app.post('/dangerous-eval', (req, res) => {
  const code = req.body.code;
  const result = eval(code);
  res.json({ result });
});

app.get('/profile', (req, res) => {
  res.send(`
    <html>
      <head><title>Profile</title></head>
      <body>
        <h1>User Profile</h1>
        <form>
          <input name="username" />
          <button type="submit">Save</button>
        </form>
      </body>
    </html>
  `);
});
app.get('/debug-secret', (req, res) => {
  const password = "SuperSecret123";
  res.send("Debug password is: " + password);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
