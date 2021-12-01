const express = require('express');
const app = express();
const cors = require('cors');

const importData = require('./db.json');
let port = process.env.PORT || 5000;

app.use(cors())
app.get("/doctors", (req, res) => {
    res.send(importData);
});

app.listen(port, ()=> {
    console.log(`listening on port http://localhost:${port}`)
});