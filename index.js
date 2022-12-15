const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');
const { BUILDING_NODE_URL, MANAGEMENT_NODE_URL, STATUE_NODE_URL } = require("./constants");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.use('/building', proxy(BUILDING_NODE_URL));
app.use('/management', proxy(MANAGEMENT_NODE_URL));
app.use('/statue', proxy(STATUE_NODE_URL));

app.get("/", (req, res, next) => {
    return res.status(200).json({ "success": true, "message": "Hi there! We are GIS team"});
});

app.listen(PORT, () => {
    console.log('Gateway is Listening to Port 8000')
}).setTimeout(60*1000);
