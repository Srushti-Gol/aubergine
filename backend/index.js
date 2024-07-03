const express = require('express');
const cors = require('cors');
const Routes = require('./routes/universities');

const app = express();
const port = 5000;

app.use(cors());
app.use('/api/universities', Routes);

app.listen(port, () => {
  console.log(`Server is running`);
});

