const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');
const { BUILDING_NODE_URL, MANAGEMENT_NODE_URL } = require("./constants");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.use('/building', proxy(BUILDING_NODE_URL));

app.use('/', proxy(MANAGEMENT_NODE_URL));



app.listen(PORT, () => {
    console.log('Gateway is Listening to Port 8000')
});
