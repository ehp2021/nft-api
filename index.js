const express = require('express');
const app = express();
const cors = require('cors');

const importData = require('./db.json');
let port = process.env.PORT || 5000;

app.use(cors())
app.get("/", (req, res) => {
    res.send(importData);
});
app.patch("/:id", (req, res) => {
    const id = req.params.id;
    importData
        .findOne({ id: id })
        .update({ minted: true },
            function(err) {
                if (!err) {
                    res.send("Successfully updated to true.");
                } else {
                    res.send(err);
                }
            })
})

app.listen(port, () => {
    console.log(`listening on port http://localhost:${port}`)
});