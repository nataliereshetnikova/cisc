const express = require('express');
const cookieParser = require('cookie-parser');
//app is instance of express object
const app = express();
const port = 2000;
//to use middleware the command is 'use'
app.use(cookieParser);

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});

