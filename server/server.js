const path = require('path');
const express = require('express');
const publicPath = path.join(__dirname,'../public');
var app = express();
app.set(express.static(publicPath));
console.log('Path is ....'+publicPath);
app.listen(3001);
