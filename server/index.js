const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 4500;

app.use(cors());

app.get('/upload', (req, res ) => {
    res.send("Server is Running");
})

app.listen(PORT, () => console.log('Server Running on the port '+PORT));
