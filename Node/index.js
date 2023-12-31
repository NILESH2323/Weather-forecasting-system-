const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const {mongoose} = require('./db.js');
var recordCont = require('./controllers/recordCont.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({origin:"*"}));

app.listen(3000,()=> console.log('Server started at port : 3000'));

app.use('/records',recordCont);