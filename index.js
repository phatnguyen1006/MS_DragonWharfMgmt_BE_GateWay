const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');
const { BUILDING_NODE_URL, MANAGEMENT_NODE_URL } = require("./constants");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.use('/building', proxy(BUILDING_NODE_URL));
app.use('/management', proxy(MANAGEMENT_NODE_URL));

app.post("/login", (req, res, next) => {
    console.log(req.body);
    if (req.body.username != "tlinh") return res.status(401).json({ "success": false, "message": "Can not find username" });
    if (req.body.password != "tlinh") return res.status(401).json({ "success": false, "message": "Incorrect password" });

    return res.status(200).json({ "success": true, "accessToken": "This is accessToken" });
});

app.get("/", (req, res, next) => {
    return res.status(200).json({ "success": true, "message": "Hi there! We are GIS team"});
});

app.listen(PORT, () => {
    console.log('Gateway is Listening to Port 8000')
}).setTimeout(60*1000);
