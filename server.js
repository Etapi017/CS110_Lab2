const express = require('express');
const path = require('path');
const app = express();


// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get("/admin", (req, res) => {
    res.send("Administration Page");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});