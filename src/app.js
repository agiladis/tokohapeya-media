const express = require('express');
const app = express();
const router = require('./routes/v1/route');
require('dotenv').config();

const PORT = process.env.PORT;

// to know how body request type
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`tokohapeya app listening at http://localhost:${PORT}`);
});
