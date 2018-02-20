const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Disc golf'));

app.listen(3000, () => console.log('App listening on port 3000'));