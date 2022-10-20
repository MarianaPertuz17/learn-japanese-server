const express = require('express');
const app = express();
const router = require('./router');
const cors = require('cors');

const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => console.log('Server listening'));