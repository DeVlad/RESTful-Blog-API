const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

let app = express();
let port = process.env.PORT || 8000;





// Return 404 on missing pages
app.get('*', function (req, res) {
    res.status(404).send('Error: 404. Page not found !');
});

app.listen(port);
console.log('Server is running on: ' + port);
