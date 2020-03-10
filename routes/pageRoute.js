const router = require('express').Router();
const pageModel = require('../model/pageModel');

router.get("/",(req,res)=>{
    res.send("<h1>Home</h1>");
});

router.get("/:key", async (req,res)=>{
    let page = await pageModel.getPage(req.params.key);
    if(page[0]!==undefined){
        res.send(page[0].CONTENT);
    } else{
        res.send(`<h1>${req.params.key} does not exist.</h1>`)
    }
});

module.exports = router;