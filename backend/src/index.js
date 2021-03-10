const express = require('express');
const routes = require('./routes/routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
app.listen(3333);