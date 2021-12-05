const express = require('express');
const mongoose = require('mongoose');

const app = express();

// PORT
PORT = 5000 || process.env.PORT;
app.listen(PORT, console.log(`listening on port: ${PORT}`));
