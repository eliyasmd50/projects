const express = require('express');
const app = express();
const PORT = 4500;

app.get('/', (req, res ) => {
    res.send("Server is Running");
})

app.listen(PORT, () => console.log('Server Running on the port '+PORT));
