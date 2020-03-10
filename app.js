const express = require('express');
const cookieParser = require('cookie-parser');
const defaultRouter = require('./routes/pageRoute');
const db = require('./config/db'); 
//app is instance of express object
const app = express();
const port = 2000;
//to use middleware the command is 'use'
app.use(cookieParser());
app.use('/', defaultRouter);


app.listen(port, ()=>{
    db.init();
    console.log(`listening on port ${port}`);
});

