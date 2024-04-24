//Server.js
const express = require('express');
const { connect } = require("./connect");
const { router } = require("./routes");

const app = express();

connect()
 

app.use(express.json());
app.use("/", router);

app.get('/', (req, res) => {
    res.send('Hello server ...');
});



const port = 4000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

app.post("/test", (req, res) => {
    res.send("Test POST request successful");
});
