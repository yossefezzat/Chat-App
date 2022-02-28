const path = require('path');
const express = require('express');

const app = express();

const port = process.env.PORT || 3000;
const directoryPath = path.join(__dirname, '../public');

app.use(express.static(directoryPath));

app.listen(port, ()=>{
    console.log(`server up at port ${port}`);
})





