const path = require('path');
const express = require('express');
const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
var app = express();
app.use(express.static(publicPath));
console.log('Path is ....'+publicPath);
app.listen(port,()=>{
  console.log(`Listening to the port ${port}`);
});
